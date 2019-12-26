(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stickers_stickers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stickers/stickers.component */ "./src/app/stickers/stickers.component.ts");
/* harmony import */ var _stickers_sticker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stickers/sticker.component */ "./src/app/stickers/sticker.component.ts");





var routes = [
    { path: '', redirectTo: '/stickers', pathMatch: 'full' },
    { path: 'stickers', component: _stickers_stickers_component__WEBPACK_IMPORTED_MODULE_3__["StickersComponent"] },
    { path: 'sticker/:id', component: _stickers_sticker_component__WEBPACK_IMPORTED_MODULE_4__["Sticker"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n  <header class=\"header\">\r\n    <div class=\"container\">\r\n      <p class=\"title\">\r\n        {{ title }}\r\n      </p>\r\n    </div>\r\n  </header>\r\n  <div class=\"wrapper\">\r\n    <div class=\"content\">\r\n      <div class=\"container\">\r\n      <app-stickers></app-stickers>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <footer class=\"footer\">\r\n    <span class=\"left\">© Team Skye <i>2019</i></span>\r\n    <div class=\"right\"><ul><li><a href=\"https://t.me/SkayStickers\">Telegram chat</a></li></ul></div>\r\n  </footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* TO DO: refactor following code so that the styles are logically divided. */\n/* Exp: font-styles, colour-styles, layout-styles, component-styles.        */\n/* All rules can be reused in different ways                                */\n/* Use particular files and @include directive to separate those points     */\n/* Created by Denezhnaia Elena, freelance frontend developer*/\n/*skins*/\n.skin-purple {\n  color: #646374;\n  /*purple scheme*/\n}\n.skin-green {\n  color: #637465;\n  /*green scheme*/\n}\n/*skins*/\n/*preloader*/\n.preloader {\n  display: none;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.6);\n}\n.preloader .bc {\n  margin: 30% 30%;\n  height: 50%;\n}\n.preloader .preload-circle {\n  position: relative;\n  top: 45%;\n  left: 48.5%;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  /*  padding: 50px;*/\n  background-color: rgba(255, 255, 255, 0.72);\n  vertical-align: middle;\n  box-shadow: inset 1px 1px 1px 1px #93BDBF;\n  -webkit-animation-name: preload-animation;\n  /* Chrome, Safari, Opera */\n  -webkit-animation-duration: 5s;\n  /* Chrome, Safari, Opera */\n  animation-name: preload-animation;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  /*for keyframes regression*/\n  /*  box-shadow: 1px 2px 1px 1px #444;\r\n  /*  box-shadow: 0px 3px 1px 1px #444\r\n  /*  box-shadow: -1px 2px 1px 1px #444;\r\n  /*  box-shadow: -2px 1px 1px 1px #444;\r\n  /*  box-shadow: -3px 0px 1px 0px #444;\r\n  /*  box-shadow: -2px -2px 1px 0px #444;\r\n  /*  box-shadow: -1px -3px 1px 0px #444;\r\n  /*  box-shadow: 1px -2px 0px 1px #444;\r\n  /*  box-shadow: 2px -1px 0px 1px #444;\r\n  /*  box-shadow: 2px 2px 0px 1px #444;\r\n  /*  box-shadow: 0px 3px 0px 1px #444;*/\n}\n.preloader .preload-circle .circle-outer {\n  padding: 30px 0;\n}\n.preloader .preload-circle .circle-outer .circle-inner {\n  font-family: \"Dancing Script\", cursive;\n  font-size: 19pt;\n}\n/*preloader*/\n/*general*/\n* {\n  margin: 0;\n  padding: 0;\n}\n.body {\n  min-width: 800px;\n  overflow: auto;\n  font-family: \"Lucida Grande\", Helvetica, Arial, sans-serif;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.wrapper {\n  color: #414a51;\n  /*font-family: \"proxima-nova\", \"Proxima Nova\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;*/\n  line-height: 1.2;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -ms-flex: 1 0 auto;\n}\n/*header*/\n.header {\n  width: 100%;\n  display: table;\n  color: #595959;\n}\n.header p {\n  font-family: Georgia, serif;\n  font-size: 30pt;\n  font-style: oblique;\n  /* color: #967A96;/*purple scheme*/\n  color: #967A96;\n  /*green scheme*/\n  position: relative;\n  float: left;\n  left: 33px;\n  top: 20px;\n}\n/*header*/\n.content {\n  background-color: rgba(245, 245, 245, 0.3);\n  display: block;\n  min-height: 400px;\n  padding: 1em;\n  margin: 2em;\n  box-shadow: inset 2pt 1pt 1pt 0 #C5B8C5, inset 0 0 4pt 1pt #C5B8C5;\n}\n.content .container {\n  width: 70%;\n  margin-left: 15%;\n}\n.content .container .text {\n  padding: 1em;\n  margin: 1em 5em;\n  text-align: justify;\n}\n.content .container .title {\n  font-size: 2.15em;\n  width: 100%;\n  margin-bottom: 40pt;\n  text-align: center;\n}\n.content .container .subtitle {\n  text-align: center;\n  font-weight: 600;\n}\n/* animations*/\n@-webkit-keyframes load-content {\n  0% {\n    height: 0;\n  }\n  25% {\n    height: 100px;\n  }\n  50% {\n    height: 400px;\n  }\n  100% {\n    height: 700px;\n  }\n}\n@keyframes load-content {\n  0% {\n    height: 0;\n  }\n  25% {\n    height: 100px;\n  }\n  50% {\n    height: 400px;\n  }\n  100% {\n    height: 700px;\n  }\n}\n@-webkit-keyframes load-container {\n  0% {\n    opacity: 0;\n    padding: 0;\n    margin: 0;\n  }\n  20% {\n    opacity: 0.1;\n    padding: 0;\n    margin: 0;\n  }\n  30% {\n    opacity: 0.3;\n    padding: 0;\n    margin: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  60% {\n    opacity: 0.6;\n  }\n  80% {\n    opacity: 0.8;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes load-container {\n  0% {\n    opacity: 0;\n    padding: 0;\n    margin: 0;\n  }\n  20% {\n    opacity: 0.1;\n    padding: 0;\n    margin: 0;\n  }\n  30% {\n    opacity: 0.3;\n    padding: 0;\n    margin: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  60% {\n    opacity: 0.6;\n  }\n  80% {\n    opacity: 0.8;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes preload-animation {\n  0% {\n    box-shadow: inset 1px 2px 1px 1px #93BDBF;\n  }\n  10% {\n    box-shadow: inset 0 3px 1px 1px #93BDBF;\n  }\n  20% {\n    box-shadow: inset -1px 2px 1px 1px #93BDBF;\n  }\n  30% {\n    box-shadow: inset -2px 1px 1px 1px #93BDBF;\n  }\n  40% {\n    box-shadow: inset -3px 0 1px 0px #93BDBF;\n  }\n  50% {\n    box-shadow: inset -2px -2px 1px 0px #93BDBF;\n  }\n  60% {\n    box-shadow: inset -1px -3px 1px 0px #93BDBF;\n  }\n  70% {\n    box-shadow: inset 1px -2px 0 1px #93BDBF;\n  }\n  80% {\n    box-shadow: inset 2px -1px 0 1px #93BDBF;\n  }\n  90% {\n    box-shadow: inset 2px 2px 0 1px #93BDBF;\n  }\n  100% {\n    box-shadow: inset 1px 2px 1px 1px #93BDBF;\n  }\n}\n@keyframes preload-animation {\n  0% {\n    box-shadow: inset 1px 2px 1px 1px #93BDBF;\n  }\n  10% {\n    box-shadow: inset 0 3px 1px 1px #93BDBF;\n  }\n  20% {\n    box-shadow: inset -1px 2px 1px 1px #93BDBF;\n  }\n  30% {\n    box-shadow: inset -2px 1px 1px 1px #93BDBF;\n  }\n  40% {\n    box-shadow: inset -3px 0 1px 0px #93BDBF;\n  }\n  50% {\n    box-shadow: inset -2px -2px 1px 0px #93BDBF;\n  }\n  60% {\n    box-shadow: inset -1px -3px 1px 0px #93BDBF;\n  }\n  70% {\n    box-shadow: inset 1px -2px 0 1px #93BDBF;\n  }\n  80% {\n    box-shadow: inset 2px -1px 0 1px #93BDBF;\n  }\n  90% {\n    box-shadow: inset 2px 2px 0 1px #93BDBF;\n  }\n  100% {\n    box-shadow: inset 1px 2px 1px 1px #93BDBF;\n  }\n}\n/*animations*/\n/*menu*/\n/*hamburger*/\n.menu-button {\n  display: block;\n  height: 30px;\n  width: 50px;\n  cursor: pointer;\n}\n.menu-button svg {\n  /* fill: #907190;     /*purple scheme*/\n  fill: #719073;\n  stroke: #3D1346;\n}\n.menu-button.pushed {\n  box-shadow: 0 0 1px #EA72EA;\n  background-color: rgba(255, 255, 255, 0.78);\n}\n/*hamburger*/\n.menu-panel {\n  position: relative;\n  float: right;\n  right: 40px;\n  top: 33px;\n}\n.menu-container {\n  display: none;\n}\n.menu-container.visible {\n  display: table;\n  box-shadow: 0 0 1px #D29FD5;\n  background-color: #FFF;\n  position: absolute;\n  overflow: hidden;\n  left: -110px;\n  width: 160px;\n  z-index: 50;\n}\n/**/\n.smart-menu-panel span {\n  width: 100%;\n  display: block;\n  color: #BFBFBF;\n  text-shadow: -2px 1px 5px #E0D2E0;\n  padding: 8px 30px 8px 11px;\n  cursor: default;\n  font-size: 10pt;\n}\n.smart-menu-panel span .menu-item-enabled {\n  color: #DE7FF5;\n  cursor: pointer;\n}\n.smart-menu-panel span .menu-item-enabled:hover {\n  background-color: rgba(245, 182, 245, 0.11);\n}\n.smart-menu-item-group {\n  display: table;\n  width: 100%;\n  padding-bottom: 4px;\n  border-bottom: 1px solid #DA40FF;\n  margin-bottom: 4px;\n}\n.smart-menu-item-group:last-of-type {\n  border-top: 1px solid #B8A0BD;\n  border-bottom: 0 solid rgba(0, 0, 0, 0);\n}\n.smart-menu-item-group:only-of-type {\n  border-top: 1px solid #B8A0BD;\n  border-bottom: 1px solid #9C89A0;\n}\n/*menu*/\n/*footer*/\n.footer {\n  display: table;\n  padding: 1em 1em 0 1em;\n  margin: 1em auto;\n  box-shadow: 0px -1px 0 rgba(120, 102, 147, 0.5);\n  /*purple scheme*/\n  font-size: 9pt;\n}\n.footer .left {\n  display: table-cell;\n  padding-right: 50px;\n  padding-left: 20px;\n  vertical-align: middle;\n  text-align: left;\n  /*color: #A5A8AD;  /*purple scheme*/\n  color: #869366;\n  /*green scheme*/\n  /* box-shadow: 1px 0 0 #786693;  /*purple scheme*/\n  box-shadow: 1px 0 0 #869366;\n  /*green scheme*/\n  position: relative;\n}\n.footer .right {\n  display: table-cell;\n  padding-left: 50px;\n  vertical-align: middle;\n  position: relative;\n}\n.footer .right ul {\n  margin: 0;\n  padding: 0;\n}\n.footer .right ul li {\n  display: inline-block;\n  padding: 0 20px 0 0;\n}\n.footer .right ul li a {\n  /*  color: #7E97A8; /*purple scheme*/\n  color: #869366;\n  /*green scheme*/\n}\n.footer .right ul li a:visited {\n  color: #869366;\n  /*green scheme*/\n  /*  color: #7E97A8;  /*purple scheme*/\n}\n/*footer*/\n/*can be useful if you want content's height eaqual to the difference between full height and sum of footer and header */\n.melicenta-magic {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 120px;\n  right: 120px;\n  background-color: #FFF;\n}\n/*general*/\n/*header*/\n.header a, .header a:visited {\n  border-width: 0 0 1px 0;\n  text-decoration: none;\n  cursor: pointer;\n}\n.header a:hover, .header a:visited:hover {\n  color: #999;\n  border-width: 0 0 1px 0;\n  border-style: none none solid none;\n  border-color: #c0c0c0;\n  text-decoration: none;\n}\n/*header*/\n/*selector*/\n/*expander*/\n.expander-container {\n  background-color: inherit;\n  position: relative;\n  margin: 10px 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.expander-container .expander {\n  display: block;\n  padding: 5px;\n  margin-right: 20px;\n  background-color: inherit;\n}\n.expander-container .expander .expander-header {\n  border-bottom: 1px solid #E4E4E4;\n  height: 0.4em;\n  margin-bottom: 0.5em;\n  position: relative;\n  background-color: inherit;\n  cursor: pointer;\n}\n.expander-container .expander .expander-header .expander-title {\n  padding: 0 5px;\n  position: absolute;\n  left: 9px;\n  z-index: 20;\n  cursor: pointer;\n  color: #A6C0CB;\n  font-size: 12pt;\n  line-height: 10pt;\n  background-color: inherit;\n}\n.expander-container .expander .expander-header .expander-title:before {\n  content: \"ⓥ\";\n  position: absolute;\n  font-size: 17pt;\n  height: 23px;\n  width: 30px;\n  left: -36px;\n  top: -8px;\n  color: #E4E4E4;\n  /* background: rgba(0, 0, 0, 0) url(../images/folder-expanded.png) no-repeat center center; */\n  background-color: inherit;\n  -webkit-transform: rotate(-90deg);\n  transform: rotate(-90deg);\n}\n.expander-container .expander .expander-content {\n  overflow: hidden;\n  height: 0;\n  opacity: 0;\n  position: relative;\n}\n.expander-container .expander.expanded .expander-header {\n  border-bottom: 1px solid #E4E4E4;\n}\n.expander-container .expander.expanded .expander-header .expander-title {\n  color: #7F8F96;\n}\n.expander-container .expander.expanded .expander-header .expander-title:before {\n  content: \"ⓥ\";\n  position: absolute;\n  width: 25px;\n  height: 30px;\n  font-size: 17pt;\n  left: -32px;\n  top: -3px;\n  color: #7F8F96;\n  /* background: url(../images/folder.png) no-repeat center center; */\n  background-color: inherit;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n}\n.expander-container .expander.expanded .expander-content {\n  height: 100%;\n  opacity: 1;\n  padding: 5px;\n}\n.expander-container .animated .expander-title:before, .expander-container .expanded.animated .expander-title:before {\n  -webkit-transition: -webkit-transform 0.5s linear;\n  transition: -webkit-transform 0.5s linear;\n  transition: transform 0.5s linear;\n  transition: transform 0.5s linear, -webkit-transform 0.5s linear;\n}\n.expander.animated .expander-container {\n  -webkit-transition: opacity 2.5s ease-out, height 2.5s linear;\n  transition: opacity 2.5s ease-out, height 2.5s linear;\n}\n/*expander*/\n.svg {\n  text-align: right;\n}\n.svg svg {\n  height: 200px;\n}\n.svg svg g {\n  stroke: #444;\n  fill: #F5F5F5;\n}\n/*table*/\n.table {\n  box-shadow: 1px -1px 0 #D8D8D8, -1px 0 0 #D8D8D8;\n  width: 91%;\n  margin: 30px 85px;\n  cursor: default;\n}\n.table th {\n  box-shadow: 0 1px 0 #969696;\n}\n.table td {\n  border-bottom: 1px solid #D8D8D8;\n  border-collapse: collapse;\n  text-align: center;\n}\n.table td:first-child {\n  border-left: 0 solid rgba(255, 255, 255, 0);\n}\n.table td:nth-child(2n+1) {\n  border-right: 1px solid #E1E8EF;\n  border-left: 1px solid #E1E8EF;\n}\n.table tbody tr:hover {\n  background-color: #E1E8EF;\n}\n/*table*/\n/*buttons*/\n.button {\n  padding: 10px;\n  border-radius: 2px;\n  box-shadow: 0 0 1px #D2D2D2;\n  cursor: pointer;\n  font-size: 11pt;\n  white-space: nowrap;\n  line-height: 27px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.select.single li.checked a {\n  box-shadow: none;\n  padding: 5px 10px;\n}\n.select.single li.checked a:before {\n  content: \"✨\";\n  display: inline-block;\n  padding-right: 5px;\n}\n/*buttons*/\n/*additional*/\n.users li {\n  list-style-type: none;\n  padding: 5px;\n  margin: 1em;\n  color: inherit;\n  display: inline-block;\n}\n.users li a {\n  color: inherit;\n}\n/*additional*/\r\n/*# sourceMappingURL=data:application/json;base64,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QUVBLGFBQWEiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIFRPIERPOiByZWZhY3RvciBmb2xsb3dpbmcgY29kZSBzbyB0aGF0IHRoZSBzdHlsZXMgYXJlIGxvZ2ljYWxseSBkaXZpZGVkLiAqL1xuLyogRXhwOiBmb250LXN0eWxlcywgY29sb3VyLXN0eWxlcywgbGF5b3V0LXN0eWxlcywgY29tcG9uZW50LXN0eWxlcy4gICAgICAgICovXG4vKiBBbGwgcnVsZXMgY2FuIGJlIHJldXNlZCBpbiBkaWZmZXJlbnQgd2F5cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qIFVzZSBwYXJ0aWN1bGFyIGZpbGVzIGFuZCBAaW5jbHVkZSBkaXJlY3RpdmUgdG8gc2VwYXJhdGUgdGhvc2UgcG9pbnRzICAgICAqL1xuLyogQ3JlYXRlZCBieSBEZW5lemhuYWlhIEVsZW5hLCBmcmVlbGFuY2UgZnJvbnRlbmQgZGV2ZWxvcGVyKi9cbi8qc2tpbnMqL1xuLnNraW4tcHVycGxlIHtcbiAgY29sb3I6ICM2NDYzNzQ7XG4gIC8qcHVycGxlIHNjaGVtZSovXG59XG5cbi5za2luLWdyZWVuIHtcbiAgY29sb3I6ICM2Mzc0NjU7XG4gIC8qZ3JlZW4gc2NoZW1lKi9cbn1cblxuLypza2lucyovXG4vKnByZWxvYWRlciovXG4ucHJlbG9hZGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cbi5wcmVsb2FkZXIgLmJjIHtcbiAgbWFyZ2luOiAzMCUgMzAlO1xuICBoZWlnaHQ6IDUwJTtcbn1cbi5wcmVsb2FkZXIgLnByZWxvYWQtY2lyY2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDQ1JTtcbiAgbGVmdDogNDguNSU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLyogIHBhZGRpbmc6IDUwcHg7Ki9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcyKTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxcHggMXB4ICM5M0JEQkY7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHByZWxvYWQtYW5pbWF0aW9uO1xuICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDVzO1xuICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cbiAgYW5pbWF0aW9uLW5hbWU6IHByZWxvYWQtYW5pbWF0aW9uO1xuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLypmb3Iga2V5ZnJhbWVzIHJlZ3Jlc3Npb24qL1xuICAvKiAgYm94LXNoYWRvdzogMXB4IDJweCAxcHggMXB4ICM0NDQ7XHJcbiAgLyogIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IDFweCAjNDQ0XHJcbiAgLyogIGJveC1zaGFkb3c6IC0xcHggMnB4IDFweCAxcHggIzQ0NDtcclxuICAvKiAgYm94LXNoYWRvdzogLTJweCAxcHggMXB4IDFweCAjNDQ0O1xyXG4gIC8qICBib3gtc2hhZG93OiAtM3B4IDBweCAxcHggMHB4ICM0NDQ7XHJcbiAgLyogIGJveC1zaGFkb3c6IC0ycHggLTJweCAxcHggMHB4ICM0NDQ7XHJcbiAgLyogIGJveC1zaGFkb3c6IC0xcHggLTNweCAxcHggMHB4ICM0NDQ7XHJcbiAgLyogIGJveC1zaGFkb3c6IDFweCAtMnB4IDBweCAxcHggIzQ0NDtcclxuICAvKiAgYm94LXNoYWRvdzogMnB4IC0xcHggMHB4IDFweCAjNDQ0O1xyXG4gIC8qICBib3gtc2hhZG93OiAycHggMnB4IDBweCAxcHggIzQ0NDtcclxuICAvKiAgYm94LXNoYWRvdzogMHB4IDNweCAwcHggMXB4ICM0NDQ7Ki9cbn1cbi5wcmVsb2FkZXIgLnByZWxvYWQtY2lyY2xlIC5jaXJjbGUtb3V0ZXIge1xuICBwYWRkaW5nOiAzMHB4IDA7XG59XG4ucHJlbG9hZGVyIC5wcmVsb2FkLWNpcmNsZSAuY2lyY2xlLW91dGVyIC5jaXJjbGUtaW5uZXIge1xuICBmb250LWZhbWlseTogXCJEYW5jaW5nIFNjcmlwdFwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDE5cHQ7XG59XG5cbi8qcHJlbG9hZGVyKi9cbi8qZ2VuZXJhbCovXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYm9keSB7XG4gIG1pbi13aWR0aDogODAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ud3JhcHBlciB7XG4gIGNvbG9yOiAjNDE0YTUxO1xuICAvKmZvbnQtZmFtaWx5OiBcInByb3hpbWEtbm92YVwiLCBcIlByb3hpbWEgTm92YVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7Ki9cbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZmxleDogMTtcbiAgLW1zLWZsZXg6IDEgMCBhdXRvO1xufVxuXG4vKmhlYWRlciovXG4uaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjb2xvcjogIzU5NTk1OTtcbn1cbi5oZWFkZXIgcCB7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjtcbiAgZm9udC1zaXplOiAzMHB0O1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICAvKiBjb2xvcjogIzk2N0E5NjsvKnB1cnBsZSBzY2hlbWUqL1xuICBjb2xvcjogIzk2N0E5NjtcbiAgLypncmVlbiBzY2hlbWUqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBsZWZ0OiAzM3B4O1xuICB0b3A6IDIwcHg7XG59XG5cbi8qaGVhZGVyKi9cbi5jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjMpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luOiAyZW07XG4gIGJveC1zaGFkb3c6IGluc2V0IDJwdCAxcHQgMXB0IDAgI0M1QjhDNSwgaW5zZXQgMCAwIDRwdCAxcHQgI0M1QjhDNTtcbn1cbi5jb250ZW50IC5jb250YWluZXIge1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMTUlO1xufVxuLmNvbnRlbnQgLmNvbnRhaW5lciAudGV4dCB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luOiAxZW0gNWVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLmNvbnRlbnQgLmNvbnRhaW5lciAudGl0bGUge1xuICBmb250LXNpemU6IDIuMTVlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDQwcHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250ZW50IC5jb250YWluZXIgLnN1YnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4vKiBhbmltYXRpb25zKi9cbkBrZXlmcmFtZXMgbG9hZC1jb250ZW50IHtcbiAgMCUge1xuICAgIGhlaWdodDogMDtcbiAgfVxuICAyNSUge1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgNTAlIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGhlaWdodDogNzAwcHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbG9hZC1jb250YWluZXIge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAyMCUge1xuICAgIG9wYWNpdHk6IDAuMTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAzMCUge1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICA2MCUge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuICA4MCUge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHByZWxvYWQtYW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAycHggMXB4IDFweCAjOTNCREJGO1xuICB9XG4gIDEwJSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggMXB4IDFweCAjOTNCREJGO1xuICB9XG4gIDIwJSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAycHggMXB4IDFweCAjOTNCREJGO1xuICB9XG4gIDMwJSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTJweCAxcHggMXB4IDFweCAjOTNCREJGO1xuICB9XG4gIDQwJSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTNweCAwIDFweCAwcHggIzkzQkRCRjtcbiAgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IC0ycHggLTJweCAxcHggMHB4ICM5M0JEQkY7XG4gIH1cbiAgNjAlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IC0zcHggMXB4IDBweCAjOTNCREJGO1xuICB9XG4gIDcwJSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IC0ycHggMCAxcHggIzkzQkRCRjtcbiAgfVxuICA4MCUge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDJweCAtMXB4IDAgMXB4ICM5M0JEQkY7XG4gIH1cbiAgOTAlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDAgMXB4ICM5M0JEQkY7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDJweCAxcHggMXB4ICM5M0JEQkY7XG4gIH1cbn1cbi8qYW5pbWF0aW9ucyovXG4vKm1lbnUqL1xuLypoYW1idXJnZXIqL1xuLm1lbnUtYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tZW51LWJ1dHRvbiBzdmcge1xuICAvKiBmaWxsOiAjOTA3MTkwOyAgICAgLypwdXJwbGUgc2NoZW1lKi9cbiAgZmlsbDogIzcxOTA3MztcbiAgc3Ryb2tlOiAjM0QxMzQ2O1xufVxuXG4ubWVudS1idXR0b24ucHVzaGVkIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjRUE3MkVBO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgpO1xufVxuXG4vKmhhbWJ1cmdlciovXG4ubWVudS1wYW5lbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICByaWdodDogNDBweDtcbiAgdG9wOiAzM3B4O1xufVxuXG4ubWVudS1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWVudS1jb250YWluZXIudmlzaWJsZSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICNEMjlGRDU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbGVmdDogLTExMHB4O1xuICB3aWR0aDogMTYwcHg7XG4gIHotaW5kZXg6IDUwO1xufVxuXG4vKiovXG4uc21hcnQtbWVudS1wYW5lbCBzcGFuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI0JGQkZCRjtcbiAgdGV4dC1zaGFkb3c6IC0ycHggMXB4IDVweCAjRTBEMkUwO1xuICBwYWRkaW5nOiA4cHggMzBweCA4cHggMTFweDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBmb250LXNpemU6IDEwcHQ7XG59XG4uc21hcnQtbWVudS1wYW5lbCBzcGFuIC5tZW51LWl0ZW0tZW5hYmxlZCB7XG4gIGNvbG9yOiAjREU3RkY1O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc21hcnQtbWVudS1wYW5lbCBzcGFuIC5tZW51LWl0ZW0tZW5hYmxlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAxODIsIDI0NSwgMC4xMSk7XG59XG5cbi5zbWFydC1tZW51LWl0ZW0tZ3JvdXAge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREE0MEZGO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5zbWFydC1tZW51LWl0ZW0tZ3JvdXA6bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNCOEEwQkQ7XG4gIGJvcmRlci1ib3R0b206IDAgc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuLnNtYXJ0LW1lbnUtaXRlbS1ncm91cDpvbmx5LW9mLXR5cGUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0I4QTBCRDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5Qzg5QTA7XG59XG5cbi8qbWVudSovXG4vKmZvb3RlciovXG4uZm9vdGVyIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHBhZGRpbmc6IDFlbSAxZW0gMCAxZW07XG4gIG1hcmdpbjogMWVtIGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCAtMXB4IDAgcmdiYSgxMjAsIDEwMiwgMTQ3LCAwLjUpO1xuICAvKnB1cnBsZSBzY2hlbWUqL1xuICBmb250LXNpemU6IDlwdDtcbn1cbi5mb290ZXIgLmxlZnQge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIC8qY29sb3I6ICNBNUE4QUQ7ICAvKnB1cnBsZSBzY2hlbWUqL1xuICBjb2xvcjogIzg2OTM2NjtcbiAgLypncmVlbiBzY2hlbWUqL1xuICAvKiBib3gtc2hhZG93OiAxcHggMCAwICM3ODY2OTM7ICAvKnB1cnBsZSBzY2hlbWUqL1xuICBib3gtc2hhZG93OiAxcHggMCAwICM4NjkzNjY7XG4gIC8qZ3JlZW4gc2NoZW1lKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvb3RlciAucmlnaHQge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb290ZXIgLnJpZ2h0IHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmZvb3RlciAucmlnaHQgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDA7XG59XG4uZm9vdGVyIC5yaWdodCB1bCBsaSBhIHtcbiAgLyogIGNvbG9yOiAjN0U5N0E4OyAvKnB1cnBsZSBzY2hlbWUqL1xuICBjb2xvcjogIzg2OTM2NjtcbiAgLypncmVlbiBzY2hlbWUqL1xufVxuLmZvb3RlciAucmlnaHQgdWwgbGkgYTp2aXNpdGVkIHtcbiAgY29sb3I6ICM4NjkzNjY7XG4gIC8qZ3JlZW4gc2NoZW1lKi9cbiAgLyogIGNvbG9yOiAjN0U5N0E4OyAgLypwdXJwbGUgc2NoZW1lKi9cbn1cblxuLypmb290ZXIqL1xuLypjYW4gYmUgdXNlZnVsIGlmIHlvdSB3YW50IGNvbnRlbnQncyBoZWlnaHQgZWFxdWFsIHRvIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gZnVsbCBoZWlnaHQgYW5kIHN1bSBvZiBmb290ZXIgYW5kIGhlYWRlciAqL1xuLm1lbGljZW50YS1tYWdpYyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDEyMHB4O1xuICByaWdodDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG59XG5cbi8qZ2VuZXJhbCovXG4vKmhlYWRlciovXG4uaGVhZGVyIGEsIC5oZWFkZXIgYTp2aXNpdGVkIHtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhlYWRlciBhOmhvdmVyLCAuaGVhZGVyIGE6dmlzaXRlZDpob3ZlciB7XG4gIGNvbG9yOiAjOTk5O1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcbiAgYm9yZGVyLXN0eWxlOiBub25lIG5vbmUgc29saWQgbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjYzBjMGMwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qaGVhZGVyKi9cbi8qc2VsZWN0b3IqL1xuLypleHBhbmRlciovXG4uZXhwYW5kZXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEwcHggMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uZXhwYW5kZXItY29udGFpbmVyIC5leHBhbmRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cbi5leHBhbmRlci1jb250YWluZXIgLmV4cGFuZGVyIC5leHBhbmRlci1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U0RTRFNDtcbiAgaGVpZ2h0OiAwLjRlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmV4cGFuZGVyLWNvbnRhaW5lciAuZXhwYW5kZXIgLmV4cGFuZGVyLWhlYWRlciAuZXhwYW5kZXItdGl0bGUge1xuICBwYWRkaW5nOiAwIDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA5cHg7XG4gIHotaW5kZXg6IDIwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjQTZDMENCO1xuICBmb250LXNpemU6IDEycHQ7XG4gIGxpbmUtaGVpZ2h0OiAxMHB0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuLmV4cGFuZGVyLWNvbnRhaW5lciAuZXhwYW5kZXIgLmV4cGFuZGVyLWhlYWRlciAuZXhwYW5kZXItdGl0bGU6YmVmb3JlIHtcbiAgY29udGVudDogXCLik6VcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDE3cHQ7XG4gIGhlaWdodDogMjNweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGxlZnQ6IC0zNnB4O1xuICB0b3A6IC04cHg7XG4gIGNvbG9yOiAjRTRFNEU0O1xuICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIHVybCguLi9pbWFnZXMvZm9sZGVyLWV4cGFuZGVkLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7ICovXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG4uZXhwYW5kZXItY29udGFpbmVyIC5leHBhbmRlciAuZXhwYW5kZXItY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMDtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmV4cGFuZGVyLWNvbnRhaW5lciAuZXhwYW5kZXIuZXhwYW5kZWQgLmV4cGFuZGVyLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTRFNEU0O1xufVxuLmV4cGFuZGVyLWNvbnRhaW5lciAuZXhwYW5kZXIuZXhwYW5kZWQgLmV4cGFuZGVyLWhlYWRlciAuZXhwYW5kZXItdGl0bGUge1xuICBjb2xvcjogIzdGOEY5Njtcbn1cbi5leHBhbmRlci1jb250YWluZXIgLmV4cGFuZGVyLmV4cGFuZGVkIC5leHBhbmRlci1oZWFkZXIgLmV4cGFuZGVyLXRpdGxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4pOlXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxN3B0O1xuICBsZWZ0OiAtMzJweDtcbiAgdG9wOiAtM3B4O1xuICBjb2xvcjogIzdGOEY5NjtcbiAgLyogYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9mb2xkZXIucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cbi5leHBhbmRlci1jb250YWluZXIgLmV4cGFuZGVyLmV4cGFuZGVkIC5leHBhbmRlci1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAxO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5leHBhbmRlci1jb250YWluZXIgLmFuaW1hdGVkIC5leHBhbmRlci10aXRsZTpiZWZvcmUsIC5leHBhbmRlci1jb250YWluZXIgLmV4cGFuZGVkLmFuaW1hdGVkIC5leHBhbmRlci10aXRsZTpiZWZvcmUge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBsaW5lYXI7XG59XG5cbi5leHBhbmRlci5hbmltYXRlZCAuZXhwYW5kZXItY29udGFpbmVyIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyLjVzIGVhc2Utb3V0LCBoZWlnaHQgMi41cyBsaW5lYXI7XG59XG5cbi8qZXhwYW5kZXIqL1xuLnN2ZyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnN2ZyBzdmcge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuLnN2ZyBzdmcgZyB7XG4gIHN0cm9rZTogIzQ0NDtcbiAgZmlsbDogI0Y1RjVGNTtcbn1cblxuLyp0YWJsZSovXG4udGFibGUge1xuICBib3gtc2hhZG93OiAxcHggLTFweCAwICNEOEQ4RDgsIC0xcHggMCAwICNEOEQ4RDg7XG4gIHdpZHRoOiA5MSU7XG4gIG1hcmdpbjogMzBweCA4NXB4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4udGFibGUgdGgge1xuICBib3gtc2hhZG93OiAwIDFweCAwICM5Njk2OTY7XG59XG4udGFibGUgdGQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Q4RDhEODtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IDAgc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn1cbi50YWJsZSB0ZDpudGgtY2hpbGQoMm4rMSkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRTFFOEVGO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNFMUU4RUY7XG59XG4udGFibGUgdGJvZHkgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFFOEVGO1xufVxuXG4vKnRhYmxlKi9cbi8qYnV0dG9ucyovXG4uYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICNEMkQyRDI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMXB0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5zZWxlY3Quc2luZ2xlIGxpLmNoZWNrZWQgYSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLnNlbGVjdC5zaW5nbGUgbGkuY2hlY2tlZCBhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4pyoXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4vKmJ1dHRvbnMqL1xuLyphZGRpdGlvbmFsKi9cbi51c2VycyBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDFlbTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi51c2VycyBsaSBhIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi8qYWRkaXRpb25hbCovIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SkyeStikers';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _mocked_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mocked-data.service */ "./src/app/mocked-data.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _stickers_stickers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stickers/stickers.component */ "./src/app/stickers/stickers.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _stickers_stickers_component__WEBPACK_IMPORTED_MODULE_8__["StickersComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"].forRoot(_mocked_data_service__WEBPACK_IMPORTED_MODULE_5__["MockedDataService"], { dataEncapsulation: false })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], MessageService);
    return MessageService;
}());
/* harmony default export */ __webpack_exports__["default"] = (MessageService);
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/mocked-data.service.ts":
/*!****************************************!*\
  !*** ./src/app/mocked-data.service.ts ***!
  \****************************************/
/*! exports provided: MockedDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockedDataService", function() { return MockedDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MockedDataService = /** @class */ (function () {
    function MockedDataService() {
    }
    MockedDataService.prototype.createDb = function () {
        var stickers = [
            { id: 1, name: 'FE', content: 'Ля мсье фронтендье' },
            { id: 2, name: 'NoCapacity', content: 'Нет капасити думать' },
            { id: 3, name: 'HomeVideo', content: 'Название нашего хоум видео' },
            { id: 4, name: 'FromAuthors', content: 'От содателей КЛС, ВО и продакт импорта' },
        ];
        return { stickers: stickers };
    };
    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (2).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    MockedDataService.prototype.genId = function (stickers) {
        return stickers.length > 0 ? Math.max.apply(Math, stickers.map(function (sticker) { return sticker.id; })) + 1 : 2;
    };
    MockedDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], MockedDataService);
    return MockedDataService;
}());

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/sticker.service.ts":
/*!************************************!*\
  !*** ./src/app/sticker.service.ts ***!
  \************************************/
