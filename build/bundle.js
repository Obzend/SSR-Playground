/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Home = __webpack_require__(/*! ./components/Home */ \"./src/client/components/Home.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _UsersList = __webpack_require__(/*! ./components/UsersList */ \"./src/client/components/UsersList.js\");\n\nvar _UsersList2 = _interopRequireDefault(_UsersList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// export default () => {\n//   return (\n//     <div>\n//       <Route exact path=\"/\" component={Home} />\n//       <Route path=\"/users\" component={UsersList} />\n//     </div>\n//   );\n// };\n\nexports[\"default\"] = [{\n  path: '/',\n  component: _Home2.default,\n  exact: true\n}, {\n  loadData: _UsersList.loadData,\n  path: '/users',\n  component: _UsersList2.default\n}];\n\n//# sourceURL=webpack://ssr-playground/./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/components/Home.js":
/*!***************************************!*\
  !*** ./src/client/components/Home.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      \"div\",\n      null,\n      \"I'm the very best home component\"\n    ),\n    _react2.default.createElement(\n      \"button\",\n      { onClick: function onClick() {\n          return console.log(\"Hi there!\");\n        } },\n      \" Press me!\"\n    )\n  );\n};\n\nexports[\"default\"] = Home;\n\n//# sourceURL=webpack://ssr-playground/./src/client/components/Home.js?");

/***/ }),

/***/ "./src/client/components/UsersList.js":
/*!********************************************!*\
  !*** ./src/client/components/UsersList.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.loadData = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ../store/actions */ \"./src/client/store/actions/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar UsersList = function UsersList() {\n  var dispatch = (0, _reactRedux.useDispatch)();\n  var users = (0, _reactRedux.useSelector)(function (state) {\n    return state.users;\n  });\n\n  (0, _react.useEffect)(function () {\n    dispatch((0, _actions.fetchUsers)());\n  }, []);\n\n  var renderUsers = function renderUsers() {\n    return users.map(function (u) {\n      return _react2.default.createElement(\n        \"li\",\n        { key: u.id },\n        u.name\n      );\n    });\n  };\n\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    \"Here's a list of users\",\n    _react2.default.createElement(\n      \"ul\",\n      null,\n      renderUsers()\n    )\n  );\n};\n\nvar loadData = function loadData(store) {\n  console.log('Im trying to load some data');\n  return store.dispatch((0, _actions.fetchUsers)());\n};\n\nexports.loadData = loadData;\nexports[\"default\"] = UsersList;\n\n//# sourceURL=webpack://ssr-playground/./src/client/components/UsersList.js?");

/***/ }),

/***/ "./src/client/store/actions/index.js":
/*!*******************************************!*\
  !*** ./src/client/store/actions/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.fetchUsers = exports.FETCH_USERS = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar endpoint = 'http://react-ssr-api.herokuapp.com/';\n\nvar FETCH_USERS = exports.FETCH_USERS = 'fetch_users';\n\nvar fetchUsers = exports.fetchUsers = function fetchUsers() {\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _axios2.default.get(endpoint + 'users');\n\n            case 2:\n              res = _context.sent;\n\n\n              dispatch({\n                type: FETCH_USERS,\n                payload: res\n              });\n\n            case 4:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack://ssr-playground/./src/client/store/actions/index.js?");

/***/ }),

/***/ "./src/client/store/reducers/index.js":
/*!********************************************!*\
  !*** ./src/client/store/reducers/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _usersReducer = __webpack_require__(/*! ./usersReducer */ \"./src/client/store/reducers/usersReducer.js\");\n\nvar _usersReducer2 = _interopRequireDefault(_usersReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports[\"default\"] = (0, _redux.combineReducers)({\n  users: _usersReducer2.default\n});\n\n//# sourceURL=webpack://ssr-playground/./src/client/store/reducers/index.js?");

/***/ }),

/***/ "./src/client/store/reducers/usersReducer.js":
/*!***************************************************!*\
  !*** ./src/client/store/reducers/usersReducer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/store/actions/index.js\");\n\nexports[\"default\"] = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _actions.FETCH_USERS:\n      return action.payload.data;\n    default:\n      return state;\n  };\n};\n\n//# sourceURL=webpack://ssr-playground/./src/client/store/reducers/usersReducer.js?");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reducers = __webpack_require__(/*! ../client/store/reducers */ \"./src/client/store/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports[\"default\"] = function () {\n  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n\n  return store;\n};\n\n//# sourceURL=webpack://ssr-playground/./src/helpers/createStore.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ../client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports[\"default\"] = function (req, store) {\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { context: {}, location: req.path },\n      _react2.default.createElement(\n        \"div\",\n        null,\n        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n      )\n    )\n  ));\n\n  return \"\\n    <html>\\n      <head></head>\\n      <body>\\n          <div id=\\\"root\\\">\" + content + \"</div>\\n          <script src=\\\"bundle.js\\\"></script>\\n      </body>\\n    </html>\\n  \";\n};\n\n//# sourceURL=webpack://ssr-playground/./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ./client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _renderer = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nvar _createStore = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use(_express2.default.static('public')); // set from where the bundle.js is loaded\napp.get(\"*\", function (req, res) {\n  var store = (0, _createStore2.default)();\n\n  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {\n    var route = _ref.route;\n\n    return route.loadData ? route.loadData(store) : null;\n  });\n\n  Promise.all(promises).then(function () {\n    res.send((0, _renderer2.default)(req, store));\n  });\n});\n\napp.listen(3000, function () {\n  console.log(\"Listening on port 3000\");\n});\n\n//# sourceURL=webpack://ssr-playground/./src/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;