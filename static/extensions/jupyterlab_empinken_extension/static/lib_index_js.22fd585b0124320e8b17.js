"use strict";
(self["webpackChunkjupyterlab_empinken_extension"] = self["webpackChunkjupyterlab_empinken_extension"] || []).push([["lib_index_js"],{

/***/ "./lib/empinken_commands.js":
/*!**********************************!*\
  !*** ./lib/empinken_commands.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create_empinken_commands: () => (/* binding */ create_empinken_commands),
/* harmony export */   typs: () => (/* binding */ typs),
/* harmony export */   update_empinken_settings: () => (/* binding */ update_empinken_settings)
/* harmony export */ });
/* harmony import */ var jupyterlab_celltagsclasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jupyterlab-celltagsclasses */ "webpack/sharing/consume/default/jupyterlab-celltagsclasses/jupyterlab-celltagsclasses");
/* harmony import */ var jupyterlab_celltagsclasses__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jupyterlab_celltagsclasses__WEBPACK_IMPORTED_MODULE_0__);
/********* JUPYTERLAB_EMPINKEN _EXTENSION *********

The `jupyterlab_empinken_extension` provides a range of tools
for manipulating the displayed background colour of notebook code cells.

The name derives from an original classic notebook extension that was used to
add a pink background colour to appropriately tagged cells as a way for academic tutors
to highlight notebook cells in which they were providing feedback comments back to students.

The extension works as follows:

- cell metadata tags are used to label cells that should be recoloured.
- the jupyterlab-celltagsclasses extension (installed as a dependency)
  maps cell metadata tags onto CSS classes (using the form: cell-tag-TAG)
  on the HTML cell view;
- CSS style rules are used to set the background cell colour on
  appropriately classed cell elements.

Whilst metadata tags may be manually applied to cells via the JupyterLab UI,
toolbar buttons are also supported to allow tags to be applied to the active
cell or multiple selected cells.

Tags may be applied to all notebook cell types (markdown cell, code cell, etc.).

Clicking the notebook button toggles the metadata tag for the
corresponding empinken cell type.

Using the notebook button to add a tag also ensures that at most ONE of the
supported empinken tags is added to a cell at any one time.

User settings (defined in ../scheme/plugin.json) determine:

- which empinken buttons are displayed on the notebook toolbar;
- what background colour is applied to an empinken tagged cell;
- whether the background colour should be applied for each empinken cell type;
- what empinken tag prefix (if any) should be applied to
  empinken cell types (defaults to `style-`)

*/
// The jupyterlab-celltagsclasses extension provides a range of utility functions
// for working with notebook cells, including:
// - metadata handling on a cell's logical model

// - working with cells' in the rendered JupyterLab UI view

// Define a collection of empinken cell types.
const typs = ['activity', 'solution', 'learner', 'tutor'];
// Metadata tags used by the extension are generated as a combination of a
// settings provided prefix and the empinken cell type.
function getFullTag(prefix, tag) {
    return `${prefix}${tag}`;
}
// When a button is clicked, toggle the corresponding
// empinken tag on the appropriate cell(s).
// Also ensure that AT MOST ONE empinken tag is applied
// to any particular cell.
const toggleTag = (cell, typ, prefix, settings) => {
    // This is made unnecessarily complicated because we provide
    // a level of indirection between the empinken cell type and the associated tag.
    // This means we need to generate the tag list from the settings,
    // rather than derive them directly from the empinken cell types.
    // This is also going to be brittle when it comes to the CSS, because
    // the cell classes are derived directly from the cell tag using the
    // jupyterlab-celltagsclasses extension.
    const tags = typs.map(t => (settings === null || settings === void 0 ? void 0 : settings.get(`${t}_tag`).composite) || t);
    // The full tag is the prefix and the partial tag as specified in the settings
    const tag = (settings === null || settings === void 0 ? void 0 : settings.get(`${typ}_tag`).composite) || typ;
    const fullTag = getFullTag(prefix, tag);
    // Metadata path to the tags
    const tags_path = 'tags';
    // Does that tag exist in the cell metadata?
    const hasTag = (0,jupyterlab_celltagsclasses__WEBPACK_IMPORTED_MODULE_0__.md_has)(cell, tags_path, fullTag);
    if (hasTag) {
        // Remove the desired tag
        (0,jupyterlab_celltagsclasses__WEBPACK_IMPORTED_MODULE_0__.md_remove)(cell, tags_path, fullTag);
    }
    else {
        // We only allow one empinken tag per cell,
        // so remove all empinken tags if any are present
        tags.forEach(typ => (0,jupyterlab_celltagsclasses__WEBPACK_IMPORTED_MODULE_0__.md_remove)(cell, tags_path, getFullTag(prefix, typ)));
        // Set the tag
        (0,jupyterlab_celltagsclasses__WEBPACK_IMPORTED_MODULE_0__.md_insert)(cell, tags_path, fullTag);
    }
    console.log(`Toggled cell tag ${fullTag}`, cell.node);
};
// If the user settings for the extension are updated,
// act on the updates if we can.
// In particular:
// - update cell background colours
// - ignore cell colours if the render setting
//   for an empinken cell type is not true.
function update_empinken_settings(settings, root) {
    // Cells are coloured according to CSS variables
    // used in CSS rules applied to appropriately classed cells.
    // The CSS rules are defined in ../style/base.css.
    // The jupyterlab-celltagsclasses extensions creates a class of the form cell-tag-TAG
    // for a cell tag TAG. The class is removed if the TAG is removed.
    for (const typ of typs) {
        // Get the background colour for an empinken type from user-settings.
        let color = settings.get(`${typ}_color`).composite;
        // Get the background render flag for an empinken type from user-settings.
        const render = settings.get(`${typ}_render`).composite;
        // if we don't want to render the background colour, make it transparent
        if (!render) {
            color = 'transparent';
        }
        // Set the CSS variable for the empinken cell type
        root.style.setProperty(`--iou-${typ}-bg-color`, color);
    }
}
// When the extension is loaded, create a set of empinken commands,
// and register notebook toolbar buttons as required.
const create_empinken_commands = (app, notebookTracker, palette, settings) => {
    // A settings defined prefix is available that may be added
    // to each empinken cell type when setting the metadata tag.
    const prefix = settings && typeof settings.get('tagprefix').composite === 'string'
        ? settings.get('tagprefix').composite
        : '';
    // Add commands and command buttons.
    // These can be controlled from the extension settings.
    // Currently, JupyterLab needs to be reloaded in a browser tab / window
    // for the button display regime to be updated.
    const add_command = (suffix, typ, label, scope, // Which cells are tags applied to
    keys, // Keyboard shortcut combinations
    settings, the_function) => {
        // By default (in the absence of settings),
        // we will try to display the buttons
        let display_button = true;
        // If there are settings, respect them:
        if (settings !== null) {
            display_button = settings.get(`${typ}_button`).composite;
        }
        // Register the button as required
        if (display_button) {
            // Register a command in a de facto `ouseful_empinken` command namespace
            const command = `ouseful_empinken:${suffix}`;
            // Add the command...
            app.commands.addCommand(command, {
                label,
                execute: () => {
                    console.log(label);
                    // ... to the desired cell(s)
                    (0,jupyterlab_celltagsclasses__WEBPACK_IMPORTED_MODULE_0__.apply_on_cells)(notebookTracker, scope, the_function);
                }
            });
            // Register the toolbar buttons
            palette.addItem({ command, category: 'empinken_buttons' });
            // Register keyboard shortcut bindings
            app.commands.addKeyBinding({
                command,
                keys,
                selector: '.jp-Notebook'
            });
        }
    };
    // For each empinken cell type, add an appropriate command.
    typs.forEach(typ => {
        // Use a simple label text label for the button
        // Really this should be a vector image?
        const label = typ[0].toUpperCase();
        console.log(`typ ${typ} has tag ${typ} ok? `);
        // Add the command and also register and display buttons if required
        add_command(`empkn_${typ}`, // The command name suffix
        typ, // The empinken cell type
        label, // The button label
        jupyterlab_celltagsclasses__WEBPACK_IMPORTED_MODULE_0__.Scope.Multiple, // Cell scope: Active, Multiple (all selected), All
        [], // Keyboard shortcuts
        settings, // User preference settings
        (cell) => toggleTag(cell, typ, prefix, settings) // The command function
        );
    });
};


