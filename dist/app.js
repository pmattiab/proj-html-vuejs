/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var app = new Vue({
  el: "#root",
  data: {
    headerLinks: ["home", "about us", "facilities", "membership", "testimonials", "blog"],
    activeHeaderLink: 0
  }
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Undefined variable.\n   ╷\n18 │     width: $container_size;\n   │            ^^^^^^^^^^^^^^^\n   ╵\n  src/partials/_common.scss 18:12  @import\n  src/app.scss 3:9                 root stylesheet\n    at processResult (/Users/mattia/Movies/Boolean/Repository/proj-html-vuejs/node_modules/webpack/lib/NormalModule.js:676:19)\n    at /Users/mattia/Movies/Boolean/Repository/proj-html-vuejs/node_modules/webpack/lib/NormalModule.js:778:5\n    at /Users/mattia/Movies/Boolean/Repository/proj-html-vuejs/node_modules/loader-runner/lib/LoaderRunner.js:399:11\n    at /Users/mattia/Movies/Boolean/Repository/proj-html-vuejs/node_modules/loader-runner/lib/LoaderRunner.js:251:18\n    at context.callback (/Users/mattia/Movies/Boolean/Repository/proj-html-vuejs/node_modules/loader-runner/lib/LoaderRunner.js:124:13)\n    at /Users/mattia/Movies/Boolean/Repository/proj-html-vuejs/node_modules/sass-loader/dist/index.js:54:7\n    at Function.call$2 (/Users/mattia/Movies/Boolean/Repository/proj-html-vuejs/node_modules/sass/sass.dart.js:92612:16)\n    at _render_closure1.call$2 (/Users/mattia/Movies/Boolean/Repository/proj-html-vuejs/node_modules/sass/sass.dart.js:81115:12)\n    at _RootZone.runBinary$3$3 (/Users/mattia/Movies/Boolean/Repository/proj-html-vuejs/node_modules/sass/sass.dart.js:27260:18)\n    at _FutureListener.handleError$1 (/Users/mattia/Movies/Boolean/Repository/proj-html-vuejs/node_modules/sass/sass.dart.js:25816:19)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.scss"]();
/******/ 	
/******/ })()
;