webpackJsonp([9],{

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageSettingsModule", function() { return LanguageSettingsModule; });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_settings__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LanguageSettingsModule = (function () {
    function LanguageSettingsModule() {
    }
    LanguageSettingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__language_settings__["a" /* LanguageSettings */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__language_settings__["a" /* LanguageSettings */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateModule */].forChild({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__language_settings__["a" /* LanguageSettings */]
            ]
        })
    ], LanguageSettingsModule);
    return LanguageSettingsModule;
}());

// required for ng translate, tells it to look in assets folder for trans files
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'assets/i18n/', '.json');
}
//# sourceMappingURL=language-settings.module.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_language_language_service__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LanguageSettings = (function () {
    function LanguageSettings(storage, viewCtrl, toastCtrl, languageservice, translate) {
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.languageservice = languageservice;
        this.translate = translate;
    }
    LanguageSettings.prototype.ionViewWillEnter = function () {
        this.getLanguages();
    };
    // first get existing checked segments
    LanguageSettings.prototype.getLanguages = function () {
        var _this = this;
        this.languages = null;
        // Get languages, these are sent from WP site through postMessage in main component
        this.storage.get('available_languages').then(function (langs) {
            if (langs) {
                _this.languageservice.setAvailable(langs);
                // this.languages = langs
                _this.checkCurrent(langs);
            }
        });
    };
    LanguageSettings.prototype.checkCurrent = function (langs) {
        var _this = this;
        this.storage.get('app_language').then(function (lang) {
            if (lang) {
                // we have an existing language, check it and return languages
                for (var i = langs.length - 1; i >= 0; i--) {
                    // if language codes match, save as checked
                    if (langs[i].code === lang)
                        langs[i].checked = true;
                }
            }
            _this.languages = langs;
        });
    };
    LanguageSettings.prototype.toggleLanguage = function (event, language) {
        var _this = this;
        this.translate.use(language.code);
        this.storage.set('app_language', language.code);
        this.languageservice.setCurrentLanguage(language.code);
        this.translate.get('Language changed').subscribe(function (text) {
            _this.presentToast(text);
        });
    };
    LanguageSettings.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'bottom'
        });
        toast.present();
    };
    LanguageSettings.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LanguageSettings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/matt/projects/appp/ap3/src/pages/language-settings/language-settings.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{ \'Language Settings\' | translate }}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-list radio-group [(ngModel)]="language">\n<ion-item *ngFor="let language of languages">\n  <ion-label>{{language.name}}</ion-label>\n  <ion-radio (ionSelect)="toggleLanguage($event, language)" value="{{language.code}}" [checked]="language.checked"></ion-radio>\n</ion-item>\n<ion-item *ngIf="!languages">{{ \'No languages available\' | translate }}</ion-item>\n</ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/matt/projects/appp/ap3/src/pages/language-settings/language-settings.html"*/,
            selector: 'language-settings'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_language_language_service__["a" /* LanguageService */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["d" /* TranslateService */]])
    ], LanguageSettings);
    return LanguageSettings;
}());

//# sourceMappingURL=language-settings.js.map

/***/ })

});
//# sourceMappingURL=9.js.map