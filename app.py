from flask import Flask, send_from_directory
import os

app = Flask(__name__)


@app.route("/")
def index():
    return send_from_directory("static", "index.html")


@app.route("/<path:path>")
def serve_static(path):
    return send_from_directory("static", path)


def open_browser(port):
    url = f"http://127.0.0.1:{port}"
    webbrowser.open(url)

import webbrowser
import threading


if __name__ == "__main__":
    # Prompt the user for a port number
    while True:
        try:
            port = int(input("Enter the port number to run the server on: "))
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