/*! exports provided: StickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickerService", function() { return StickerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");






var StickerService = /** @class */ (function () {
    function StickerService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.stickersUrl = 'api/stickers'; // URL to web api
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    StickerService.prototype.getStickers = function () {
        var _this = this;
        return this.http.get(this.stickersUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log('fetched stickers'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getStickers', [])));
    };
    StickerService.prototype.getStickerNo404 = function (id) {
        var _this = this;
        var url = this.stickersUrl + "/?id=" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (stickers) { return stickers[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " sticker id=" + id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getSticker id=" + id)));
    };
    StickerService.prototype.getSticker = function (id) {
        var _this = this;
        var url = this.stickersUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched sticker id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getSticker id=" + id)));
    };
    StickerService.prototype.searchStickers = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }
        return this.http.get(this.stickersUrl + "/?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("found heroes matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('searchStickers', [])));
    };
    //////// Save methods //////////
    StickerService.prototype.addSticker = function (sticker) {
        var _this = this;
        return this.http.post(this.stickersUrl, sticker, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (newSticker) { return _this.log("added sticker w/ id=" + newSticker.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addSticker')));
    };
    StickerService.prototype.deleteSticker = function (sticker) {
        var _this = this;
        var id = typeof sticker === 'number' ? sticker : sticker.id;
        var url = this.stickersUrl + "/" + id;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("deleted hero id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteSticker')));
    };
    StickerService.prototype.updateSticker = function (sticker) {
        var _this = this;
        return this.http.put(this.stickersUrl, sticker, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("updated hero id=" + sticker.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateSticker')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    StickerService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    StickerService.prototype.log = function (message) {
        this.messageService.add("StickerService: " + message);
    };
    StickerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_5__["default"]])
    ], StickerService);
    return StickerService;
}());



/***/ }),

/***/ "./src/app/stickers/sticker.component.ts":
/*!***********************************************!*\
  !*** ./src/app/stickers/sticker.component.ts ***!
  \***********************************************/
/*! exports provided: Sticker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sticker", function() { return Sticker; });
var Sticker = /** @class */ (function () {
    function Sticker() {
    }
    return Sticker;
}());



/***/ }),

