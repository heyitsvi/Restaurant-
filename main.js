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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayAbout\": () => (/* binding */ displayAbout)\n/* harmony export */ });\nfunction displayAbout(){\r\n    const intro = document.createElement('div');\r\n    intro.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quod similique, \r\n    voluptas pariatur delectus odit maxime accusantium, dolores quae sequi explicabo adipisci \r\n    totam perferendis harum neque? Est soluta laudantium ipsam.`;\r\n    intro.setAttribute(\"id\",\"intro\");\r\n    document.querySelector(\"#content\").appendChild(intro);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayContact\": () => (/* binding */ displayContact)\n/* harmony export */ });\nfunction displayContact(){\r\n    let contact_div = document.createElement('div');\r\n    contact_div.setAttribute(\"id\",\"contact\");\r\n    document.querySelector(\"#content\").appendChild(contact_div);\r\n    let contact = document.getElementById(\"contact\");\r\n\r\n    const img  = document.createElement(\"img\");\r\n    img.src = \"./address.PNG\";\r\n    contact.appendChild(img);\r\n\r\n    const address = document.createElement(\"div\");\r\n    address.textContent=`\r\nPhone Number: +1 303-205\r\nEmail: la-bel.ca\r\n6263 Leland Way, Los Angeles, CA 90028, United States`;\r\n    contact.appendChild(address);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload.js */ \"./src/pageload.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_pageload_js__WEBPACK_IMPORTED_MODULE_0__.pageload)();\r\n\r\nfunction clearDisplay(){\r\n    let divs = document.querySelector(\"#content\");\r\n    while (divs.firstChild) {\r\n        divs.removeChild(divs.firstChild);\r\n    }\r\n}\r\n\r\n\r\nfunction clickTab(){\r\n    const Btn1 = document.querySelector(\"#Btn1\");\r\n    const Btn2 = document.querySelector(\"#Btn2\");\r\n    const Btn3 = document.querySelector(\"#Btn3\");\r\n    const Btns = document.querySelector(\".tabBtn\");\r\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_1__.displayAbout)();\r\n    Btn1.addEventListener(\"click\", event => {\r\n        clearDisplay();\r\n        (0,_about_js__WEBPACK_IMPORTED_MODULE_1__.displayAbout)()});\r\n\r\n    Btn2.addEventListener(\"click\", event => {\r\n        clearDisplay();\r\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.displayMenu)()});\r\n\r\n    Btn3.addEventListener(\"click\", event => {\r\n        clearDisplay();\r\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.displayContact)();\r\n    });\r\n}\r\nclickTab();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayMenu\": () => (/* binding */ displayMenu)\n/* harmony export */ });\nfunction displayMenu(){\r\n    let menu_div = document.createElement('div');\r\n    menu_div.setAttribute(\"id\",\"menu-list\");\r\n    document.querySelector(\"#content\").appendChild(menu_div);\r\n    let menu = document.getElementById(\"menu-list\");\r\n    \r\n    class createItems{\r\n        constructor(name,ingredients,price){\r\n            this.name = name;\r\n            this.ingredients = ingredients;\r\n            this.price = price;\r\n        }\r\n    }\r\n\r\n    let item1 = new createItems(\"Breakfast Sandwich\",\"Bread, Eggs, Veggies, Cheese\", \"10\");\r\n    let item2 = new createItems(\"Lunch Platter\", \"Steak, Rice, Sweet Potatoes\", \"50\");\r\n    let item3 = new createItems(\"Brunch Sandwich\", \"Bread, Chipotle, Veggies\", \"15\");\r\n    let item4 = new createItems(\"Dinner Platter\", \"Chicken, Rice, Veggies, Soup\", \"50\");\r\n\r\n    let items = [item1,item2,item3,item4];\r\n\r\n    function createItemDiv(item){\r\n        let div = document.createElement(\"div\");\r\n        div.setAttribute(\"class\",\"items\");\r\n        div.textContent = \r\n`${item.name}\r\n\r\n${item.ingredients}\r\n \r\n${item.price}$`;\r\n        return div;\r\n    }\r\n\r\n    for(let i =0; i<4;i++){\r\n        let div = createItemDiv(items[i]);\r\n        menu.appendChild(div);\r\n    }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageload\": () => (/* binding */ pageload)\n/* harmony export */ });\nfunction pageload(){\r\n    const title = document.createElement('div');\r\n    title.textContent = \"La Bel Restaurant\";\r\n    title.setAttribute(\"id\",\"heading\");\r\n    console.log(document.body);\r\n    document.body.appendChild(title);\r\n\r\n    const tabs = document.createElement('div');\r\n    tabs.setAttribute(\"id\",\"tabs\");\r\n    document.body.appendChild(tabs);\r\n\r\n    const tab1 = document.createElement('button');\r\n    tab1.textContent = \"About\";\r\n    tab1.setAttribute(\"id\",\"Btn1\");\r\n    tab1.setAttribute(\"class\",\"tabBtn\");\r\n    const tab2 = document.createElement('button');\r\n    tab2.textContent = \"Menu\";\r\n    tab2.setAttribute(\"id\",\"Btn2\");\r\n    tab2.setAttribute(\"class\",\"tabBtn\");\r\n    const tab3 = document.createElement('button');\r\n    tab3.textContent = \"Contact\";\r\n    tab3.setAttribute(\"id\",\"Btn3\");\r\n    tab3.setAttribute(\"class\",\"tabBtn\");\r\n    document.querySelector(\"#tabs\").appendChild(tab1);\r\n    document.querySelector(\"#tabs\").appendChild(tab2);\r\n    document.querySelector(\"#tabs\").appendChild(tab3);\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageload.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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