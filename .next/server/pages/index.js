module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		6: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"7":"1771d03681207b360051","8":"6ce80d2063d4c205ef5f","9":"d07d5a3cdbaed6d6ede0","10":"b143b593d988fafb93d7","11":"dd55b5ef1bc10108fe49","12":"978f289b5f54f4b5f0bf"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "rss"
var external_rss_ = __webpack_require__("bHcg");
var external_rss_default = /*#__PURE__*/__webpack_require__.n(external_rss_);

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__("mw/K");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);

// EXTERNAL MODULE: external "showdown"
var external_showdown_ = __webpack_require__("4ugE");
var external_showdown_default = /*#__PURE__*/__webpack_require__.n(external_showdown_);

// EXTERNAL MODULE: ./globals.ts
var globals = __webpack_require__("nB16");

// CONCATENATED MODULE: ./rssUtil.ts




const generateRSS = async posts => {
  posts.map(post => {
    if (!post.canonicalUrl) throw new Error("Missing canonicalUrl. A canonical URL is required for RSS feed generation. If you don't care about RSS, uncomment `generateRSS(posts)` at the bottom of index.tsx.");
    return post;
  });
  const feed = new external_rss_default.a({
    title: globals["a" /* globals */].siteName,
    description: globals["a" /* globals */].siteDescription,
    feed_url: `${globals["a" /* globals */].url}/rss.xml`,
    site_url: globals["a" /* globals */].url,
    image_url: `${globals["a" /* globals */].url}/icon.png`,
    managingEditor: globals["a" /* globals */].email,
    webMaster: globals["a" /* globals */].email,
    copyright: `${new Date().getFullYear()} ${globals["a" /* globals */].yourName}`,
    language: 'en',
    pubDate: globals["a" /* globals */].siteCreationDate,
    ttl: 60
  });
  let isValid = true;

  for (const post of posts) {
    const converter = new external_showdown_default.a.Converter();
    const html = converter.makeHtml(post.content);

    if (!post.datePublished) {
      isValid = false;
      console.warn('All posts must have a publishedDate timestamp when generating RSS feed.');
      console.warn('Not generating rss.xml.');
    }

    feed.item({
      title: post.title,
      description: html,
      url: `${globals["a" /* globals */].url}/${post.path}`,
      categories: post.tags || [],
      author: post.author || 'Colin McDonnell',
      date: new Date(post.datePublished || 0).toISOString()
    });
  }

  if (!isValid) return; // writes RSS.xml to public directory

  const path = `${process.cwd()}/public/rss.xml`;
  external_fs_default.a.writeFileSync(path, feed.xml(), 'utf8');
  console.log(`generated RSS feed`);
};
// EXTERNAL MODULE: ./components/Markdown.tsx + 1 modules
var Markdown = __webpack_require__("4/34");

// EXTERNAL MODULE: ./loader.ts
var loader = __webpack_require__("NGu5");

// EXTERNAL MODULE: external "fecha"
var external_fecha_ = __webpack_require__("Wsj/");

// CONCATENATED MODULE: ./components/Tag.tsx
var __jsx = external_react_default.a.createElement;

const Tag = props => {
  return __jsx("div", {
    className: "tag"
  }, props.tag);
};
// CONCATENATED MODULE: ./components/PostCard.tsx
var PostCard_jsx = external_react_default.a.createElement;



const PostCard = props => {
  const post = props.post;
  return PostCard_jsx("a", {
    className: "post-card",
    href: `/${post.path}`
  }, PostCard_jsx("div", {
    className: "post-card-inner"
  }, post.thumbnailPhoto && PostCard_jsx("div", {
    className: "post-card-thumbnail",
    style: {
      backgroundImage: `url(${post.thumbnailPhoto})`
    }
  }), PostCard_jsx("div", {
    className: "post-card-title"
  }, post.title && PostCard_jsx("h2", null, post.title),  false && false, PostCard_jsx("p", null, props.post.datePublished ? Object(external_fecha_["format"])(new Date(props.post.datePublished), 'MMMM Do, YYYY') : ''), PostCard_jsx("div", {
    className: "flex-spacer"
  }, " "),  false && false)));
};
// CONCATENATED MODULE: ./pages/index.tsx

