module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		5: 0
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
/******/ 			var chunk = require("../../" + ({}[chunkId]||chunkId) + "." + {"8":"6ce80d2063d4c205ef5f","9":"d07d5a3cdbaed6d6ede0","10":"b143b593d988fafb93d7","11":"dd55b5ef1bc10108fe49","12":"978f289b5f54f4b5f0bf"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6Vsw");


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

/***/ "6Vsw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "glob"
var external_glob_ = __webpack_require__("2XLG");
var external_glob_default = /*#__PURE__*/__webpack_require__.n(external_glob_);

// EXTERNAL MODULE: external "fecha"
var external_fecha_ = __webpack_require__("Wsj/");

// CONCATENATED MODULE: ./components/Author.tsx
var __jsx = external_react_default.a.createElement;


const FollowButton = () => {
  return __jsx("a", {
    href: "/newsletter"
  }, __jsx("div", {
    className: "follow-button"
  }, "Follow"));
};
const Author = props => {
  return __jsx("div", {
    className: "author-container"
  }, __jsx("div", {
    className: "author"
  }, props.post.authorPhoto && __jsx("img", {
    src: props.post.authorPhoto,
    className: "author-image"
  }), __jsx(AuthorLines, {
    post: props.post
  })));
};
const AuthorLines = props => {
  return __jsx("div", null, __jsx("p", {
    className: "author-line"
  }, props.post.author && __jsx("span", null, props.post.author), props.post.authorTwitter && __jsx("span", null, ' ', __jsx("a", {
    href: `https://twitter.com/${props.post.authorTwitter}`
  }, `@${props.post.authorTwitter}`), ' ')), __jsx("p", {
    className: "author-line subtle"
  }, props.post.datePublished ? Object(external_fecha_["format"])(new Date(props.post.datePublished), 'MMMM Do, YYYY') : ''));
};
// EXTERNAL MODULE: ./components/Markdown.tsx + 1 modules
var Markdown = __webpack_require__("4/34");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./globals.ts
var globals = __webpack_require__("nB16");

// CONCATENATED MODULE: ./components/Meta.tsx
var Meta_jsx = external_react_default.a.createElement;



const Meta = props => {
  const {
    meta
  } = props;
  return Meta_jsx(head_default.a, null, Meta_jsx("title", null, meta.title), Meta_jsx("meta", {
    name: "copyright",
    content: "Colin McDonnell"
  }), meta.link && Meta_jsx("link", {
    rel: "canonical",
    href: meta.link
  }), meta.desc && Meta_jsx("meta", {
    name: "description",
    content: meta.desc
  }), Meta_jsx("meta", {
    property: "og:type",
    content: "website"
  }), Meta_jsx("meta", {
    name: "og:title",
    property: "og:title",
    content: meta.title
  }), meta.desc && Meta_jsx("meta", {
    name: "og:description",
    property: "og:description",
    content: meta.desc
  }), Meta_jsx("meta", {
    property: "og:site_name",
    content: globals["a" /* globals */].siteName
  }), meta.link && Meta_jsx("meta", {
    property: "og:url",
    content: `${meta.link}`
  }), Meta_jsx("meta", {
    name: "twitter:card",
    content: "summary"
  }), Meta_jsx("meta", {
    name: "twitter:title",
    content: meta.title
  }), meta.desc && Meta_jsx("meta", {
    name: "twitter:description",
    content: meta.desc
  }), Meta_jsx("meta", {
    name: "twitter:site",
    content: globals["a" /* globals */].twitterHandle
  }), Meta_jsx("meta", {
    name: "twitter:creator",
    content: globals["a" /* globals */].twitterHandle
  }), meta.image && Meta_jsx("meta", {
    name: "twitter:image",
    content: meta.image
  }), meta.image && Meta_jsx("meta", {
    property: "og:image",
    content: `${meta.image}`
  }));
};
// CONCATENATED MODULE: ./components/PostMeta.tsx
var PostMeta_jsx = external_react_default.a.createElement;


const PostMeta = ({
  post
}) => {
  return PostMeta_jsx(Meta, {
    meta: {
      title: post.title,
      desc: post.description,
      link: post.canonicalUrl,
      image: post.bannerPhoto
    }
  });
};
// CONCATENATED MODULE: ./components/BlogPost.tsx
var BlogPost_jsx = external_react_default.a.createElement;




const BlogPost = ({
  post
}) => {
  const {
    title,
    subtitle
  } = post;
  return BlogPost_jsx("div", {
    className: "blog-post"
  }, BlogPost_jsx(PostMeta, {
    post: post
  }), post.bannerPhoto && BlogPost_jsx("img", {
    className: "blog-post-image",
    src: post.bannerPhoto
  }), BlogPost_jsx("div", {
    className: "blog-post-title"
  }, title && BlogPost_jsx("h1", null, title), subtitle && BlogPost_jsx("h2", null, subtitle), BlogPost_jsx("br", null), BlogPost_jsx(Author, {
    post: post
  })), BlogPost_jsx("div", {
    className: "blog-post-content"
  }, BlogPost_jsx(Markdown["a" /* Markdown */], {
    source: post.content
  })));
};
// EXTERNAL MODULE: ./loader.ts
var loader = __webpack_require__("NGu5");

// CONCATENATED MODULE: ./pages/blog/[blog].tsx
var _blog_jsx = external_react_default.a.createElement;





function Post(props) {
  const {
    post
  } = props;
  return _blog_jsx(BlogPost, {
    post: post
  });
}

const getStaticPaths = () => {
  const blogs = external_glob_default.a.sync('./md/blog/*.md');
  const slugs = blogs.map(file => {
    const popped = file.split('/').pop();
    if (!popped) throw new Error(`Invalid blog path: ${file}`);
    return popped.slice(0, -3).trim();
  });
  const paths = slugs.map(slug => `/blog/${slug}`);
  return {
    paths,
    fallback: false
  };
};
const getStaticProps = async ({
  params
}) => {
  const post = await Object(loader["c" /* loadPost */])(`blog/${params.blog}.md`);
  return {
    props: {
      post
    }
  };
};
/* harmony default export */ var _blog_ = __webpack_exports__["default"] = (Post);

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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