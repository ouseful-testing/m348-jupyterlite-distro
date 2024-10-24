# Installation and Test

*Notes for installing and testing the M348 JupyterLite desktop installation on Windows computers.*

```{include} _STARTUP_WINDOWS.md
```

### In Case of Startup Issues

If the application does not run on the default port, close the terminal window and try rerunning the application. This time, enter `0` to use a dynamically allocated port number.

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

### Problems With Reading Data Files

A `JUPYTERLITE_PATH` *R* variable should be defined that identifies the location that the R kernel believes JupyterLab is running on.

View the value of the variable by running a code cell with the content: `JUPYTERLITE_PATH`.



If the value of the path up to the `/lab` part of the address *does not* match the URL in the browser, you will need to set it manually. In such a case, set the `JUPYTERLITE_PATH` value to the value copied from the browser location bar. For example, if the environment is running at `http://127.0.0.1:8348/lab/index.html`, run the following in a code cell:

`JUPYTERLITE_PATH <- "http://127.0.0.1:8348/lab/index.html"`

## In Case of Further Issues

If you encounter any other issues with running the desktop application, using JupyterLab, or working with the notebooks, please raise them with your tutor or the M348 module team.