/***/ "./src/app/stickers/stickers.component.html":
/*!**************************************************!*\
  !*** ./src/app/stickers/stickers.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-section\">\r\n  <div class=\"content\">\r\n    <div class=\"select\">\r\n      <label>\r\n        Sticker name* :\r\n        <input class=\"form-field-input\" #stickerName />\r\n      </label>\r\n      <label>\r\n        Sticker content* :\r\n        <input class=\"form-field-input\" #stickerContent/>\r\n      </label>\r\n      <ul>\r\n        <li class=\"ruby checked\">\r\n          <a  (click)=\"add(stickerName.value,stickerContent.value); stickerName.value=''; stickerContent.value=''\">Add</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"p-section\">\r\n  <div class=\"flex-table\">\r\n    <div class=\"row\" *ngFor=\"let sticker of stickers\">\r\n      <div class=\"row-item small\">\r\n        {{sticker.name}}\r\n      </div>\r\n      <div class=\"row-item fixed\">\r\n        <div class=\"sticker\" id=\"{{sticker.id}}\">{{sticker.content}}</div>\r\n      </div>\r\n      <div class=\"row-item small\">\r\n        <div class=\"select\">\r\n          <ul>\r\n            <li class=\"ruby checked\">\r\n              <a  (click)=\"convert(sticker.id)\">Convert</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/stickers/stickers.component.scss":
/*!**************************************************!*\
  !*** ./src/app/stickers/stickers.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*content description*/\n.content {\n  background-color: rgba(245, 245, 245, 0.3);\n  padding: 1em;\n  box-shadow: inset 1pt -1pt 1pt 0pt #C5B8C5;\n}\n.p-section {\n  clear: both;\n  padding: 2em;\n}\n.line-section {\n  box-shadow: 0 0 1pt #D6C9D6;\n  margin-bottom: 20pt;\n  line-height: 16pt;\n  -webkit-animation-name: load-container;\n  /* Chrome, Safari, Opera */\n  -webkit-animation-duration: 5s;\n  /* Chrome, Safari, Opera */\n  animation-name: load-container;\n  animation-duration: 5s;\n}\n.line-section a, .line-section a:visited {\n  color: #908D90;\n}\n.form-field-input {\n  padding: 2pt;\n  margin: 5pt 10pt;\n  box-shadow: 0 0 2px 0 #967a96;\n  border: 0;\n}\n/*content-description*/\n/*selector*/\n.select {\n  display: inline-table;\n  padding: 0;\n  margin: 0 6px;\n  background-color: transparent;\n}\n.select ul {\n  list-style-type: none;\n  display: inline-table;\n  padding: 0;\n  margin: 0;\n  box-shadow: 0 0 2px #B5ADBB;\n  border-radius: 2px;\n}\n.select ul li {\n  padding: 0;\n  margin: 0;\n  display: table-cell;\n  text-align: center;\n}\n.select ul li a {\n  display: block;\n  padding: 5px 15px;\n  cursor: pointer;\n  font-size: 12px;\n}\n.select ul li a:hover {\n  color: #646464;\n  box-shadow: inset 0 0 1px #646464;\n  -webkit-transition: color 0.3s linear;\n  transition: color 0.3s linear;\n}\n.select ul li.checked a {\n  box-shadow: 0 0 3px #41524C;\n  color: #EBECED;\n  text-shadow: 0 0 1px rgba(255, 255, 255, 0.8);\n}\n.select ul li.checked a:hover {\n  color: #EBECED;\n  opacity: 0.8;\n}\n/*buttons*/\n.button {\n  padding: 10px;\n  border-radius: 2px;\n  box-shadow: 0 0 3px #967a96;\n  cursor: pointer;\n  font-size: 11pt;\n  white-space: nowrap;\n  line-height: 27px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n/*flex-tables*/\n.flex-table {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border: 1px solid #f2f2f2;\n  font-size: 1rem;\n  margin: 0.5rem;\n  line-height: 1.5;\n}\n.flex-table-header {\n  display: none;\n}\n@media (min-width: 500px) {\n  .flex-table-header {\n    font-weight: 700;\n    background-color: #f2f2f2;\n  }\n}\n.flex-table .row {\n  width: 100%;\n}\n.flex-table .row:nth-of-type(even) {\n  background-color: #f2f2f2;\n}\n.flex-table .row:nth-of-type(odd) {\n  background-color: #ffffff;\n}\n@media (min-width: 500px) {\n  .flex-table .row {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row nowrap;\n  }\n\n  .flex-table .row:nth-of-type(even) {\n    background-color: #ffffff;\n  }\n\n  .flex-table .row:nth-of-type(odd) {\n    background-color: #f2f2f2;\n  }\n}\n.flex-table .row-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  flex-basis: auto;\n  padding: 0.5em;\n}\n@media (min-width: 500px) {\n  .flex-table .row-item {\n    border: 1px solid #ffffff;\n    padding: 0.5em;\n  }\n}\n.sticker {\n  color: #E20074;\n  background: url('island.jpg') no-repeat 1% 68%;\n  width: 412px;\n  padding: 1em;\n  line-height: 57px;\n  font-size: 50px;\n  text-overflow: initial;\n  text-align: center;\n  vertical-align: middle;\n}\n.flex-table .row-item.small {\n  width: 10%;\n}\n@media (max-width: 800px) and (min-width: 300px) {\n  .flex-table .row-item.small {\n    width: 45%;\n  }\n}\n@media (max-width: 299px) {\n  .flex-table .row-item.small {\n    display: none;\n  }\n}\n.flex-table .row-item.fixed {\n  width: 512px;\n}\n@media (max-width: 800px) and (min-width: 300px) {\n  .flex-table .row-item.fixed {\n    width: 45%;\n  }\n}\n/*  background: url(../../img/island.jpg)no-repeat 4% 11%;*/\n/*flex-tables*/\n/*colours*/\n.purple {\n  background-color: rgba(120, 114, 205, 0.88);\n  color: #DDDBF7;\n}\n.cyan {\n  background-color: rgba(101, 162, 188, 0.99);\n  color: #AFE5FD;\n}\n.gold {\n  background-color: rgba(197, 174, 0, 0.65);\n  color: #FFF49E;\n}\n.silver {\n  background-color: rgba(247, 247, 247, 0.85);\n  color: #B2B2C1;\n}\n.ruby {\n  background-color: rgba(177, 65, 65, 0.85);\n  color: #FD9090;\n}\n/*colours*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdGlja2Vycy9zdGlja2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQkFBc0I7QUFDdEI7RUFDRSwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLDBDQUEwQztBQUM1QztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsc0NBQXNDO0VBQ3RDLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLFNBQVM7QUFDWDtBQUVBLHNCQUFzQjtBQUN0QixXQUFXO0FBQ1g7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMscUNBQTZCO0VBQTdCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0FBQ25CO0FBRUEsY0FBYztBQUNkO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQWlCO0VBQWpCLDZCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQXFCO0lBQXJCLDZCQUFxQjtZQUFyQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjtBQUNBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQWM7RUFBZCw2QkFBYztVQUFkLGNBQWM7RUFDZCxtQkFBWTtVQUFaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNBO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsY0FBYztFQUNoQjtBQUNGO0FBRUE7RUFDRSxjQUFjO0VBQ2QsOENBQXNEO0VBQ3RELFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7QUFFQSwyREFBMkQ7QUFDM0QsY0FBYztBQUNkLFVBQVU7QUFDVjtFQUNFLDJDQUEyQztFQUMzQyxjQUFjO0FBQ2hCO0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsY0FBYztBQUNoQjtBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGNBQWM7QUFDaEI7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxjQUFjO0FBQ2hCO0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsY0FBYztBQUNoQjtBQUVBLFVBQVUiLCJmaWxlIjoiYXBwL3N0aWNrZXJzL3N0aWNrZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypjb250ZW50IGRlc2NyaXB0aW9uKi9cbi5jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjMpO1xuICBwYWRkaW5nOiAxZW07XG4gIGJveC1zaGFkb3c6IGluc2V0IDFwdCAtMXB0IDFwdCAwcHQgI0M1QjhDNTtcbn1cblxuLnAtc2VjdGlvbiB7XG4gIGNsZWFyOiBib3RoO1xuICBwYWRkaW5nOiAyZW07XG59XG5cbi5saW5lLXNlY3Rpb24ge1xuICBib3gtc2hhZG93OiAwIDAgMXB0ICNENkM5RDY7XG4gIG1hcmdpbi1ib3R0b206IDIwcHQ7XG4gIGxpbmUtaGVpZ2h0OiAxNnB0O1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBsb2FkLWNvbnRhaW5lcjtcbiAgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbiAgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXG4gIGFuaW1hdGlvbi1uYW1lOiBsb2FkLWNvbnRhaW5lcjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbn1cbi5saW5lLXNlY3Rpb24gYSwgLmxpbmUtc2VjdGlvbiBhOnZpc2l0ZWQge1xuICBjb2xvcjogIzkwOEQ5MDtcbn1cblxuLmZvcm0tZmllbGQtaW5wdXQge1xuICBwYWRkaW5nOiAycHQ7XG4gIG1hcmdpbjogNXB0IDEwcHQ7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggMCAjOTY3YTk2O1xuICBib3JkZXI6IDA7XG59XG5cbi8qY29udGVudC1kZXNjcmlwdGlvbiovXG4vKnNlbGVjdG9yKi9cbi5zZWxlY3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnNlbGVjdCB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggI0I1QURCQjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLnNlbGVjdCB1bCBsaSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNlbGVjdCB1bCBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5zZWxlY3QgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjNjQ2NDY0O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICM2NDY0NjQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgbGluZWFyO1xufVxuLnNlbGVjdCB1bCBsaS5jaGVja2VkIGEge1xuICBib3gtc2hhZG93OiAwIDAgM3B4ICM0MTUyNEM7XG4gIGNvbG9yOiAjRUJFQ0VEO1xuICB0ZXh0LXNoYWRvdzogMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG4uc2VsZWN0IHVsIGxpLmNoZWNrZWQgYTpob3ZlciB7XG4gIGNvbG9yOiAjRUJFQ0VEO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi8qYnV0dG9ucyovXG4uYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAwIDAgM3B4ICM5NjdhOTY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMXB0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qZmxleC10YWJsZXMqL1xuLmZsZXgtdGFibGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbjogMC41cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4uZmxleC10YWJsZS1oZWFkZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmZsZXgtdGFibGUtaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIH1cbn1cbi5mbGV4LXRhYmxlIC5yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZsZXgtdGFibGUgLnJvdzpudGgtb2YtdHlwZShldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbi5mbGV4LXRhYmxlIC5yb3c6bnRoLW9mLXR5cGUob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xuICAuZmxleC10YWJsZSAucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgfVxuXG4gIC5mbGV4LXRhYmxlIC5yb3c6bnRoLW9mLXR5cGUoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAuZmxleC10YWJsZSAucm93Om50aC1vZi10eXBlKG9kZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIH1cbn1cbi5mbGV4LXRhYmxlIC5yb3ctaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtYmFzaXM6IGF1dG87XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5mbGV4LXRhYmxlIC5yb3ctaXRlbSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgfVxufVxuXG4uc3RpY2tlciB7XG4gIGNvbG9yOiAjRTIwMDc0O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vaW1nL2lzbGFuZC5qcGcpIG5vLXJlcGVhdCAxJSA2OCU7XG4gIHdpZHRoOiA0MTJweDtcbiAgcGFkZGluZzogMWVtO1xuICBsaW5lLWhlaWdodDogNTdweDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICB0ZXh0LW92ZXJmbG93OiBpbml0aWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5mbGV4LXRhYmxlIC5yb3ctaXRlbS5zbWFsbCB7XG4gIHdpZHRoOiAxMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIGFuZCAobWluLXdpZHRoOiAzMDBweCkge1xuICAuZmxleC10YWJsZSAucm93LWl0ZW0uc21hbGwge1xuICAgIHdpZHRoOiA0NSU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyOTlweCkge1xuICAuZmxleC10YWJsZSAucm93LWl0ZW0uc21hbGwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmZsZXgtdGFibGUgLnJvdy1pdGVtLmZpeGVkIHtcbiAgd2lkdGg6IDUxMnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSBhbmQgKG1pbi13aWR0aDogMzAwcHgpIHtcbiAgLmZsZXgtdGFibGUgLnJvdy1pdGVtLmZpeGVkIHtcbiAgICB3aWR0aDogNDUlO1xuICB9XG59XG5cbi8qICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vaW1nL2lzbGFuZC5qcGcpbm8tcmVwZWF0IDQlIDExJTsqL1xuLypmbGV4LXRhYmxlcyovXG4vKmNvbG91cnMqL1xuLnB1cnBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIwLCAxMTQsIDIwNSwgMC44OCk7XG4gIGNvbG9yOiAjREREQkY3O1xufVxuXG4uY3lhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAxLCAxNjIsIDE4OCwgMC45OSk7XG4gIGNvbG9yOiAjQUZFNUZEO1xufVxuXG4uZ29sZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk3LCAxNzQsIDAsIDAuNjUpO1xuICBjb2xvcjogI0ZGRjQ5RTtcbn1cblxuLnNpbHZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDcsIDI0NywgMC44NSk7XG4gIGNvbG9yOiAjQjJCMkMxO1xufVxuXG4ucnVieSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc3LCA2NSwgNjUsIDAuODUpO1xuICBjb2xvcjogI0ZEOTA5MDtcbn1cblxuLypjb2xvdXJzKi8iXX0= */"

/***/ }),

