@echo off
setlocal enabledelayedexpansion

REM Exit on any error
set "ERRORLEVEL=0"

REM Ensure uv is installed
pip install uv
if %ERRORLEVEL% neq 0 exit /b %ERRORLEVEL%

REM Create a virtual environment and install the project
uv venv
if %ERRORLEVEL% neq 0 exit /b %ERRORLEVEL%

REM Activate the virtual environment
call .venv\Scripts\activate
if %ERRORLEVEL% neq 0 exit /b %ERRORLEVEL%

REM Install the project in editable mode
uv pip install -e .
if %ERRORLEVEL% neq 0 exit /b %ERRORLEVEL%

REM Install PyInstaller
uv pip install pyinstaller
if %ERRORLEVEL% neq 0 exit /b %ERRORLEVEL%

REM Build the standalone executable
pyinstaller --onefile --add-data "static;static" --name m348-jupyterlite app.py
if %ERRORLEVEL% neq 0 exit /b %ERRORLEVEL%

echo Build complete. Executable is in the dist directory.

endlocal
