## Accessing the Module Notebooks

The JupyterLite / Jupyterlab environment provides an environment for working with Jupyter notebook documents, which have the file suffix `.ipynb`.

These documents will be distributed in their own `.zip` file archive. Unzip the file archive and put the notebooks in a location where they can be saved. You may find it convenient to place the notebooks in an `M348-24J` folder in your user home directory (for example, `C:\Users\<username>\M348-24J` on Windows, or `/Users/<username>/M348-24J` on a Mac).

The *Local Filesystem Accesss* extension provides a way of granting access to files on your computer from the JupyterLab environment running in the browser. The *Local Filesystem Accesss* extension is described in the following section.

If you *cannot* access files using this extension, you will need to upload the notebooks you intend to work on at the start of each JupyterLab session, and then save your modified notebooks back to your computer at the end of each session.

### Local Filesystem Access

The [`jupyterlab-contrib/jupyterlab-filesystem-access`](https://github.com/jupyterlab-contrib/jupyterlab-filesystem-access) extension adds local file system access to the JupyterLab environment (this may not work in all browsers).

This extension allows you to select a directory from your local filesystem (which is to say, the files on your own computer) and access that directory from within Jupyter environment *wherever that environment is actually hosted*, {ref}`jl_local_file_listing`.

From the "Open new folder" button in the *Local File System* tab, open a directory on your computer. *You may be prompted for permission.* Sharing the folder allows the browser to read and open the contents of the folder on your computer in the Jupyter environment, {ref}`jl_shared_fs`.

```{figure} images/jl_shared_fs.png
:name: jl_shared_fs
:width: 5.772370953630796in

Shared computer filesystem.

Screenshot showing how to mount a directory from your computer into the JupyterLab UI.

```

*No files are copied: the browser is just given permission to read to them from that directory.*

You should then be able to see files shared from your computer into JupyterLab, {ref}`jl_local_file_listing`.

```{figure} images/jl_local_file_list.png
:name: jl_local_file_listing
:width: 5.772370953630796in

Local file browser.

Screenshot of a sidebar that lists files mounted into the browser from the local file system. *Note that files are shown for a different module.*

```

You can also create files in the Jupyter environment and save them back to your computer. For example, in the local file system browser, right click and select *New File*. You may be prompted for permission to write to the shared directory (the browser cannot write outside that directory). The file should appear in the folder on your computer. If you open and edit the file in the Jupyter environment, then save it, it should be saved to your computer.

Read and write permissions over the shared directory on the local filesystem are granted to the domain serving the environment for the duration of a browser session (i.e. as long as at least one tab is open onto the Jupyter server).

### Uploading Notebooks to the JupyterLite Enviroment

To upload files or zipped file archives, click the up arrow ("Upload Files") icon in the JupyterLab file browser toolbar.

```{figure} images/js_file_upload.png
:name: js_file_upload

JupyterLab file browser, file upload button (up arrow icon)
```

## Downloading Files from the JupyterLite Environent

To download a copy of an open notebook, click on the *Download* link in the notebook toolbar. This *should* automatically save the notebook before downloading it, but we advise that you *always* save a notebook before downloading it, just to be sure.

To download a file from the file browser sidebar, right click on the file and then select *Download*, {ref}`jl_download_notebook`.

```{figure} images/jl_download_notebook.png
:name: jl_download_notebook

Downloading files from JupyterLab

Screenshot of JupyterLab showing two ways of downloading notebooks: from a Download button in an open notebook; and by right clicking on a notebook in the file browser, then selecting the "Download" menu option.
```