/***/ "./src/app/stickers/stickers.component.ts":
/*!************************************************!*\
  !*** ./src/app/stickers/stickers.component.ts ***!
  \************************************************/
/*! exports provided: StickersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickersComponent", function() { return StickersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sticker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sticker.service */ "./src/app/sticker.service.ts");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-to-image */ "./node_modules/dom-to-image/src/dom-to-image.js");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_3__);




var StickersComponent = /** @class */ (function () {
    function StickersComponent(stickerService) {
        this.stickerService = stickerService;
    }
    StickersComponent.prototype.ngOnInit = function () {
        this.getStickers();
    };
    StickersComponent.prototype.getStickers = function () {
        var _this = this;
        this.stickerService.getStickers()
            .subscribe(function (stickers) { return _this.stickers = stickers; });
    };
    StickersComponent.prototype.add = function (name, content) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.stickerService.addSticker({ name: name, content: content })
            .subscribe(function (sticker) {
            _this.stickers.push(sticker);
        });
    };
    StickersComponent.prototype.delete = function (sticker) {
        this.stickers = this.stickers.filter(function (s) { return s !== sticker; });
        this.stickerService.deleteSticker(sticker).subscribe();
    };
    StickersComponent.prototype.convert = function (id) {
        var stringId = id.toString(); // Here we go...
        var node = document.getElementById(stringId); // look the other way, please :)
        dom_to_image__WEBPACK_IMPORTED_MODULE_3___default.a.toPng(node).then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            img.width = 512;
            window.open(dataUrl.replace('image/png', 'image/octet-stream'), '_blank');
        }).catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
    };
    StickersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stickers',
            template: __webpack_require__(/*! ./stickers.component.html */ "./src/app/stickers/stickers.component.html"),
            styles: [__webpack_require__(/*! ./stickers.component.scss */ "./src/app/stickers/stickers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sticker_service__WEBPACK_IMPORTED_MODULE_2__["StickerService"]])
    ], StickersComponent);
    return StickersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\SkyeStickers\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map