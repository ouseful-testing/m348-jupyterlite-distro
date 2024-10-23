# m348-jupyterlite-distro

Builder for a JupyterLite Desktop application / pyinstaller distribution. Uses: flask + jupyterlite bundle, ships an exe

Based on: `pyinstaller --onefile --add-data "static:static" --name m348-jupyterlite app.py`

## Preparing This Repository

The repo actions builds the distribution around JupyterLite distribution placed in the `./static` directory.

The JupyterLite distribution is built using an action in https://github.com/ouseful-testing/jupyterlite-webr-kernel which constructs a custom web Jupyterlite kernel and then creates a JupyterLite distribution that makes use of it.

The `jupyterlite-webr-kernel` builds a self-contained web distribution with package and webr files distributed alongside the jupyterlite environment; the R packages are currently custom built in the https://github.com/ouseful-testing/webr-package-repo-demo repo and then placed in the `webr-package-repo-demo` repo `packages_wasmbuilt` directory.

## Generating the JupyterLite Desktop application

The JupyterLite distribution should be placed in the `static` directory. The distribution can be built using https://github.com/ouseful-testing/jupyterlite-webr-kernel/tree/th-custom-path (the files are available as an artefact uploaded by the build action).

The web app also serves files from the `M348-24J` directory, so we can load datafiles in:

```R
shared_url <- function(filename, portnumber = NULL) {
  # Use the portnumber passed to the function, if provided, 
  # otherwise check if PORTNUMBER exists in the environment.
  # If neither is provided, default to 8348.
  portnumber <- if (!is.null(portnumber)) portnumber else if (exists("PORTNUMBER")) PORTNUMBER else 8348
  
  paste0("http://localhost:", portnumber, "/share/", filename)
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

We could also monkey patch `read.csv()`:

```R
# Save the original read.csv function
original_read_csv <- read.csv

# Monkey patch read.csv
read.csv <- function(file, ...) {
  # Convert file path using shared_url
  file <- shared_url(file)
  
  # Call the original read.csv function with the modified file path
  original_read_csv(file, ...)
}

# Test the patched read.csv
DESKTOP_HOMEDIR_DATA_FILE <- "EMA/data/testdata.csv"
shared_data <- read.csv(DESKTOP_HOMEDIR_DATA_FILE)

```
