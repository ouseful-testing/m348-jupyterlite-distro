from rich.console import Console
from rich.text import Text
# colors: https://rich.readthedocs.io/en/stable/appendix/colors.html

from flask import Flask, send_from_directory, request
from flask_cors import CORS
import os
from pathlib import Path
import logging
import csv
import socket

MODULE_CODE = "M348"
MODULE_PRESENTATION = "24J"
DEFAULT_PORT = 8348

USER_HOME_DIR = os.path.expanduser("~")

# Define the directory path you want to create (e.g., a folder named 'my_folder' in the home directory)
USER_MODULE_DIR = os.path.join(USER_HOME_DIR, f"{MODULE_CODE}-{MODULE_PRESENTATION}")


console = Console()

app = Flask(__name__)

# SISE use:
# If we need to tighten this down further we can omit CORS
CORS(app)

# Should we use ~/M348-24J or ~/Desktop/M348-24J ?
# The latter would limit this to Windows?
# But we could trap for that?
SHARED_DIR = USER_MODULE_DIR
_made_shared_dir = False
if not os.path.exists(SHARED_DIR):
    os.makedirs(SHARED_DIR)
    _made_shared_dir = True

def find_free_port():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(("", 0))  # Bind to port 0 lets OS assign a free port
        s.listen(1)
        port = s.getsockname()[1]  # Get the assigned port number
        return port


@app.route("/")
def index():
    return send_from_directory("static", "index.html")


@app.route("/<path:path>")
def serve_static(path):
    return send_from_directory("static", path)

@app.route("/share/<path:path>")
def serve_desktop_files(path):
    return send_from_directory(SHARED_DIR, path)

# Via: https://github.com/r-wasm/jupyterlite-webr-kernel?tab=readme-ov-file#headers
# Chatgpt
# After request to modify headers
@app.after_request
def add_corp_headers(response):
    # Check if the request path does not start with /share/
    if not request.path.startswith("/share/"):
        # Add COOP and COEP headers for same-origin isolation
        response.headers["Cross-Origin-Opener-Policy"] = "same-origin"
        response.headers["Cross-Origin-Embedder-Policy"] = "require-corp"

    return response


def open_browser(port):
    # We could launch into notebook UI at /tree
    # BUT this doesn't support the local filesystem mount?
    url = f"http://127.0.0.1:{port}"
    webbrowser.open(url)


import webbrowser
import threading
from rich.console import Console
from rich.text import Text

def clear_terminal():
    # Clear the terminal based on the OS
    try:
        os.system("cls" if os.name == "nt" else "clear")
    except:
        pass

class NoWarningFilter(logging.Filter):
    def filter(self, record):
        # Suppress the specific warning message
        if "This is a development server" in record.getMessage():
            return False
        return True

if __name__ == "__main__":
    log = logging.getLogger('werkzeug')
    log.setLevel(logging.INFO)
    log.addFilter(NoWarningFilter())

    clear_terminal()

    header = Text("\n\nOU M348 PORTABLE JUPYTERLITE INSTALLATION\n\n", style="bold")
    console.print(header)

    try:
        # Check if the directory exists, if not, create it
        if not os.path.exists(USER_MODULE_DIR):
            os.makedirs(USER_MODULE_DIR)
            console.print(f"Shared directory created: {USER_MODULE_DIR}\n")
        elif _made_shared_dir:
            console.print(f"Shared directory created: {USER_MODULE_DIR}\n")
        else:
            console.print(f"Shared directory already exists: {USER_MODULE_DIR}")
    except:
        console.print(
            f"Unable to find or create directory {USER_MODULE_DIR}. You will need to create this directory yourself"
        )

    console.print(
        "You should place any data files you want to access from notebooks in this shared direcctory."
    )

    data = [
        ["Column1", "Column2"],  # Header row
        ["Row1Data1", "Row1Data2"],  # First data row
        ["Row2Data1", "Row2Data2"],  # Second data row
    ]
    try:
        # Writing CSV to the file
        test_csv_fn = Path(USER_MODULE_DIR) / "jl_distro_data_test.csv"
        with open(test_csv_fn, mode="w", newline="") as file:
            writer = csv.writer(file)
            writer.writerows(data)
        console.print(f"Created test file in shared directory created: {test_csv_fn}\n")
    except:
        console.print(
            Text("Failed to create test data file in shared directory.", style="red")
        )
        console.print(
            f"For installation tests, you will need to create a simple csv file as: {test_csv_fn} "
        )

    console.print("The application will now start a simple webserver running JupyterLite.\n")

    console.print(
        "You will be prompted for a port number in the range 1024 and 65535, or 0 for dynamic port allocation.\n"
    )

    console.print(
        Text("Click 'Return' to accept the default value (recommended).\n", style="bold")
    )

    # Prompt the user for a port number
    while True:
        try:
            user_input = input(
                f"Enter the port number to run the server on (default: {DEFAULT_PORT}, or 0 for dynamic allocation): "
            )

            if user_input == "":
                port = DEFAULT_PORT
            else:
                port = int(user_input)
            # port = int(input("Enter the port number to run the server on (e.g. 8348, or 0 for dynamic allocation): "))
            if 1024 <= port <= 65535 or port==0:
                if port == 0:
                    port = find_free_port()
                console.print(
                    f"Use the address [bright_green]http://127.0.0.1:{port}[/bright_green] or [bright_green]http://localhost:{port}[/bright_green] in your browser"
                )
                break
            else:
                console.print("Port number must be between 1024 and 65535, or 0. Please try again.")
        except ValueError:
            console.print("Invalid input. Please enter a valid port number.", style="red")

    threading.Thread(target=open_browser, args=(port,), daemon=True).start()

    # Open the browser in a separate thread
    # Run the Flask app on the specified port
    app.run(host="0.0.0.0", port=port)
