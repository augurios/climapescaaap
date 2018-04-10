webpackJsonp([4],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs__ = __webpack_require__(403);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsPageModule = (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */]
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsPage = (function () {
    function TabsPage(navParams) {
        this.navParams = navParams;
        this.tabs = [];
    }
    TabsPage.prototype.ngOnInit = function () {
        this.mySelectedIndex = this.navParams.data.tabIndex || 0;
        // root=null if opening in the IAB
        for (var _i = 0, _a = this.navParams.data; _i < _a.length; _i++) {
            var tab = _a[_i];
            var target = this.maybeOpenIAB(tab);
            if (target) {
                tab.root = null;
                tab.target = target;
            }
            this.tabs.push(tab);
        }
    };
    TabsPage.prototype.onIonSelect = function ($event, tab) {
        if (tab.url && tab.target) {
            this.openIab(tab.url, tab.target);
        }
    };
    TabsPage.prototype.maybeOpenIAB = function (tab) {
        if (tab.extra_classes &&
            (tab.extra_classes.indexOf('system') >= 0 || tab.extra_classes.indexOf('external') >= 0) &&
            tab.url &&
            tab.url.indexOf('http') === 0) {
            return this.getIabTarget(tab.extra_classes);
        }
        return false;
    };
    TabsPage.prototype.getIabTarget = function (extra_classes) {
        if (extra_classes.indexOf('system') >= 0) {
            return '_system';
        }
        else if (extra_classes.indexOf('external') >= 0) {
            return '_blank';
        }
        return false;
    };
    TabsPage.prototype.openIab = function (link, target, options) {
        if (options === void 0) { options = null; }
        window.open(link, target, options);
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/matt/projects/appp/ap3/src/pages/tabs/tabs.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" #myTabs>\n  <ion-tab *ngFor="let tab of tabs" [root]="tab.root" tabTitle="{{tab.title | translate}}" [tabIcon]="tab.icon" [rootParams]="tab" [ngClass]="tab.extra_classes" [show]="tab.show" (ionSelect)="onIonSelect($event, tab);"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/matt/projects/appp/ap3/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=4.js.map