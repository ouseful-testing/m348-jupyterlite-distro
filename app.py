from flask import Flask, send_from_directory
from flask_cors import CORS
import os
from pathlib import Path

app = Flask(__name__)

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


def open_browser(port):
    url = f"http://127.0.0.1:{port}"
    webbrowser.open(url)

import webbrowser
import threading


if __name__ == "__main__":
    # Prompt the user for a port number
    while True:
        try:
            port = int(input("Enter the port number to run the server on (e.g. 8348, or 0 for random allocation): "))
            if 1024 <= port <= 65535 or port==0:
                break
            else:
                print("Port number must be between 1024 and 65535. Please try again.")
        except ValueError:
            print("Invalid input. Please enter a valid port number.")

    # Open the browser in a separate thread
    if port!=0:
        threading.Thread(target=open_browser, args=(port,), daemon=True).start()

    # Run the Flask app on the specified port
    app.run(host="0.0.0.0", port=port)
