#!/bin/bash
# Build documentation
#
# This file needs to be executable:
# chmod u+x ./build_docs.sh
# Run as:
# ./build_docs.sh

cp myst_learn7.yml myst.yml

myst build --pdf && cp _build/exports/myst.pdf M348-JupyterLite-Learn7-Guide.pdf

cp myst_desktop.yml myst.yml

myst build --pdf && cp _build/exports/myst.pdf M348-JupyterLite-Desktop-Guide.pdf
