"use strict";
(self["webpackChunk_r_wasm_jupyterlite_webr_kernel"] = self["webpackChunk_r_wasm_jupyterlite_webr_kernel"] || []).push([["lib_index_js"],{

/***/ "./node_modules/file-loader/dist/cjs.js?context=.!./style/logos/r-logo-32x32.png":
/*!***************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?context=.!./style/logos/r-logo-32x32.png ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c0aaa09171ee16729b12a148c532baa8.png");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?context=.!./style/logos/r-logo-64x64.png":
/*!***************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?context=.!./style/logos/r-logo-64x64.png ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "da1166e72a7daee41c4b332dd06e206d.png");

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
/* harmony import */ var _jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlite/kernel */ "webpack/sharing/consume/default/@jupyterlite/kernel");
/* harmony import */ var _jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _webr_kernel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webr_kernel */ "./lib/webr_kernel.js");
/* harmony import */ var _file_loader_context_style_logos_r_logo_32x32_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!file-loader?context=.!../style/logos/r-logo-32x32.png */ "./node_modules/file-loader/dist/cjs.js?context=.!./style/logos/r-logo-32x32.png");
/* harmony import */ var _file_loader_context_style_logos_r_logo_64x64_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !!file-loader?context=.!../style/logos/r-logo-64x64.png */ "./node_modules/file-loader/dist/cjs.js?context=.!./style/logos/r-logo-64x64.png");




const server_kernel = {
    id: '@jupyterlite/webr-kernel-extension:kernel',
    autoStart: true,
    requires: [_jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_0__.IKernelSpecs],
    activate: (app, kernelspecs) => {
        kernelspecs.register({
            spec: {
                name: 'webR',
                display_name: 'R (webR)',
                language: 'R',
                argv: [],
                spec: {
                    argv: [],
                    env: {},
                    display_name: 'R (webR)',
                    language: 'R',
                    interrupt_mode: 'message',
                    metadata: {},
                },
                resources: {
                    'logo-32x32': _file_loader_context_style_logos_r_logo_32x32_png__WEBPACK_IMPORTED_MODULE_1__["default"],
                    'logo-64x64': _file_loader_context_style_logos_r_logo_64x64_png__WEBPACK_IMPORTED_MODULE_2__["default"],
                },
            },
            create: async (options) => {
                return new _webr_kernel__WEBPACK_IMPORTED_MODULE_3__.WebRKernel({ ...options });
            },
        });
    },
};
const plugins = [server_kernel];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugins);


/***/ }),

/***/ "./lib/webr_kernel.js":
/*!****************************!*\
  !*** ./lib/webr_kernel.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebRKernel: () => (/* binding */ WebRKernel)
/* harmony export */ });
/* harmony import */ var _jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlite/kernel */ "webpack/sharing/consume/default/@jupyterlite/kernel");
/* harmony import */ var _jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webr */ "webpack/sharing/consume/default/webr/webr");
/* harmony import */ var webr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webr__WEBPACK_IMPORTED_MODULE_1__);
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _WebRKernel_webRConsole, _WebRKernel_bitmapCanvas, _WebRKernel_lastPlot;