/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/settingregistry */ "webpack/sharing/consume/default/@jupyterlab/settingregistry");
/* harmony import */ var _jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _empinken_commands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empinken_commands */ "./lib/empinken_commands.js");




/**
 * Initialisation data for the jupyterlab_empinken_extension extension.
 */
const plugin = {
    id: 'jupyterlab_empinken_extension:plugin',
    description: 'A JupyterLab extension for colouring notebook cell backgrounds.',
    autoStart: true,
    requires: [_jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_1__.INotebookTracker, _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_2__.ICommandPalette],
    optional: [_jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_0__.ISettingRegistry],
    activate: (app, notebookTracker, palette, settingRegistry) => {
        console.log('JupyterLab extension jupyterlab_empinken_extension is activated!');
        // User-settings for the extension are defined in ../schema/plugin.json .properties
        if (settingRegistry) {
            settingRegistry
                .load(plugin.id)
                .then(loaded_settings => {
                console.log('jupyterlab_empinken_extension settings loaded:', loaded_settings.composite);
                // Handle the background colours
                // The document object is always available.
                const root = document.documentElement;
                const updateSettings = () => {
                    console.log('jupyterlab_empinken_extension settings updated');
                    (0,_empinken_commands__WEBPACK_IMPORTED_MODULE_3__.update_empinken_settings)(loaded_settings, root);
                };
                updateSettings();
                // Update settings if the settings are changed
                // In the case of empinken, the following will happen
                // immediately the settings are saved (click in the settings canvas to trigger the update):
                // - [Y] update the CSS variables with new colour settings.
                // - [Y] enable/disable display of background colour for each empinken type.
                // - [N] enable/disable button display (requires refresh of browser window).
                loaded_settings.changed.connect(updateSettings);
                // Create empinken commands and add appropriate notebook buttons.
                (0,_empinken_commands__WEBPACK_IMPORTED_MODULE_3__.create_empinken_commands)(app, notebookTracker, palette, loaded_settings);
            })
                .catch(reason => {
                console.error('Failed to load settings for jupyterlab_empinken_extension.', reason);
                // Create empinken commands.
                // The lack of settings means buttons will not be displayed.
                // No CSS variables will have been set via the extension,
                // but they may have been defined via a custom CSS file.
                (0,_empinken_commands__WEBPACK_IMPORTED_MODULE_3__.create_empinken_commands)(app, notebookTracker, palette, null);
            });
        }
        else {
            // Create empinken commands.
            // The lack of settings means buttons will not be displayed.
            // No CSS variables will have been set via the extension,
            // but they may have been defined via a custom CSS file
            (0,_empinken_commands__WEBPACK_IMPORTED_MODULE_3__.create_empinken_commands)(app, notebookTracker, palette, null);
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);


/***/ })

}]);
//# sourceMappingURL=lib_index_js.22fd585b0124320e8b17.js.map