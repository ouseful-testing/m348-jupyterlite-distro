# README (TUTOR)

*Notes for installing and testing the M348 JupyterLite desktop installation on Windows computers.*

## Installation on Windows

The M348 JupyterLite desktop application is provided as a single executable `.exe` application that requires no installation and that should be run from the desktop.

Double clicking on the `.exe` file will launch a terminal that runs a start-up script.

You will be prompted to enter a port number. In the first instance you should accept the default value (`8348`) by hitting `Return`.

The script will start a simple webserver on the desktop and display a link for the application. If the default port is is used, a browser should automatically open onto the application.

### In Case of Startup Issues

If the application does not run on the default port, close the terminal window and try rerunning the application. This time, enter `0` to use a dynamically allocated port number.

When using a port number other than `8348`, the port number should be set in each notebook. The port number appears at the end of the URL. For example, if the URL is `http:127.0.0.1: 8888` or `http://localhost:8888` the port number is `8888`.

If the port number is *not* the default value (`8348`), the `PORTNUMBER` parameter value should be set in each notebook. From the above example, the following should be set: `PORTNUMBER=8888`

## Installation testing

The 

## Guidance for Students

The student guidance notes cover:

- starting the JupyterLite server;
- accessing the JupyterLite environment in a browser
- 