var pages_jsx = external_react_default.a.createElement;






const Home = props => {
  return pages_jsx("div", {
    className: "content"
  }, pages_jsx(head_default.a, null, pages_jsx("title", null, "Introducing Devii"), pages_jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), pages_jsx("div", {
    className: "introduction"
  }, pages_jsx("h1", null, "Introduction to Devii"), pages_jsx(Markdown["a" /* Markdown */], {
    source: props.introduction
  })), pages_jsx("div", {
    className: "section"
  }, pages_jsx("h2", null, "Features"), pages_jsx("div", {
    className: "medium-wide"
  }, pages_jsx(Markdown["a" /* Markdown */], {
    source: props.features
  }))), pages_jsx("div", {
    className: "section"
  }, pages_jsx("h2", null, "My blog posts"), pages_jsx("p", null, "This section demonstrates the power of dynamic imports. Every Markdown file under ", pages_jsx("code", null, "/md/blog"), " is automatically parsed into a structured TypeScript object and available in the", ' ', pages_jsx("code", null, "props.posts"), " array. These blog post \"cards\" are implemented in the", pages_jsx("code", null, "/components/PostCard.tsx"), " component."), pages_jsx("div", {
    className: "post-card-container"
  }, props.posts.map((post, j) => {
    return pages_jsx(PostCard, {
      post: post,
      key: j
    });
  }))), pages_jsx("div", {
    className: "section"
  }, pages_jsx("h2", null, "Testimonials"), pages_jsx("blockquote", null, pages_jsx("p", null, pages_jsx("em", null, "Seems like it might be useful!")), pages_jsx("p", null, "\u2014 Dan Abramov, taken", ' ', pages_jsx("a", {
    href: "https://github.com/colinhacks/devii/issues/2",
    target: "_blank"
  }, ' ', "utterly out of context")))), pages_jsx("div", {
    className: "section alternate"
  }, pages_jsx("h2", {
    className: "centered"
  }, "Get started"), pages_jsx("a", {
    href: "https://github.com/colinhacks/devii"
  }, pages_jsx("button", {
    className: "fork-button"
  }, "Go to README"))));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);
const getStaticProps = async () => {
  const introduction = await Object(loader["b" /* loadMarkdownFile */])('introduction.md');
  const features = await Object(loader["b" /* loadMarkdownFile */])('features.md');
  const readmeFile = await __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, "gql7"));
  const readme = readmeFile.default;
  const posts = await Object(loader["a" /* loadBlogPosts */])(); // comment out to turn off RSS generation during build step.

  await generateRSS(posts);
  const props = {
    introduction: introduction.contents,
    features: features.contents,
    readme: readme,
    posts
  };
  return {
    props
  };
};

/***/ }),

/***/ "2XLG":
/***/ (function(module, exports) {

module.exports = require("glob");

/***/ }),

/***/ "4/34":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Markdown; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/styles/prism"
var prism_ = __webpack_require__("88KH");

// EXTERNAL MODULE: external "react-syntax-highlighter"
var external_react_syntax_highlighter_ = __webpack_require__("RyM3");

// CONCATENATED MODULE: ./components/Code.tsx
var __jsx = external_react_default.a.createElement;



class Code_Code extends external_react_default.a.PureComponent {
  render() {
    const {
      language,
      value
    } = this.props;
    return __jsx(external_react_syntax_highlighter_["Prism"], {
      language: (language === 'ts' ? 'typescript' : language) || 'typescript',
      style: prism_["darcula"]
    }, value);
  }

}
// EXTERNAL MODULE: external "react-markdown/with-html"
var with_html_ = __webpack_require__("Q25H");
var with_html_default = /*#__PURE__*/__webpack_require__.n(with_html_);