const webRVersion = "0.3.0";
const baseRVersion = "4.3.3";
const protocolVersion = "5.3";
function getFormattedUrl(url = window.location.href) {
    try {
        const urlObj = new URL(url);
        // Get protocol (includes the trailing ':')
        const protocol = urlObj.protocol;
        // Get domain (hostname includes subdomains)
        const domain = urlObj.hostname;
        // Get path and remove any file names (like index.html)
        let path = urlObj.pathname;
        path = path.replace(/\/[^\/]+\.[^\/]+$/, '/');
        // Ensure path ends with trailing slash
        if (!path.endsWith('/')) {
            path += '/';
        }
        return `${protocol}//${domain}${path}`;
    }
    catch (e) {
        // Return empty string or throw error based on your needs
        return '';
    }
}
class WebRKernel extends _jupyterlite_kernel__WEBPACK_IMPORTED_MODULE_0__.BaseKernel {
    constructor(options) {
        super(options);
        _WebRKernel_webRConsole.set(this, void 0);
        _WebRKernel_bitmapCanvas.set(this, void 0);
        _WebRKernel_lastPlot.set(this, null);
        __classPrivateFieldSet(this, _WebRKernel_webRConsole, new webr__WEBPACK_IMPORTED_MODULE_1__.Console({
            stdout: (line) => console.log(line),
            stderr: (line) => console.error(line),
            prompt: (prompt) => this.inputRequest({ prompt, password: false }),
        }, {
            //baseUrl: "https://ouseful-demos.github.io/jupyterlite-m348-demo/webr-dist/",
            //repoUrl: "https://ouseful-demos.github.io/jupyterlite-m348-demo/repo/",
            // If we are polling from ./lab we need to go up to distro root
            baseUrl: "../webr-dist/",
            repoUrl: "../repo/",
            REnv: {
                R_HOME: '/usr/lib/R',
                FONTCONFIG_PATH: '/etc/fonts',
                R_ENABLE_JIT: '0',
            }
        }), "f");
        this.webR = __classPrivateFieldGet(this, _WebRKernel_webRConsole, "f").webR;
        this.init = this.setupEnvironment();
        __classPrivateFieldSet(this, _WebRKernel_bitmapCanvas, document.createElement('canvas'), "f");
    }
    async setupEnvironment() {
        await this.webR.init();
        this.shelter = await new this.webR.Shelter();
        // Enable dev.control to allow active plots to be copied
        // On Windows, the pdf(...) device setting raises an error
        // but png(...) seems to work okay.
        await this.webR.evalRVoid(`
      options(device = function(...){
        png(...)
        dev.control("enable")
      }, webr.plot.new = FALSE)
    `);
        // Try to set the path
        const currentUrl = getFormattedUrl();
        await this.webR.evalRVoid(`JUPYTERLITE_PATH <- "${currentUrl}"`);
        // Create a signal when there is a new plot to be shown in JupyterLite
        await this.webR.evalRVoid(`
      setHook("grid.newpage", function() {
        options(webr.plot.new = TRUE)
      }, "replace")
      setHook("plot.new", function() {
        options(webr.plot.new = TRUE)
      }, "replace")
    `);
        // Default figure size
        await this.webR.evalRVoid(`
      options(webr.fig.width = 7, webr.fig.height = 5.25)
    `);
        // Install package management shims
        await this.webR.evalRVoid(`
      webr::shim_install()
    `);
    }
    inputReply(content) {
        if (content.status === 'ok') {
            __classPrivateFieldGet(this, _WebRKernel_webRConsole, "f").stdin(content.value);
        }
    }
    async kernelInfoRequest() {
        await this.init;
        const content = {
            status: 'ok',
            protocol_version: protocolVersion,
            implementation: 'webr',
            implementation_version: webRVersion,
            language_info: {
                name: 'R',
                version: baseRVersion,
                mimetype: 'text/x-rsrc',
                file_extension: '.R',
            },
            banner: `webR v${webRVersion} - R v${baseRVersion}`,
            help_links: [
                {
                    text: 'WebAssembly R Kernel - ouseful local testing',
                    url: 'https://github.com/ouseful-testing/jupyterlite-webr-kernel',
                }
            ],
        };
        return content;
    }
    async executeRequest(content) {
        await this.init;
        try {
            const exec = await this.shelter.captureR(`
        withVisible({
          eval(parse(text = code), envir = globalenv())
        })
      `, {
                env: { code: content.code },
                captureGraphics: false, // We handle graphics capture, to support incremental plotting
            });
            const output = exec.output;
            // Deal with showing stream and condition outputs
            output.forEach(async (out) => {
                switch (out.type) {
                    case 'stdout':
                        this.stream({ name: 'stdout', text: out.data + '\n' });
                        break;
                    case 'stderr':
                        this.stream({ name: 'stderr', text: out.data + '\n' });
                        break;
                    case 'message': {
                        const cnd = out.data;
                        const message = (await cnd.get('message'));
                        this.stream({
                            name: 'stderr',
                            text: (await message.toString()) + '\n',
                        });
                        break;
                    }
                    case 'warning': {
                        const cnd = out.data;
                        const message = (await cnd.get('message'));
                        this.stream({
                            name: 'stderr',
                            text: 'Warning message:\n' + (await message.toString()) + '\n',
                        });
                        break;
                    }
                }
            });
            // Send the result if it's visible
            const visible = await exec.result.get('visible');
            if (await visible.toBoolean()) {
                const value = await exec.result.get('value');
                const exec_result = await this.shelter.evalR(`
          capture.output(print(value))
        `, { env: { value } });
                this.publishExecuteResult({
                    execution_count: this.executionCount,
                    data: {
                        'text/plain': [await (await exec_result.toArray()).join('\n')],
                    },
                    metadata: {}
                });
            }
            // Send an R plot if there are changes to the graphics device
            await this.plotOutput();
            // Send success signal
            return {
                status: 'ok',
                execution_count: this.executionCount,
                user_expressions: {},
            };
        }
        catch (e) {
            const evalue = e.message;
            this.stream({ name: 'stderr', text: 'Error: ' + evalue + '\n' });
            return {
                status: 'error',
                execution_count: this.executionCount,
                ename: 'error',
                evalue,
                traceback: [],
            };
        }
        finally {
            await this.shelter.purge();
        }
    }
    async plotOutput() {
        var _a;
        const dev = await this.webR.evalRNumber('dev.cur()');
        const newPlot = await this.webR.evalRBoolean('getOption("webr.plot.new")');
        if (dev > 1) {
            const capturePlot = await this.shelter.captureR(`
        try({
          w <- getOption("webr.fig.width")
          h <- getOption("webr.fig.height")
          webr::canvas(width = 72 * w, height = 72 * h, capture = TRUE)
          capture_dev = dev.cur();

          dev.set(${dev})
          dev.copy(which = capture_dev)
          dev.off(capture_dev)
        }, silent = TRUE)
      `);
            const image = capturePlot.images[0];
            __classPrivateFieldGet(this, _WebRKernel_bitmapCanvas, "f").width = image.width;
            __classPrivateFieldGet(this, _WebRKernel_bitmapCanvas, "f").height = image.height;
            (_a = __classPrivateFieldGet(this, _WebRKernel_bitmapCanvas, "f").getContext('bitmaprenderer')) === null || _a === void 0 ? void 0 : _a.transferFromImageBitmap(image);
            const plotData = __classPrivateFieldGet(this, _WebRKernel_bitmapCanvas, "f").toDataURL('image/png');
            if (newPlot || plotData !== __classPrivateFieldGet(this, _WebRKernel_lastPlot, "f")) {
                __classPrivateFieldSet(this, _WebRKernel_lastPlot, plotData, "f");
                this.displayData({
                    data: {
                        'image/png': plotData.split(",")[1],
                        'text/plain': [
                            `<Figure of size ${__classPrivateFieldGet(this, _WebRKernel_bitmapCanvas, "f").width}x${__classPrivateFieldGet(this, _WebRKernel_bitmapCanvas, "f").height}>`
                        ]
                    },
                    metadata: {
                        'image/png': {
                            width: 3 * __classPrivateFieldGet(this, _WebRKernel_bitmapCanvas, "f").width / 4,
                            height: 3 * __classPrivateFieldGet(this, _WebRKernel_bitmapCanvas, "f").height / 4,
                        }
                    },
                });
                await this.webR.evalRVoid('options(webr.plot.new = FALSE)');
            }
        }
    }
    async completeRequest() {
        throw new Error('Unimplemented');
    }
    async inspectRequest() {
        throw new Error('Unimplemented');
    }
    async isCompleteRequest() {
        throw new Error('Unimplemented');
    }
    async commInfoRequest() {
        throw new Error('Unimplemented');
    }
    async commOpen() {
        throw new Error('Unimplemented');
    }
    async commMsg() {
        throw new Error('Unimplemented');
    }
    async commClose() {
        throw new Error('Unimplemented');
    }
}
_WebRKernel_webRConsole = new WeakMap(), _WebRKernel_bitmapCanvas = new WeakMap(), _WebRKernel_lastPlot = new WeakMap();


/***/ })

}]);
//# sourceMappingURL=lib_index_js.9ee772b1c36c75a7dfea.js.map