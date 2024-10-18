# m348-jupyterlite-distro
Builder for pyinstaller distributions - flask + jupyterlite bundle exe

Based on: `pyinstaller --onefile --add-data "static:static" --name m348-jupyterlite app.py`

The JupyterLite distribution should be placed in the `static` directory. The distribution can be built using https://github.com/ouseful-testing/jupyterlite-webr-kernel/tree/th-custom-path (the files are available as an artefact uploaded by the build action).

The web app also serves files from the `M348-24J` directory, so we can load datafiles in:

```R
shared_url = function (filename) {
    PORTNUMBER <- if (exists("PORTNUMBER")) PORTNUMBER else 8348
    paste0("http://localhost:",PORTNUMBER,"/share/",filename)
}

# The server also serves files from the "M348-24J"
# in the user's home directory.

#For example, if I have a data file "testdata.csv"
# in a folder called "data"
# inside a folder called EMA
# inside my "M348-24J" folder in my home directory
# I can set a path to it inside the "M348-24J" folder as:
DESKTOP_HOMEDIR_DATA_FILE = "EMA/data/testdata.csv"

# Now read the data file in:
shared_data = read.csv(shared_url(DESKTOP_HOMEDIR_DATA_FILE))

head(shared_data)
```
