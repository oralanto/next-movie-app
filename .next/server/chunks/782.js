"use strict";
exports.id = 782;
exports.ids = [782];
exports.modules = {

/***/ 7782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_List)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Card.js

const placeholderImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDsfRCwQvpsd4O5b6IK9evG9H1PTxZLoI6ew5iVnlz3ftQjMBQ";
const Card = ({ Title , Poster , Year , imdbID  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "card",
        style: {
            marginBottom: "10px"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "card-body d-flex justify-content-between",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "d-flex align-items-start",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: `https://www.imdb.com/title/${imdbID}`,
                        target: "_blank",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "mr-2 rounded",
                                src: Poster === "N/A" ? placeholderImg : Poster,
                                alt: "placeholder",
                                width: "100",
                                height: "130"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "title",
                                style: {
                                    fontSize: "20px"
                                },
                                children: Title
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    style: {
                        fontSize: "20px",
                        color: "#9c88ff"
                    },
                    children: Year
                })
            ]
        })
    });
};
/* harmony default export */ const components_Card = (Card);

;// CONCATENATED MODULE: ./components/List.js



const List = (props)=>{
    if (!props.results.length) return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        children: "No Results :("
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            height: "calc(100vh - 180px)",
            overflow: "scroll"
        },
        children: props.results && props.results.map((result)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Card, {
                ...result
            }, result.imdbID))
    });
};
/* harmony default export */ const components_List = (List);


/***/ })

};
;