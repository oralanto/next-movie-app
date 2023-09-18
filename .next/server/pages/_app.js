"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./lib/Context.js


const Context = /*#__PURE__*/ external_react_default().createContext();
const links = [
    {
        name: "movie",
        icon: "film"
    },
    {
        name: "serie",
        icon: "tv"
    },
    {
        name: "game",
        icon: "gamepad"
    }, 
];
const ContextProvider = (props)=>{
    const { 0: state , 1: setState  } = (0,external_react_.useState)({
        query: "",
        links: links,
        active: links[0]
    });
    const setActive = (link)=>{
        setState({
            ...state,
            active: link
        });
    };
    const setQuery = (input)=>{
        setState({
            ...state,
            query: input
        });
    };
    // useMemo returns all states if query or active is changed.
    const value = external_react_default().useMemo(()=>{
        return {
            state,
            setActive,
            setQuery
        };
    }, [
        state.query,
        state.active
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(Context.Provider, {
        value: value,
        children: props.children
    });
};
/* harmony default export */ const lib_Context = (ContextProvider);

;// CONCATENATED MODULE: ./components/Header.js




const Links = ({ children , query , name  })=>{
    return query !== "" ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: {
            pathname: `/${name}`,
            query: {
                query: query
            }
        },
        children: children
    }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: {
            pathname: `/${name}`
        },
        children: children
    });
};
const Header = ()=>{
    const { setActive , state: { links , active , query  } ,  } = (0,external_react_.useContext)(Context);
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "nav nav-pills nav-fill",
        style: {
            marginBottom: "20px"
        },
        children: links.map((link)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "nav-item",
                onClick: ()=>setActive(link),
                children: /*#__PURE__*/ jsx_runtime_.jsx(Links, {
                    query: query,
                    ...link,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: `nav-link ${link.name === active.name && "isActive"}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: `fas fa-${link.icon}`
                            }),
                            " \xa0 ",
                            link.name,
                            " "
                        ]
                    })
                })
            }, link.name);
        })
    });
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
;// CONCATENATED MODULE: ./components/Searchbar.js




const Searchbar = ()=>{
    const { setQuery , state: { query  } ,  } = (0,external_react_.useContext)(Context);
    const setResults = (e)=>{
        e.preventDefault();
        router_default().push({
            pathname: "/movie",
            query: {
                query: query
            }
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("form", {
        style: {
            marginBottom: "20px"
        },
        onSubmit: (e)=>setResults(e),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "form-group",
            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                className: "form-control form-control-lg",
                id: "searchbar",
                defaultValue: query,
                onChange: (e)=>{
                    setQuery(e.target.value);
                },
                placeholder: "Search Title ..."
            })
        })
    });
};
/* harmony default export */ const components_Searchbar = (Searchbar);

;// CONCATENATED MODULE: ./components/Layout.js




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Movie Database"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
                        integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
                        crossorigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css",
                        rel: "stylesheet",
                        crossorigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.icons101.com%2Ficon_ico%2Fid_78884%2Fmovie.ico&imgrefurl=http%3A%2F%2Fwww.icons101.com%2Ficon%2Fid_78884%2Fsetid_2765%2FIcons_Material_Design_by_Rammist%2Fmovie&tbnid=mCv1dJgE3vsqoM&vet=12ahUKEwjehoyvkuHoAhUS-BoKHRU5B6kQMygJegUIARDvAQ..i&docid=00LXuhA2f4FqTM&w=256&h=256&q=movie%20icon&hl=fr&ved=2ahUKEwjehoyvkuHoAhUS-BoKHRU5B6kQMygJegUIARDvAQ"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-10 offset-1",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_Searchbar, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
                                    children
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js





function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Movie Database App"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib_Context, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664], () => (__webpack_exec__(7646)));
module.exports = __webpack_exports__;

})();