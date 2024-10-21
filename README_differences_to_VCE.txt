# README — Differences to M348 VCE

The M348 JuptyerLite desktop application uses the same user interface (JupyterLab) and same R programming language environment as the M348 environment delivered via the hosted Open Computing Lab virtual comoputing environment (VCE) service and local VCE application. 

The main differences are:

- the VCEs are deployed using a containerised set of applications, whereas the JupyterLite desktop application is based on a simple locally running http (web) server;
- the VCEs may persist files to a shared directory that is directly accessed by the JupyterLab environment, whereas the JupyterLite desktop application requires files to be mounted from the desktop into the browser each time Jupyterlite is started;
- the M348 package used in JupyterLite Desktop application automatically runs a small number of modified functions and uses modified settings to mask minor differences in how JupyterLite Desktop imports packages and rencers images compared to the VCEs.
