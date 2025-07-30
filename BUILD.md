# BUILD NOTES

Documentation files can be built using MyST publishing tools using the configuration found in `myst.yml`.

Two myst configurations are providind:

- documentation for Desktop application (`myst_desktop.yml`)
- documentation for Learn7 application (`myst_learn7.yml`)

To generate the `myst.yml` file run the command `cp myst_desktop.yml myst.yml` or `cp myst_learn7.yml myst.yml`

To build the documentation PDF, run: `myst build --pdf && cp _build/exports/myst.pdf M348-JupyterLite-Desktop-Guide.pdf`

A  helper script is also provided (may require `chmod u+x ./build_docs.sh`)