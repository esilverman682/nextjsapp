module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "c473":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./globals.ts
var globals = __webpack_require__("nB16");

// CONCATENATED MODULE: ./components/Footer.tsx
var __jsx = external_react_default.a.createElement;


const Footer = () => __jsx("div", {
  className: "footer"
}, __jsx("p", null, `© ${globals["a" /* globals */].yourName} ${new Date().getFullYear()}`), __jsx("a", {
  href: "/rss.xml"
}, __jsx("img", {
  src: "/img/rss-white.svg",
  alt: "RSS Feed",
  height: "30",
  width: "30"
})));
// CONCATENATED MODULE: ./components/Header.tsx
var Header_jsx = external_react_default.a.createElement;


const Header = () => Header_jsx("div", {
  className: "header"
}, Header_jsx("a", {
  href: "/"
}, globals["a" /* globals */].siteName), Header_jsx("div", {
  className: "flex-spacer"
}), Header_jsx("a", {
  href: "https://github.com/colinhacks/devii"
}, "GitHub"), Header_jsx("a", {
  href: "/blog/the-ultimate-tech-stack"
}, "Motivation"));
// EXTERNAL MODULE: ./styles/base.css
var base = __webpack_require__("c473");

// CONCATENATED MODULE: ./pages/_app.tsx
var _app_jsx = external_react_default.a.createElement;







const App = ({
  Component,
  pageProps
}) => {
  return _app_jsx("div", {
    className: "container"
  }, _app_jsx(head_default.a, null, globals["a" /* globals */].googleAnalyticsId && _app_jsx("script", {
    async: true,
    src: `https://www.googletagmanager.com/gtag/js?id=${globals["a" /* globals */].googleAnalyticsId}`
  }), globals["a" /* globals */].googleAnalyticsId && _app_jsx("script", {
    dangerouslySetInnerHTML: {
      __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('globals', '${globals["a" /* globals */].googleAnalyticsId}');
            `
    }
  })), _app_jsx(Header, null), _app_jsx(Component, pageProps), _app_jsx(Footer, null));
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (App);

/***/ }),

/***/ "nB16":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return globals; });
let globals;

(function (_globals) {
  const yourName = _globals.yourName = 'Alyssa P. Hacker';
  const siteName = _globals.siteName = 'My Awesome Blog';
  const siteDescription = _globals.siteDescription = 'I write about code \'n stuff';
  const siteCreationDate = _globals.siteCreationDate = 'March 3, 2020 04:00:00 GMT';
  const twitterHandle = _globals.twitterHandle = '@alyssaphacker';
  const email = _globals.email = 'alyssa@example.com';
  const url = _globals.url = 'https://alyssaphacker.com';
  const accentColor = _globals.accentColor = '#4fc2b4';
  const googleAnalyticsId = _globals.googleAnalyticsId = ``;
})(globals || (globals = {}));

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });