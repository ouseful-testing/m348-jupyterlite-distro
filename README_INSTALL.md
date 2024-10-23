# Installation and Test

*Notes for installing and testing the M348 JupyterLite desktop installation on Windows computers.*

```{include} _STARTUP_WINDOWS.md
```

### In Case of Startup Issues

If the application does not run on the default port, close the terminal window and try rerunning the application. This time, enter `0` to use a dynamically allocated port number.

When using a port number other than `8348`, the port number should be set in each notebook. The port number appears at the end of the URL. For example, if the URL is `http:127.0.0.1: 8888` or `http://localhost:8888` the port number is `8888`.

If the port number is *not* the default value (`8348`), the `PORTNUMBER` parameter value should be set in each notebook. From the above example, the following should be set: `PORTNUMBER=8888`

## Installation testing

Once the application has been launched and accessed in the browser, you should be presented with a view of a JupyterLab environment.

If you have used the default port value (`8348`) or a port value other than `0`, the application should have automatically opened into browser using the Jupyter Notebook view.

Two notebooks are bundled into the environment: `M348-styling-test.ipynb` and `M348-code-tests.ipynb`.

In the local JupyterLab file browser, double click on the `M348-styling-test.ipynb` notebook to open it. It should render a notebook containing coloured cells and an embedded image, {numref}`styling_test_notebook`.

```{figure} images/styling_test_notebook.png
:name: styling_test_notebook
Screenshot of JupyterLab UI showing rendered styling text notebook with coloured background cells and displaying an embedded image
```

Double click on the `M348-code-tests.ipynb` notebook to open it. From the `Run` menu, select *Run All Cells*.

Hopefully, each cell will run correctly (indicated by a green block in left hand margin of each cell). *Note the test to read a written CSV data file may fail. Everything else should pass.*

If there are any issues, please raise them with your tutor or the M348 module team.
