## Installation on Windows

The *M348 JupyterLite Desktop Application* is provided as a single executable `.exe` application (`m348-jupyterlite.exe`) that requires no installation and that should be run from the desktop.

Double clicking on the `.exe` file will launch a terminal that runs a start-up script. *It may take up to a minute for the script to run, during which time the terminal will remain empty, {ref}`blank_terminal`. When the script does run, it will display various outputs that log its progress.*

```{figure} images/blank_terminal.png
:name: blank_terminal

Screenshot of a blank terminal
```

As part of the startup sequence, the startup script will check to see if an `M348-24J` directory appears at the top level of the user's home directory (for example, `C:\Users\<username>\M348-24J` on Windows, or `/Users/<username>/M348-24J` on a Mac). Data files contained in this directory can be *read* from the notebooks, but not written to. The script will also attempt to write an installation test data file (`jl_distro_data_test.csv`) into that directory.

You will be prompted to enter a port number, {ref}`exe_initial_prompt`. In the first instance you should accept the default value (`8348`) by hitting `Enter`.

```{figure} images/exe_initial_prompt.png
:name: exe_initial_prompt

Windows terminal screen showing port number prompt request, with defaul 8348.
```

A port will be allocated based on your response, and the port number being used will be reported back to you. Make a note of the web address the application will be published to.

As prompted, click `Enter` again to start the application webserver, {ref}`startup_enter_to_run`.

```{figure} images/startup_enter_to_run.png
:name: startup_enter_to_run

Windows terminal screen showing port allocation, awaiting server start
```

You should now be able to access the JupyterLite environment in your browser. By default the application will be published to `http://localhost:8348` or `http://127.0.0.1:8348` (these both refer to the same location).

A browser should automatically open the application at the appropriate URL. If the browser does not open, use the location provided previously.

*If you used a port number other than the default (`8348`), or if you specified the port as `0` to dynamically assign a port, you should use the port number you specifed, or the dynamically allocated port number, when accessing the environment.*