// CONCATENATED MODULE: ./components/Markdown.tsx
var Markdown_jsx = external_react_default.a.createElement;



const Markdown = props => {
  return Markdown_jsx("div", {
    style: {
      width: '100%'
    },
    className: "devii-markdown"
  }, Markdown_jsx(with_html_default.a, {
    key: "content",
    source: props.source,
    renderers: {
      code: Code_Code
    },
    escapeHtml: false
  }));
};

/***/ }),

/***/ "4ugE":
/***/ (function(module, exports) {

module.exports = require("showdown");

/***/ }),

/***/ "88KH":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism");

/***/ }),

/***/ "NGu5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loadMarkdownFile; });
/* unused harmony export mdToPost */
/* unused harmony export loadMarkdownFiles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loadPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loadBlogPosts; });
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("uo/4");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var glob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2XLG");
/* harmony import */ var glob__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(glob__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nB16");



const loadMarkdownFile = async path => {
  const mdFile = await __webpack_require__("waFX")(`./${path}`);
  return {
    path,
    contents: mdFile.default
  };
};
const mdToPost = file => {
  const metadata = gray_matter__WEBPACK_IMPORTED_MODULE_0___default()(file.contents);
  const path = file.path.replace('.md', '');
  const post = {
    path,
    title: metadata.data.title,
    subtitle: metadata.data.subtitle || null,
    published: metadata.data.published || false,
    datePublished: metadata.data.datePublished || null,
    tags: metadata.data.tags || null,
    description: metadata.data.description || null,
    canonicalUrl: metadata.data.canonicalUrl || `${_globals__WEBPACK_IMPORTED_MODULE_2__[/* globals */ "a"].url}/${path}`,
    author: metadata.data.author || null,
    authorPhoto: metadata.data.authorPhoto || null,
    authorTwitter: metadata.data.authorTwitter || null,
    bannerPhoto: metadata.data.bannerPhoto || null,
    thumbnailPhoto: metadata.data.thumbnailPhoto || null,
    content: metadata.content
  };
  if (!post.title) throw new Error(`Missing required field: title.`);
  if (!post.content) throw new Error(`Missing required field: content.`);
  if (!post.datePublished) throw new Error(`Missing required field: datePublished.`);
  return post;
};
const loadMarkdownFiles = async path => {
  const blogPaths = glob__WEBPACK_IMPORTED_MODULE_1___default.a.sync(`./md/${path}`);
  const postDataList = await Promise.all(blogPaths.map(blogPath => {
    const modPath = blogPath.slice(blogPath.indexOf(`md/`) + 3);
    return loadMarkdownFile(`${modPath}`);
  }));
  return postDataList;
};
const loadPost = async path => {
  const file = await loadMarkdownFile(path);
  return mdToPost(file);
};
const loadBlogPosts = async () => {
  return await (await loadMarkdownFiles(`blog/*.md`)).map(mdToPost).filter(p => p.published).sort((a, b) => (b.datePublished || 0) - (a.datePublished || 0));
};

/***/ }),

/***/ "Q25H":
/***/ (function(module, exports) {

module.exports = require("react-markdown/with-html");

/***/ }),

/***/ "RyM3":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "Wsj/":
/***/ (function(module, exports) {

module.exports = require("fecha");

/***/ }),

/***/ "bHcg":
/***/ (function(module, exports) {

module.exports = require("rss");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

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

/***/ "uo/4":
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "waFX":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./blog/dan-abramov.md": [
		"LvrK",
		8
	],
	"./blog/devii.md": [
		"zghA",
		9
	],
	"./blog/the-ultimate-tech-stack.md": [
		"N8vF",
		10
	],
	"./features.md": [
		"bnIu",
		11
	],
	"./introduction.md": [
		"uqF7",
		12
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "waFX";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });