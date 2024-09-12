"use strict";
(self["webpackChunkjupyterlab_cell_status_extension"] = self["webpackChunkjupyterlab_cell_status_extension"] || []).push([["lib_index_js"],{

/***/ "./lib/cell_status_actions.js":
/*!************************************!*\
  !*** ./lib/cell_status_actions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create_cell_status_actions: () => (/* binding */ create_cell_status_actions),
/* harmony export */   update_cell_status_settings: () => (/* binding */ update_cell_status_settings)
/* harmony export */ });
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cell_status_audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell_status_audio */ "./lib/cell_status_audio.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./lib/utils.js");
/********* JUPYTERLAB_CELL_STATUS_EXTENSION *********

The jupyertlab_cell_Status extension provides a range of
cell display and cell accessibility features realting to
code cell execution:

- cell status indication: indicate cells that are queued for/pending execution,
  have completere cell execution successfully, or have a failed cell execution;
- cell flash (code via jupyterlab-cell-flash): flash the body of a code cell
  when it successfull completes execution;
- audible alerts on successful or unsuccessful cell completion;
- spoken announcements describing cell exeucution errors.

*/



// Act on updated user settings:
// - update cell status indicator colour CSS variables
// - update cell flash duration and colour CSS variables
// CSS variables and rules defiend in ../style/base.css
// Settings config and defaults defined in ../schema/plugin.json
function update_cell_status_settings(settings, root) {
    // Get values from settings (settings config: ../schema/plugin.json)
    const queue_color = settings.get('cell_status_queue').composite;
    const success_color = settings.get('cell_status_success').composite;
    const error_color = settings.get('cell_status_error').composite;
    const flash_duration = settings.get('cell_flash_duration')
        .composite;
    // TO DO — Maybe consider different cell flash status colors?
    const flash_colour = settings.get('cell_flash_colour').composite;
    // Update CSS variables to use settings values
    // (CSS variables and style rules defined in ../style/base.css)
    root.style.setProperty('--jp-cell-status-queue', queue_color);
    root.style.setProperty('--jp-cell-status-success', success_color);
    root.style.setProperty('--jp-cell-status-error', error_color);
    root.style.setProperty('--jp-cell-flash-duration', `${flash_duration}s`);
    root.style.setProperty('--jp-cell-flash-color', flash_colour);
}
// Create actions on notebook cell execution related events
const create_cell_status_actions = (settings) => {
    //let heartbeatInterval = null;
    // The NotebookActions.executed event is fired
    // when a notebook cell completes execution.
    _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_0__.NotebookActions.executed.connect((_, args) => {
        var _a, _b, _c, _d;
        const { cell } = args;
        // The code cell model gives us access to the code cell execution count number
        // If required, it also gives access to cell outputs.
        const codeCellModel = cell.model;
        // Flag that identifies whether a cell executed successfully or not.
        const { success } = args;
        const { error } = args;
        // Hard code defaults if no settings are found.
        // (User settings config can be found in ../schema/plugin.json)
        // Should these be the same as the defaults in the settings file?
        let display_cell_status = true;
        let display_flash = false;
        let audio_success = false;
        let audio_error = false;
        let spoken_error = false;
        // Heartbeart is not yet available - need a "cell finished executing" signal
        //let use_heartbeat = false;
        //let heartbeat_pulse_s = 5;
        // If we have a settings file, get the settings from there
        // that relate to whether or not we want partiluar things to happen, such as:
        // - cell flash;
        // - audio alert on successful cell execution;
        // - audio alert on unsuccessful cell execution;
        // - spoken description of error message;
        if (settings != null) {
            // Get values from settings
            display_cell_status = settings.get('cell_status_enable').composite;
            display_flash = settings.get('cell_flash_enable').composite;
            audio_success = settings.get('cell_status_audio_success')
                .composite;
            audio_error = settings.get('cell_status_audio_error')
                .composite;
            spoken_error = settings.get('cell_status_error_spoken_alert')
                .composite;
            //use_heartbeat = settings.get('cell_status_heartbeat')
            //  .composite as boolean;
            //heartbeat_pulse_s = settings.get('cell_status_heartbeat_period')
            //  .composite as number;
        }
        // Cell flash - via https://github.com/jupyterlab-contrib/jupyterlab-cell-flash
        // Get a path to the cell's HTML element we want to flash
        const element = (_a = cell.editor) === null || _a === void 0 ? void 0 : _a.host;
        if (element && display_flash) {
            // Give ourselves a clean cell flash context to work with
            element.classList.remove('cell-flash-effect');
            element.offsetWidth;
            // Define a callback function to tidy up a cell's HTML view
            // when the cell flash animation has finished playing
            const onAnimationEnd = () => {
                // animationcancel is a CSS animation event:
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/animationcancel_event
                element.removeEventListener('animationcancel', onAnimationEnd);
                // animationend is a CSS animation event:
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event
                element.removeEventListener('animationend', onAnimationEnd);
                element.classList.remove('cell-flash-effect');
            };
            // requestAnimationFrame is a browser window method
            // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
            requestAnimationFrame(() => {
                element.addEventListener('animationend', onAnimationEnd);
                element.addEventListener('animationcancel', onAnimationEnd);
                element.classList.add('cell-flash-effect');
            });
        }
        // If we have a code cell, update the status
        if (display_cell_status && cell.model.type == 'code' && cell.inputArea) {
            cell.inputArea.promptNode.classList.remove('cell-status-scheduled');
            // If the cell execution was successful...
            if (success) {
                // Set the visual cell status indicator
                cell.inputArea.promptNode.classList.add('cell-status-success');
                // If required, generate the cell success audio tone
                if (audio_success) {
                    (0,_cell_status_audio__WEBPACK_IMPORTED_MODULE_1__.play_success)();
                }
            }
            else {
                // The cell execution failed for some reason.
                cell.inputArea.promptNode.classList.add('cell-status-error');
                // If we have either audible alert
                if (audio_error || spoken_error) {
                    // If we have the spoken alert
                    if (spoken_error) {
                        // Generate the spoken alert message
                        let line_error = '';
                        const error_items = ((_b = error === null || error === void 0 ? void 0 : error.traceback) === null || _b === void 0 ? void 0 : _b.join('\n').trim().split('\n')) || [];
                        for (let line of error_items) {
                            console.log('  - error item: ' + line + '<<\n');
                        }
                        const error_location = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.scc)(error_items[0])
                            .trim()
                            .replace(/^Cell In\[\d+\],\s*/, '');
                        const error_type = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.scc)(error_items[error_items.length - 1]);
                        let tracebackList = error === null || error === void 0 ? void 0 : error.traceback;
                        if (tracebackList) {
                            for (let line of tracebackList) {
                                if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.scc)(line).trim().startsWith('Cell In')) {
                                    line_error = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.scc)(line)
                                        .trim()
                                        .replace(/^Cell In\[\d+\],\s*/, '')
                                        .split('\n')[0];
                                    break;
                                }
                            }
                        }
                        // Maybe we should console log messages, perhaps tagged in a particular way
                        // Then explore how the console log can be used to provide diagnostic and history info?
                        const msg = `Error in executed cell ${codeCellModel.sharedModel.execution_count}. At ${line_error}. ${error_type}`;
                        (0,_cell_status_audio__WEBPACK_IMPORTED_MODULE_1__.play_error)(msg);
                        console.log('Error errorName: ' + (0,_utils__WEBPACK_IMPORTED_MODULE_2__.scc)(error === null || error === void 0 ? void 0 : error.errorName) + '\n\n');
                        console.log('Error Value' + (0,_utils__WEBPACK_IMPORTED_MODULE_2__.scc)(error === null || error === void 0 ? void 0 : error.errorValue) + '\n\n');
                        console.log('Error Stack' + (0,_utils__WEBPACK_IMPORTED_MODULE_2__.scc)((_c = error === null || error === void 0 ? void 0 : error.stack) === null || _c === void 0 ? void 0 : _c.concat()) + '\n\n');
                        console.log('Error message' + (0,_utils__WEBPACK_IMPORTED_MODULE_2__.scc)(error === null || error === void 0 ? void 0 : error.message) + '\n\n');
                        console.log('Error name' + (0,_utils__WEBPACK_IMPORTED_MODULE_2__.scc)(error === null || error === void 0 ? void 0 : error.name) + '\n\n');
                        console.log('Error traceback' + (0,_utils__WEBPACK_IMPORTED_MODULE_2__.scc)((_d = error === null || error === void 0 ? void 0 : error.traceback) === null || _d === void 0 ? void 0 : _d.join('\n')) + '\n\n');
                        console.log('Line error ' + line_error + '\n\n');
                        console.log(`AA ${error_location} BB ${error_type} CC`);
                    } // If required, just use the simple audio tone alert
                    else if (audio_error)
                        (0,_cell_status_audio__WEBPACK_IMPORTED_MODULE_1__.play_error)();
                }
            }
        }
    });
    // The NotebookActions.executionScheduled event fires
    // when a cell is scheduled for execution.
    _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_0__.NotebookActions.executionScheduled.connect((_, args) => {
        const { cell } = args;
        let display_cell_status = true;
        if (settings != null) {
            display_cell_status = settings.get('cell_status_enable').composite;
        }
        // If we have a code cell, set up the cell flash mechanism:
        // - set the status class to "scheduled"
        // - remove the other cell flash classes
        // ?? Is there a way of detecting that a cell is running rather than scheduled?
        if (display_cell_status && cell.model.type == 'code' && cell.inputArea) {
            cell.inputArea.promptNode.classList.remove('cell-status-success');
            cell.inputArea.promptNode.classList.remove('cell-status-error');
            cell.inputArea.promptNode.classList.add('cell-status-scheduled');
        }
        else if (!display_cell_status && cell.model.type == 'code' && cell.inputArea) {
            // TO DO — this feels slightly overkill but it helps clear unwanted CSS state
            // If we can trigger an update on a settings change,
            // would it be better to set CSS to transparent if there is no display?
            cell.inputArea.promptNode.classList.remove('cell-status-scheduled');
            cell.inputArea.promptNode.classList.remove('cell-status-success');
            cell.inputArea.promptNode.classList.remove('cell-status-error');
        }
    });
};


/***/ }),

/***/ "./lib/cell_status_audio.js":
/*!**********************************!*\
  !*** ./lib/cell_status_audio.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   play_error: () => (/* binding */ play_error),
/* harmony export */   play_success: () => (/* binding */ play_success),
/* harmony export */   play_tone: () => (/* binding */ play_tone),
/* harmony export */   say: () => (/* binding */ say)
/* harmony export */ });
/*

Functions related to audio and speech handling.

- say: speak a message aloud;
- play_tone: generate tone;
- play_success: play a tone on successful execution of a cell;
- play_error: play a tone on unsuccessful execution of a cell;
              also accept a message that be be spoken after the tone;

*/
// Create an AudioContext object for generating feedback tones as required.
const audioContext = new window.AudioContext();
// Speak a message aloud using a browser SpeechSynthesisUtterance
// The SpeechSynthesisUtterance object should be available
// for garbage collection after the message is spoken.
const say = (message) => {
    if (message) {
        let utterance = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(utterance);
    }
};
// Generate a tone using the AudioContext object.
function play_tone(frequency = 440, duration_ms = 1000, //milliseconds
volume = 0.1, type = 'sine', //  "sine", "square", "sawtooth", "triangle",  "custom"
message = null) {
    // Create a new AudioContext
    // Create an OscillatorNode
    const oscillator = audioContext.createOscillator();
    // Create a gain node
    const gain = audioContext.createGain();
    // Set the colume
    gain.gain.value = volume;
    // Set the type of the oscillator
    oscillator.type = type;
    // Set the frequency of the oscillator
    oscillator.frequency.value = frequency;
    // Connect the gain function
    oscillator.connect(gain);
    // Connect the oscillator to the audio context's destination (the speakers)
    oscillator.connect(audioContext.destination);
    // Start the oscillator immediately
    oscillator.start();
    // Set the gain envelope
    gain.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + duration_ms);
    // Stop the oscillator after the specified duration
    setTimeout(() => {
        oscillator.stop();
        if (message)
            setTimeout(() => {
                say(message);
            }, 100);
    }, duration_ms);
}
function play_success(msg = null) {
    play_tone(1000, 100, 0.1, 'sine', msg);
}
function play_error(msg = null) {
    play_tone(50, 400, 0.1, 'sawtooth', msg);
}
/*
// Notes for a possible heartbeat, if we can identify when a cell starts running
// Extensions that support notifications or cell execution timing may be relevnt here.

const hearbeatContext = new window.AudioContext();

function createHeartbeat() {
  const o = hearbeatContext.createOscillator();
  g = hearbeatContext.createGain();
  o.connect(g);
  o.type = 'sine';
  g.connect(hearbeatContext.destination);
  o.start(0);
  g.gain.exponentialRampToValueAtTime(
    0.00001,
    hearbeatContext.currentTime + 0.05;
  );
}

// Really, we need to have separate hearbeats for different notebooks?
// Does the notifications extension suggest a way for that, perhaps?
export function audio_pulse(pulse_s: number = 5) {
  console.log('pulse...');
  let heartbeatInterval = setInterval(
    () => createHeartbeat(),
    pulse_s*1000
  );
  return heartbeatInterval;
}

// With the return value, when a cell has finished execution,
// we can then call: clearInterval(heartbeatInterval)
*/


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
/* harmony import */ var _cell_status_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell_status_actions */ "./lib/cell_status_actions.js");


/**
 * Initialisation data for the jupyterlab_cell_status_extension extension.
 */
const plugin = {
    id: 'jupyterlab_cell_status_extension:plugin',
    description: 'A JupyterLab extension to display notebook cell status.',
    autoStart: true,
    optional: [_jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_0__.ISettingRegistry],
    activate: (app, settingRegistry) => {
        console.log('JupyterLab extension jupyterlab_cell_status_extension is activated!');
        if (settingRegistry) {
            settingRegistry
                .load(plugin.id)
                .then(settings => {
                console.log('jupyterlab_cell_status_extension:plugin: loading settings...');
                const root = document.documentElement;
                const updateSettings = () => {
                    (0,_cell_status_actions__WEBPACK_IMPORTED_MODULE_1__.update_cell_status_settings)(settings, root);
                };
                updateSettings();
                console.log('jupyterlab_cell_status_extension:plugin: loaded settings...');
                // We can auto update the color
                settings.changed.connect(updateSettings);
                console.log('jupyterlab_cell_status_extension settings loaded:', settings.composite);
                (0,_cell_status_actions__WEBPACK_IMPORTED_MODULE_1__.create_cell_status_actions)(settings);
            })
                .catch(reason => {
                console.error('Failed to load settings for jupyterlab_cell_status_extension.', reason);
                (0,_cell_status_actions__WEBPACK_IMPORTED_MODULE_1__.create_cell_status_actions)(null);
            });
        }
        else {
            (0,_cell_status_actions__WEBPACK_IMPORTED_MODULE_1__.create_cell_status_actions)(null);
        }
        console.log('jupyterlab_cell_status_extension:plugin activated...');
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);


/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scc: () => (/* binding */ scc)
/* harmony export */ });
//Strip control codes
function scc(s = '') {
    return s.replace(/\x1b\[[0-9;]*m/g, '').trim();
}


/***/ })

}]);
//# sourceMappingURL=lib_index_js.f01c756a6629cc3591eb.js.map