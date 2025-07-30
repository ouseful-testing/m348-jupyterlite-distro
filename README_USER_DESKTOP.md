# User Guidance

*Notes for using the M348 JupyterLite desktop installation on Windows computers.*

These guidance notes cover:

- starting the JupyterLite server;
- accessing the JupyterLite environment in a browser
- sharing Jupyter notebook files from your computer into the application
- sharing data files from your computer into the application

## Installation on Windows

See the *Installation on Windows* subsection in the *Installation and Test* section.

*In case of issues, please refer to the __Installation__ section.*

## Accessing the JupyterLite Environment

When the application is running, you should be able to access the JupyterLite environment in your browser. By default the application will be published to `http://localhost:8348` or `http://127.0.0.1:8348` (these both refer to the same location).

```{include} _ACCESSING_NOTEBOOKS.md
```

## Accessing Data Files on the Desktop from the Notebooks

On occasion, you may need to read the contents of a data file on your computer into a notebook. The application is configured so that a notebook can read the contents of CSV data files that are contained in the `M348-24J` directory inside your personal home directory on the computer using the R `read.csv()` function.

This shared directory MUST be at the top level inside your user home directory, for example, `C:\Users\<username>\M348-24J` on Windows, or `/Users/<username>/M348-24J` on a Mac.

Notebooks may also be placed inside this directory, but to edit them in the JupyterLab environment, they will need to be mounted into the browser using the *Local File System* extension described above.
