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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/.pnpm/next@13.4.8_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_LocationSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/LocationSearch */ \"(app-client)/./src/app/components/LocationSearch/index.jsx\");\n/* harmony import */ var _app_components_CardsSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/CardsSection */ \"(app-client)/./src/app/components/CardsSection/index.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/.pnpm/next@13.4.8_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_components_CardsSection_mock_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/CardsSection/mock-data.json */ \"(app-client)/./src/app/components/CardsSection/mock-data.json\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst LocationAndCards = ()=>{\n    _s();\n    const { centers } = _app_components_CardsSection_mock_data_json__WEBPACK_IMPORTED_MODULE_4__;\n    const [activeLocation, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        label: \"All\",\n        value: \"all\"\n    });\n    const [activeService, setService] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        label: \"All\",\n        value: \"all\"\n    });\n    const [centersOnPage, setCentersOnPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const filteredByService = centers.reduce((accumulator, current)=>{\n            const filteredSubArray = current.services.filter((element1)=>activeService.value.includes(element1.value));\n            if (filteredSubArray.length > 0) {\n                accumulator.push(current);\n            }\n            return accumulator;\n        }, []);\n        const filteredByLocation = centers.reduce((accumulator, current)=>{\n            const filteredSubArray = current.location.value.includes(element.value);\n            if (filteredSubArray.length > 0) {\n                accumulator.push(current);\n            }\n            return accumulator;\n        }, []);\n        console.log(\"filteredByService array\", filteredByService);\n        console.log(\"filteredByLocation array\", filteredByLocation);\n    // setCentersOnPage(centers);\n    }, [\n        _app_components_CardsSection_mock_data_json__WEBPACK_IMPORTED_MODULE_4__\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_LocationSearch__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                activeLocation: activeLocation,\n                setLocation: setLocation,\n                activeService: activeService,\n                setService: setService\n            }, void 0, false, {\n                fileName: \"/Users/imac/Desktop/kibtech/src/app/components/LocationAndCards/index.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_CardsSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                data: centersOnPage\n            }, void 0, false, {\n                fileName: \"/Users/imac/Desktop/kibtech/src/app/components/LocationAndCards/index.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/imac/Desktop/kibtech/src/app/components/LocationAndCards/index.jsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LocationAndCards, \"QZBdiWzrPJBHRsDk5TVnrxkSRdg=\");\n_c = LocationAndCards;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LocationAndCards);\nvar _c;\n$RefreshReg$(_c, \"LocationAndCards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL0xvY2F0aW9uQW5kQ2FyZHMvaW5kZXguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUU2RDtBQUNKO0FBQ2I7QUFDb0I7QUFFaEUsTUFBTUssbUJBQW1COztJQUN2QixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHRix3RUFBSUE7SUFDeEIsTUFBTSxDQUFDRyxnQkFBZ0JDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7UUFDN0NNLE9BQU87UUFDUEMsT0FBTztJQUNUO0lBQ0EsTUFBTSxDQUFDQyxlQUFlQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO1FBQUVNLE9BQU87UUFBT0MsT0FBTztJQUFNO0lBQzFFLE1BQU0sQ0FBQ0csZUFBZUMsaUJBQWlCLEdBQUdYLCtDQUFRQSxDQUFDLEVBQUU7SUFFckRELGdEQUFTQSxDQUFDO1FBQ04sTUFBTWEsb0JBQW9CVCxRQUFRVSxNQUFNLENBQUMsQ0FBQ0MsYUFBYUM7WUFDckQsTUFBTUMsbUJBQW1CRCxRQUFRRSxRQUFRLENBQUNDLE1BQU0sQ0FBQyxDQUFDQyxXQUFZWCxjQUFjRCxLQUFLLENBQUNhLFFBQVEsQ0FBQ0QsU0FBUVosS0FBSztZQUV4RyxJQUFJUyxpQkFBaUJLLE1BQU0sR0FBRyxHQUFHO2dCQUMvQlAsWUFBWVEsSUFBSSxDQUFDUDtZQUNuQjtZQUVBLE9BQU9EO1FBQ1QsR0FBRyxFQUFFO1FBQ0wsTUFBTVMscUJBQXFCcEIsUUFBUVUsTUFBTSxDQUFDLENBQUNDLGFBQWFDO1lBQ3RELE1BQU1DLG1CQUFtQkQsUUFBUVMsUUFBUSxDQUFDakIsS0FBSyxDQUFDYSxRQUFRLENBQUNELFFBQVFaLEtBQUs7WUFFdEUsSUFBSVMsaUJBQWlCSyxNQUFNLEdBQUcsR0FBRztnQkFDL0JQLFlBQVlRLElBQUksQ0FBQ1A7WUFDbkI7WUFFQSxPQUFPRDtRQUNULEdBQUcsRUFBRTtRQUVMVyxRQUFRQyxHQUFHLENBQUMsMkJBQTBCZDtRQUN0Q2EsUUFBUUMsR0FBRyxDQUFDLDRCQUEyQkg7SUFFekMsNkJBQTZCO0lBQy9CLEdBQUc7UUFBQ3RCLHdFQUFJQTtLQUFDO0lBQ1QscUJBQ0UsOERBQUMwQjs7MEJBQ0MsOERBQUM5QixzRUFBY0E7Z0JBQ2JPLGdCQUFnQkE7Z0JBQ2hCQyxhQUFhQTtnQkFDYkcsZUFBZUE7Z0JBQ2ZDLFlBQVlBOzs7Ozs7MEJBRWQsOERBQUNYLG9FQUFZQTtnQkFBQ0csTUFBTVM7Ozs7Ozs7Ozs7OztBQUcxQjtHQTdDTVI7S0FBQUE7QUE4Q04sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvTG9jYXRpb25BbmRDYXJkcy9pbmRleC5qc3g/MWM4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IExvY2F0aW9uU2VhcmNoIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL0xvY2F0aW9uU2VhcmNoXCI7XG5pbXBvcnQgQ2FyZHNTZWN0aW9uIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL0NhcmRzU2VjdGlvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvQ2FyZHNTZWN0aW9uL21vY2stZGF0YS5qc29uXCI7XG5cbmNvbnN0IExvY2F0aW9uQW5kQ2FyZHMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY2VudGVycyB9ID0gZGF0YTtcbiAgY29uc3QgW2FjdGl2ZUxvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgbGFiZWw6IFwiQWxsXCIsXG4gICAgdmFsdWU6IFwiYWxsXCIsXG4gIH0pO1xuICBjb25zdCBbYWN0aXZlU2VydmljZSwgc2V0U2VydmljZV0gPSB1c2VTdGF0ZSh7IGxhYmVsOiBcIkFsbFwiLCB2YWx1ZTogXCJhbGxcIiB9KTtcbiAgY29uc3QgW2NlbnRlcnNPblBhZ2UsIHNldENlbnRlcnNPblBhZ2VdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXJlZEJ5U2VydmljZSA9IGNlbnRlcnMucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudCkgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZFN1YkFycmF5ID0gY3VycmVudC5zZXJ2aWNlcy5maWx0ZXIoKGVsZW1lbnQpID0+IGFjdGl2ZVNlcnZpY2UudmFsdWUuaW5jbHVkZXMoZWxlbWVudC52YWx1ZSkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGZpbHRlcmVkU3ViQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGFjY3VtdWxhdG9yLnB1c2goY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgIH0sIFtdKTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkQnlMb2NhdGlvbiA9IGNlbnRlcnMucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudCkgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZFN1YkFycmF5ID0gY3VycmVudC5sb2NhdGlvbi52YWx1ZS5pbmNsdWRlcyhlbGVtZW50LnZhbHVlKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChmaWx0ZXJlZFN1YkFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBhY2N1bXVsYXRvci5wdXNoKGN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICB9LCBbXSk7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKCdmaWx0ZXJlZEJ5U2VydmljZSBhcnJheScsZmlsdGVyZWRCeVNlcnZpY2UpO1xuICAgICAgY29uc29sZS5sb2coJ2ZpbHRlcmVkQnlMb2NhdGlvbiBhcnJheScsZmlsdGVyZWRCeUxvY2F0aW9uKTtcblxuICAgIC8vIHNldENlbnRlcnNPblBhZ2UoY2VudGVycyk7XG4gIH0sIFtkYXRhXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxMb2NhdGlvblNlYXJjaFxuICAgICAgICBhY3RpdmVMb2NhdGlvbj17YWN0aXZlTG9jYXRpb259XG4gICAgICAgIHNldExvY2F0aW9uPXtzZXRMb2NhdGlvbn1cbiAgICAgICAgYWN0aXZlU2VydmljZT17YWN0aXZlU2VydmljZX1cbiAgICAgICAgc2V0U2VydmljZT17c2V0U2VydmljZX1cbiAgICAgIC8+XG4gICAgICA8Q2FyZHNTZWN0aW9uIGRhdGE9e2NlbnRlcnNPblBhZ2V9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25BbmRDYXJkcztcbiJdLCJuYW1lcyI6WyJMb2NhdGlvblNlYXJjaCIsIkNhcmRzU2VjdGlvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZGF0YSIsIkxvY2F0aW9uQW5kQ2FyZHMiLCJjZW50ZXJzIiwiYWN0aXZlTG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsImxhYmVsIiwidmFsdWUiLCJhY3RpdmVTZXJ2aWNlIiwic2V0U2VydmljZSIsImNlbnRlcnNPblBhZ2UiLCJzZXRDZW50ZXJzT25QYWdlIiwiZmlsdGVyZWRCeVNlcnZpY2UiLCJyZWR1Y2UiLCJhY2N1bXVsYXRvciIsImN1cnJlbnQiLCJmaWx0ZXJlZFN1YkFycmF5Iiwic2VydmljZXMiLCJmaWx0ZXIiLCJlbGVtZW50IiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJwdXNoIiwiZmlsdGVyZWRCeUxvY2F0aW9uIiwibG9jYXRpb24iLCJjb25zb2xlIiwibG9nIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/LocationAndCards/index.jsx\n"));

/***/ })

});