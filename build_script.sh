#!/bin/bash
set -e

# Ensure uv is installed
pip install uv

# Create a virtual environment and install the project
uv venv
source .venv/bin/activate
uv pip install -e .

# Use uv to create a standalone executable
#uv pip compile pyproject.toml -o requirements.txt
uv pip install pyinstaller
pyinstaller --onefile --add-data "static:static" --name m348-jupyterlite app.py

echo "Build complete. Executable is in the dist directory."