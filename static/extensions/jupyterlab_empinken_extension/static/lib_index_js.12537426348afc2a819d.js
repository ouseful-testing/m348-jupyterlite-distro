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
/* harmony export */   old_and_new_typs: () => (/* binding */ old_and_new_typs),
/* harmony export */   typs: () => (/* binding */ typs),
/* harmony export */   update_empinken_settings: () => (/* binding */ update_empinken_settings)
/* harmony export */ });
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./lib/icons.js");
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
const old_and_new_typs = ['activity', 'solution', 'learner', 'tutor', "commentate", "student"];
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
    const tags = old_and_new_typs.map(t => (settings === null || settings === void 0 ? void 0 : settings.get(`${t}_tag`).composite) || t);
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
const captions = {
    A: 'Colour activity cell',
    S: 'Colour solution cell',
    L: 'Colour learner / call to action cell',
    T: 'Colour tutor / feedback  cell'
};
// Create the dictionary with explicit typing
const iconDict = {
    A: _icons__WEBPACK_IMPORTED_MODULE_1__.activityIcon,
    S: _icons__WEBPACK_IMPORTED_MODULE_1__.solutionIcon,
    L: _icons__WEBPACK_IMPORTED_MODULE_1__.learnerIcon,
    T: _icons__WEBPACK_IMPORTED_MODULE_1__.tutorIcon
};
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
        // TO DO - should we separate the command and the button?
        // Here, display_button determines whether the command is registered,
        // as well as whether the button is displayed
        if (display_button) {
            // Register a command in a de facto `ouseful_empinken` command namespace
            const command = `ouseful_empinken:${suffix}`;
            // Add the command...
            app.commands.addCommand(command, {
                label,
                caption: captions[label],
                icon: iconDict[label],
                execute: () => {
                    console.log(label);
                    // ... to the desired cell(s)
                    (0,jupyterlab_celltagsclasses__WEBPACK_IMPORTED_MODULE_0__.apply_on_cells)(notebookTracker, scope, the_function);
                }
            });
            // Register the toolbar buttons
            palette.addItem({ command, category: 'empinken_buttons' });
            // Register keyboard shortcut bindings
            if (keys) {
                app.commands.addKeyBinding({
                    command,
                    keys,
                    selector: '.jp-Notebook'
                });
            }
        }
    };
    // For each empinken cell type, add an appropriate command.
    typs.forEach(typ => {
        // Use a simple label text label for the button
        // Really this should be a vector image?
        const label = typ[0].toUpperCase();
        // console.log(`typ ${typ} has tag ${typ} ok? `);
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

/***/ "./lib/icons.js":
/*!**********************!*\
  !*** ./lib/icons.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activityIcon: () => (/* binding */ activityIcon),
/* harmony export */   learnerIcon: () => (/* binding */ learnerIcon),
/* harmony export */   solutionIcon: () => (/* binding */ solutionIcon),
/* harmony export */   tutorIcon: () => (/* binding */ tutorIcon)
/* harmony export */ });
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/ui-components */ "webpack/sharing/consume/default/@jupyterlab/ui-components");
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__);

// Icons from Material Design Icons:
// https://pictogrammers.com/library/mdi/
//https://pictogrammers.com/library/mdi/icon/book-open-outline/
const activityIcon = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
    name: 'jupyterlab_empinken_extension:activity_icon',
    svgstr: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>book-open-variant-outline</title><path d="M12 21.5C10.65 20.65 8.2 20 6.5 20C4.85 20 3.15 20.3 1.75 21.05C1.65 21.1 1.6 21.1 1.5 21.1C1.25 21.1 1 20.85 1 20.6V6C1.6 5.55 2.25 5.25 3 5C4.11 4.65 5.33 4.5 6.5 4.5C8.45 4.5 10.55 4.9 12 6C13.45 4.9 15.55 4.5 17.5 4.5C18.67 4.5 19.89 4.65 21 5C21.75 5.25 22.4 5.55 23 6V20.6C23 20.85 22.75 21.1 22.5 21.1C22.4 21.1 22.35 21.1 22.25 21.05C20.85 20.3 19.15 20 17.5 20C15.8 20 13.35 20.65 12 21.5M11 7.5C9.64 6.9 7.84 6.5 6.5 6.5C5.3 6.5 4.1 6.65 3 7V18.5C4.1 18.15 5.3 18 6.5 18C7.84 18 9.64 18.4 11 19V7.5M13 19C14.36 18.4 16.16 18 17.5 18C18.7 18 19.9 18.15 21 18.5V7C19.9 6.65 18.7 6.5 17.5 6.5C16.16 6.5 14.36 6.9 13 7.5V19M14 16.35C14.96 16 16.12 15.83 17.5 15.83C18.54 15.83 19.38 15.91 20 16.07V14.57C19.13 14.41 18.29 14.33 17.5 14.33C16.16 14.33 15 14.5 14 14.76V16.35M14 13.69C14.96 13.34 16.12 13.16 17.5 13.16C18.54 13.16 19.38 13.24 20 13.4V11.9C19.13 11.74 18.29 11.67 17.5 11.67C16.22 11.67 15.05 11.82 14 12.12V13.69M14 11C14.96 10.67 16.12 10.5 17.5 10.5C18.41 10.5 19.26 10.59 20 10.78V9.23C19.13 9.08 18.29 9 17.5 9C16.18 9 15 9.15 14 9.46V11Z" /></svg>'
});
//https://pictogrammers.com/library/mdi/icon/check/
const solutionIcon = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
    name: 'jupyterlab_empinken_extension:solution_icon',
    svgstr: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>'
});
//https://pictogrammers.com/library/mdi/icon/school-outline/
const learnerIcon = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
    name: 'jupyterlab_empinken_extension:learner_icon',
    svgstr: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>school-outline</title><path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z" /></svg>'
});
//https://pictogrammers.com/library/mdi/icon/format-quote-close/
const tutorIcon = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_0__.LabIcon({
    name: 'jupyterlab_empinken_extension:tutor_icon',
    svgstr: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>format-quote-close</title><path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" /></svg>'
});


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
//# sourceMappingURL=lib_index_js.12537426348afc2a819d.js.map