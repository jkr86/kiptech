"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/components/LocationAndCards/index.jsx":
/*!*******************************************************!*\
  !*** ./src/app/components/LocationAndCards/index.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/.pnpm/next@13.4.8_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_LocationSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/LocationSearch */ \"(app-client)/./src/app/components/LocationSearch/index.jsx\");\n/* harmony import */ var _app_components_CardsSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/CardsSection */ \"(app-client)/./src/app/components/CardsSection/index.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/.pnpm/next@13.4.8_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_components_CardsSection_mock_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/CardsSection/mock-data.json */ \"(app-client)/./src/app/components/CardsSection/mock-data.json\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst LocationAndCards = ()=>{\n    _s();\n    const { centers } = _app_components_CardsSection_mock_data_json__WEBPACK_IMPORTED_MODULE_4__;\n    const [activeLocation, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        label: \"All\",\n        value: \"sa\"\n    });\n    const [activeService, setService] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        label: \"All\",\n        value: \"all\"\n    });\n    const [centersOnPage, setCentersOnPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        //filter by service\n        const filteredByService = centers.reduce((accumulator, current)=>{\n            const filteredSubArray = current.services.filter((element)=>activeService.value.includes(element.value));\n            if (filteredSubArray.length > 0) {\n                accumulator.push(current);\n            }\n            return accumulator;\n        }, []);\n        //filter by location\n        let filteredByLocation = centers.reduce((accumulator, current)=>{\n            const filtered = activeLocation.value.includes(current.location.value);\n            if (filtered) {\n                accumulator.push(current);\n            }\n            return accumulator;\n        }, []);\n        //   intersect both arrays to find common\n        const temp = new Set([\n            ...filteredByLocation,\n            ...filteredByService\n        ]);\n        console.log(\"filteredByService array\", temp);\n    // setCentersOnPage(centers);\n    }, [\n        _app_components_CardsSection_mock_data_json__WEBPACK_IMPORTED_MODULE_4__\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_LocationSearch__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                activeLocation: activeLocation,\n                setLocation: setLocation,\n                activeService: activeService,\n                setService: setService\n            }, void 0, false, {\n                fileName: \"/Users/imac/Desktop/kibtech/src/app/components/LocationAndCards/index.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_CardsSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                data: centersOnPage\n            }, void 0, false, {\n                fileName: \"/Users/imac/Desktop/kibtech/src/app/components/LocationAndCards/index.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/imac/Desktop/kibtech/src/app/components/LocationAndCards/index.jsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LocationAndCards, \"rD1FnwjVCsTwKOuA7njb0s+/FKk=\");\n_c = LocationAndCards;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LocationAndCards);\nvar _c;\n$RefreshReg$(_c, \"LocationAndCards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL0xvY2F0aW9uQW5kQ2FyZHMvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUU2RDtBQUNKO0FBQ2I7QUFDb0I7QUFFaEUsTUFBTUssbUJBQW1COztJQUN2QixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHRix3RUFBSUE7SUFDeEIsTUFBTSxDQUFDRyxnQkFBZ0JDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7UUFDN0NNLE9BQU87UUFDUEMsT0FBTztJQUNUO0lBQ0EsTUFBTSxDQUFDQyxlQUFlQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO1FBQUVNLE9BQU87UUFBT0MsT0FBTztJQUFNO0lBQzFFLE1BQU0sQ0FBQ0csZUFBZUMsaUJBQWlCLEdBQUdYLCtDQUFRQSxDQUFDLEVBQUU7SUFFckRELGdEQUFTQSxDQUFDO1FBQ1IsbUJBQW1CO1FBQ2pCLE1BQU1hLG9CQUFvQlQsUUFBUVUsTUFBTSxDQUFDLENBQUNDLGFBQWFDO1lBQ3JELE1BQU1DLG1CQUFtQkQsUUFBUUUsUUFBUSxDQUFDQyxNQUFNLENBQUMsQ0FBQ0MsVUFBWVgsY0FBY0QsS0FBSyxDQUFDYSxRQUFRLENBQUNELFFBQVFaLEtBQUs7WUFFeEcsSUFBSVMsaUJBQWlCSyxNQUFNLEdBQUcsR0FBRztnQkFDL0JQLFlBQVlRLElBQUksQ0FBQ1A7WUFDbkI7WUFFQSxPQUFPRDtRQUNULEdBQUcsRUFBRTtRQUNMLG9CQUFvQjtRQUNwQixJQUFJUyxxQkFBcUJwQixRQUFRVSxNQUFNLENBQUMsQ0FBQ0MsYUFBYUM7WUFDcEQsTUFBTVMsV0FBV3BCLGVBQWVHLEtBQUssQ0FBQ2EsUUFBUSxDQUFDTCxRQUFRVSxRQUFRLENBQUNsQixLQUFLO1lBRXJFLElBQUlpQixVQUFVO2dCQUNaVixZQUFZUSxJQUFJLENBQUNQO1lBQ25CO1lBRUEsT0FBT0Q7UUFDVCxHQUFHLEVBQUU7UUFFUCx5Q0FBeUM7UUFDdkMsTUFBTVksT0FBSyxJQUFJQyxJQUFJO2VBQUlKO2VBQXNCWDtTQUFrQjtRQUMvRGdCLFFBQVFDLEdBQUcsQ0FBQywyQkFBMEJIO0lBRXhDLDZCQUE2QjtJQUMvQixHQUFHO1FBQUN6Qix3RUFBSUE7S0FBQztJQUNULHFCQUNFLDhEQUFDNkI7OzBCQUNDLDhEQUFDakMsc0VBQWNBO2dCQUNiTyxnQkFBZ0JBO2dCQUNoQkMsYUFBYUE7Z0JBQ2JHLGVBQWVBO2dCQUNmQyxZQUFZQTs7Ozs7OzBCQUVkLDhEQUFDWCxvRUFBWUE7Z0JBQUNHLE1BQU1TOzs7Ozs7Ozs7Ozs7QUFHMUI7R0FoRE1SO0tBQUFBO0FBaUROLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0xvY2F0aW9uQW5kQ2FyZHMvaW5kZXguanN4PzFjODgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBMb2NhdGlvblNlYXJjaCBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9Mb2NhdGlvblNlYXJjaFwiO1xuaW1wb3J0IENhcmRzU2VjdGlvbiBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9DYXJkc1NlY3Rpb25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkYXRhIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL0NhcmRzU2VjdGlvbi9tb2NrLWRhdGEuanNvblwiO1xuXG5jb25zdCBMb2NhdGlvbkFuZENhcmRzID0gKCkgPT4ge1xuICBjb25zdCB7IGNlbnRlcnMgfSA9IGRhdGE7XG4gIGNvbnN0IFthY3RpdmVMb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUoe1xuICAgIGxhYmVsOiBcIkFsbFwiLFxuICAgIHZhbHVlOiBcInNhXCIsXG4gIH0pO1xuICBjb25zdCBbYWN0aXZlU2VydmljZSwgc2V0U2VydmljZV0gPSB1c2VTdGF0ZSh7IGxhYmVsOiBcIkFsbFwiLCB2YWx1ZTogXCJhbGxcIiB9KTtcbiAgY29uc3QgW2NlbnRlcnNPblBhZ2UsIHNldENlbnRlcnNPblBhZ2VdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy9maWx0ZXIgYnkgc2VydmljZVxuICAgICAgY29uc3QgZmlsdGVyZWRCeVNlcnZpY2UgPSBjZW50ZXJzLnJlZHVjZSgoYWNjdW11bGF0b3IsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRTdWJBcnJheSA9IGN1cnJlbnQuc2VydmljZXMuZmlsdGVyKChlbGVtZW50KSA9PiBhY3RpdmVTZXJ2aWNlLnZhbHVlLmluY2x1ZGVzKGVsZW1lbnQudmFsdWUpKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChmaWx0ZXJlZFN1YkFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBhY2N1bXVsYXRvci5wdXNoKGN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICB9LCBbXSk7XG4gICAgICAvL2ZpbHRlciBieSBsb2NhdGlvblxuICAgICAgbGV0IGZpbHRlcmVkQnlMb2NhdGlvbiA9IGNlbnRlcnMucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudCkgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IGFjdGl2ZUxvY2F0aW9uLnZhbHVlLmluY2x1ZGVzKGN1cnJlbnQubG9jYXRpb24udmFsdWUpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGZpbHRlcmVkKSB7XG4gICAgICAgICAgYWNjdW11bGF0b3IucHVzaChjdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgICAgfSwgW10pO1xuXG4gICAgLy8gICBpbnRlcnNlY3QgYm90aCBhcnJheXMgdG8gZmluZCBjb21tb25cbiAgICAgIGNvbnN0IHRlbXA9bmV3IFNldChbLi4uZmlsdGVyZWRCeUxvY2F0aW9uLC4uLmZpbHRlcmVkQnlTZXJ2aWNlXSk7XG4gICAgICBjb25zb2xlLmxvZygnZmlsdGVyZWRCeVNlcnZpY2UgYXJyYXknLHRlbXApO1xuXG4gICAgLy8gc2V0Q2VudGVyc09uUGFnZShjZW50ZXJzKTtcbiAgfSwgW2RhdGFdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPExvY2F0aW9uU2VhcmNoXG4gICAgICAgIGFjdGl2ZUxvY2F0aW9uPXthY3RpdmVMb2NhdGlvbn1cbiAgICAgICAgc2V0TG9jYXRpb249e3NldExvY2F0aW9ufVxuICAgICAgICBhY3RpdmVTZXJ2aWNlPXthY3RpdmVTZXJ2aWNlfVxuICAgICAgICBzZXRTZXJ2aWNlPXtzZXRTZXJ2aWNlfVxuICAgICAgLz5cbiAgICAgIDxDYXJkc1NlY3Rpb24gZGF0YT17Y2VudGVyc09uUGFnZX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbkFuZENhcmRzO1xuIl0sIm5hbWVzIjpbIkxvY2F0aW9uU2VhcmNoIiwiQ2FyZHNTZWN0aW9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkYXRhIiwiTG9jYXRpb25BbmRDYXJkcyIsImNlbnRlcnMiLCJhY3RpdmVMb2NhdGlvbiIsInNldExvY2F0aW9uIiwibGFiZWwiLCJ2YWx1ZSIsImFjdGl2ZVNlcnZpY2UiLCJzZXRTZXJ2aWNlIiwiY2VudGVyc09uUGFnZSIsInNldENlbnRlcnNPblBhZ2UiLCJmaWx0ZXJlZEJ5U2VydmljZSIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiY3VycmVudCIsImZpbHRlcmVkU3ViQXJyYXkiLCJzZXJ2aWNlcyIsImZpbHRlciIsImVsZW1lbnQiLCJpbmNsdWRlcyIsImxlbmd0aCIsInB1c2giLCJmaWx0ZXJlZEJ5TG9jYXRpb24iLCJmaWx0ZXJlZCIsImxvY2F0aW9uIiwidGVtcCIsIlNldCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/LocationAndCards/index.jsx\n"));

/***/ })

});