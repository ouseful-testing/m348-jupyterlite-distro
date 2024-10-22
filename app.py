from rich.console import Console
from rich.text import Text

from flask import Flask, send_from_directory, request
from flask_cors import CORS
import os
from pathlib import Path
import logging

DEFAULT_PORT = 8348

app = Flask(__name__)

console = Console()

# SISE use:
# If we need to tighten this down further we can omit CORS
CORS(app)

SHARED_DIR = Path(os.path.expanduser("~")) / "M348-24J"
if not os.path.exists(SHARED_DIR):
    os.makedirs(SHARED_DIR)

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

    header = Text("\n\nOU M348 Portable JupyterLite Installation\n\n", style="bold blue")
    console.print(header)

    console.print("This application will start a simple webserver running JupyterLite.\n")

    console.print(
        "You will be prompted for a port number, range between 1024 and 65535. or enter 0 for dynamic port allocation.\n"
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
                console.print("Use the http:127.0.0.1 or http://localhost address in your browser", style="green")
                if port == 0:
                    console.print(f"In each notebook, you MUST set PORTNUMBER to the dynamically allocated value")
                break
            else:
                console.print("Port number must be between 1024 and 65535. Please try again.")
        except ValueError:
            console.print("Invalid input. Please enter a valid port number.", style="red")

    # Open the browser in a separate thread
    if port!=0:
        threading.Thread(target=open_browser, args=(port,), daemon=True).start()

    # Run the Flask app on the specified port
    app.run(host="0.0.0.0", port=port)
