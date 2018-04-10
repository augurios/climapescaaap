webpackJsonp([1],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPageModule", function() { return CustomPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_dynamic_component_index__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_dynamic_component_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_dynamic_component_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__custom_page__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CustomPageModule = (function () {
    function CustomPageModule() {
    }
    CustomPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__custom_page__["a" /* CustomPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__custom_page__["a" /* CustomPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3_angular2_dynamic_component_index__["DynamicComponentModule"]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__custom_page__["a" /* CustomPage */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__custom_page__["a" /* CustomPage */]
            ]
        })
    ], CustomPageModule);
    return CustomPageModule;
}());

//# sourceMappingURL=custom-page.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(39);
var http_1 = __webpack_require__(13);
var index_1 = __webpack_require__(355);
var Utils_1 = __webpack_require__(358);
var DYNAMIC_SELECTOR = 'DynamicComponent';
var DynamicComponentMetadata = (function () {
    function DynamicComponentMetadata(selector, template) {
        if (selector === void 0) { selector = DYNAMIC_SELECTOR; }
        if (template === void 0) { template = ''; }
        this.selector = selector;
        this.template = template;
    }
    return DynamicComponentMetadata;
}());
exports.DynamicComponentMetadata = DynamicComponentMetadata;
var DynamicComponent = (function () {
    function DynamicComponent(element, viewContainer, compiler, http) {
        this.element = element;
        this.viewContainer = viewContainer;
        this.compiler = compiler;
        this.http = http;
        this.destroyWrapper = false;
    }
    /**
     * @override
     */
    DynamicComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.getComponentTypePromise().then(function (module) {
            _this.compiler.compileModuleAndAllComponentsAsync(module)
                .then(function (moduleWithComponentFactories) {
                if (_this.componentInstance) {
                    _this.componentInstance.destroy();
                }
                _this.componentInstance = _this.viewContainer.createComponent(
                // dynamicComponentClass factory is presented here
                moduleWithComponentFactories.componentFactories.find(function (componentFactory) {
                    return componentFactory.selector === DYNAMIC_SELECTOR
                        || componentFactory.componentType === _this.componentType;
                }));
                _this.applyPropertiesToDynamicComponent(_this.componentInstance.instance);
                // Remove wrapper after render the component
                if (_this.destroyWrapper) {
                    var el = _this.element.nativeElement;
                    if (Utils_1.Utils.isPresent(el.parentNode)) {
                        el.parentNode.removeChild(el);
                    }
                }
            });
        });
    };
    DynamicComponent.prototype.getComponentTypePromise = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (Utils_1.Utils.isPresent(_this.componentTemplate)) {
                resolve(_this.makeComponentModule(_this.componentTemplate));
            }
            else if (Utils_1.Utils.isPresent(_this.componentTemplateUrl)) {
                _this.loadRemoteTemplate(_this.componentTemplateUrl, resolve);
            }
            else {
                resolve(_this.makeComponentModule(null, _this.componentType));
            }
        });
    };
    DynamicComponent.prototype.loadRemoteTemplate = function (url, resolve) {
        var _this = this;
        var requestArgs = { withCredentials: true };
        if (Utils_1.Utils.isPresent(this.componentRemoteTemplateFactory)) {
            requestArgs = this.componentRemoteTemplateFactory.buildRequestOptions();
        }
        this.http.get(url, requestArgs)
            .subscribe(function (response) {
            if (response.status === 301 || response.status === 302) {
                var chainedUrl = response.headers.get('Location');
                console.info('[$DynamicComponent][loadRemoteTemplate] The URL into the chain is:', chainedUrl);
                if (Utils_1.Utils.isPresent(chainedUrl)) {
                    _this.loadRemoteTemplate(chainedUrl, resolve);
                }
                else {
                    console.warn('[$DynamicComponent][loadRemoteTemplate] The URL into the chain is empty. The process of redirect has stopped.');
                }
            }
            else {
                resolve(_this.makeComponentModule(Utils_1.Utils.isPresent(_this.componentRemoteTemplateFactory)
                    ? _this.componentRemoteTemplateFactory.parseResponse(response)
                    : response.text()));
            }
        }, function (response) {
            console.error('[$DynamicComponent][loadRemoteTemplate] Error response:', response);
            resolve(_this.makeComponentModule(''));
        });
    };
    DynamicComponent.prototype.makeComponentModule = function (template, componentType) {
        componentType = this.makeComponent(template, componentType);
        var componentModules = this.componentModules;
        var dynamicComponentModule = (function () {
            function dynamicComponentModule() {
            }
            dynamicComponentModule.decorators = [
                { type: core_1.NgModule, args: [{
                            declarations: [componentType],
                            imports: [common_1.CommonModule].concat(componentModules || [])
                        },] },
            ];
            /** @nocollapse */
            dynamicComponentModule.ctorParameters = [];
            return dynamicComponentModule;
        }());
        return dynamicComponentModule;
    };
    DynamicComponent.prototype.makeComponent = function (template, componentType) {
        var annotationsArray, componentDecorator;
        if (Utils_1.Utils.isPresent(componentType)) {
            annotationsArray = index_1.MetadataHelper.findAnnotationsMetaData(componentType, core_1.Component);
            if (annotationsArray.length) {
                componentDecorator = annotationsArray[0];
                Reflect.set(componentDecorator, 'selector', DYNAMIC_SELECTOR);
            }
        }
        var dynamicComponentClass = (function () {
            function dynamicComponentClass() {
            }
            dynamicComponentClass.decorators = [
                { type: core_1.Component, args: [componentDecorator || { selector: DYNAMIC_SELECTOR, template: template },] },
            ];
            /** @nocollapse */
            dynamicComponentClass.ctorParameters = [];
            return dynamicComponentClass;
        }());
        return dynamicComponentClass;
    };
    DynamicComponent.prototype.applyPropertiesToDynamicComponent = function (instance) {
        var _this = this;
        var metadataHolder = index_1.MetadataHelper.findPropertyMetadata(this, core_1.Input);
        for (var _i = 0, _a = Object.keys(this); _i < _a.length; _i++) {
            var property = _a[_i];
            if (Reflect.has(metadataHolder, property)) {
                if (Reflect.has(instance, property)) {
                    console.warn('[$DynamicComponent][applyPropertiesToDynamicComponent] The property', property, 'will be overwritten for the component', instance);
                }
                Reflect.set(instance, property, Reflect.get(this, property));
            }
        }
        if (Utils_1.Utils.isPresent(this.componentInputData)) {
            var _loop_1 = function(property) {
                if (Reflect.has(instance, property)) {
                    console.warn('[$DynamicComponent][applyPropertiesToDynamicComponent] The property', property, 'will be overwritten for the component', instance);
                }
                var propValue = Reflect.get(this_1.componentInputData, property);
                var attributes = {};
                if (!Utils_1.Utils.isFunction(propValue)) {
                    attributes.set = function (v) { return Reflect.set(_this.componentInputData, property, v); };
                }
                attributes.get = function () { return Reflect.get(_this.componentInputData, property); };
                Reflect.defineProperty(instance, property, attributes);
            };
            var this_1 = this;
            for (var property in this.componentInputData) {
                _loop_1(property);
            }
        }
    };
    DynamicComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: DYNAMIC_SELECTOR,
                    template: ''
                },] },
    ];
    /** @nocollapse */
    DynamicComponent.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: core_1.ViewContainerRef, },
        { type: core_1.Compiler, },
        { type: http_1.Http, },
    ];
    DynamicComponent.propDecorators = {
        'componentType': [{ type: core_1.Input },],
        'componentTemplate': [{ type: core_1.Input },],
        'componentInputData': [{ type: core_1.Input },],
        'componentTemplateUrl': [{ type: core_1.Input },],
        'componentRemoteTemplateFactory': [{ type: core_1.Input },],
        'componentModules': [{ type: core_1.Input },],
    };
    return DynamicComponent;
}());
exports.DynamicComponent = DynamicComponent;
//# sourceMappingURL=DynamicComponent.js.map

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.PROP_METADATA = 'propMetadata';
exports.ANNOTATIONS_METADATA = 'annotations';
function PropertyAnnotationFactory(annotationMetadata) {
    var Decorator = function (config) {
        return function (target, propertyKey) {
            var meta = Reflect.getOwnMetadata(exports.PROP_METADATA, target.constructor) || {};
            meta[propertyKey] = meta[propertyKey] || [];
            meta[propertyKey].push(Reflect.construct(annotationMetadata, [config]));
            Reflect.defineMetadata(exports.PROP_METADATA, meta, target.constructor);
        };
    };
    var Annotation = Decorator;
    Annotation.annotationMetadata = annotationMetadata;
    return Annotation;
}
exports.PropertyAnnotationFactory = PropertyAnnotationFactory;
//# sourceMappingURL=MetadataFactory.js.map

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DynamicComponent_1 = __webpack_require__(350);
exports.DynamicComponent = DynamicComponent_1.DynamicComponent;
exports.DynamicComponentMetadata = DynamicComponent_1.DynamicComponentMetadata;
var DynamicComponentModule_1 = __webpack_require__(359);
exports.DynamicComponentModule = DynamicComponentModule_1.DynamicComponentModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var MetadataHelper_1 = __webpack_require__(356);
exports.MetadataHelper = MetadataHelper_1.MetadataHelper;
var MetadataFactory_1 = __webpack_require__(351);
exports.PropertyAnnotationFactory = MetadataFactory_1.PropertyAnnotationFactory;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Utils_1 = __webpack_require__(357);
var MetadataFactory_1 = __webpack_require__(351);
var MetadataHelper = (function () {
    function MetadataHelper() {
    }
    MetadataHelper.findAnnotationsMetaData = function (target, annotation) {
        return MetadataHelper.findMetadata(target, annotation, MetadataFactory_1.ANNOTATIONS_METADATA);
    };
    MetadataHelper.findPropertyMetadata = function (target, annotation) {
        return MetadataHelper.findMetadata(target, annotation, MetadataFactory_1.PROP_METADATA);
    };
    MetadataHelper.findMetadata = function (target, annotation, metadataName) {
        var annotationsSearch = target.constructor === Function;
        var metadataDefinition = Reflect.getMetadata(metadataName, annotationsSearch ? target : target.constructor);
        if (annotationsSearch) {
            return (metadataDefinition || []);
        }
        else {
            var annotationMetadataInstance_1;
            var annotationMetadataHolder_1 = {};
            if (Utils_1.Utils.isPresent(metadataDefinition)) {
                Reflect.ownKeys(metadataDefinition).forEach(function (propertyKey) {
                    var predicate = function (annotationInstance) {
                        var annotationMetadata = annotation.annotationMetadata;
                        return annotationInstance instanceof annotation // Angular2 annotations support
                            || (Utils_1.Utils.isPresent(annotationMetadata) && annotationInstance instanceof annotationMetadata);
                    };
                    if (annotationMetadataInstance_1 = metadataDefinition[propertyKey].find(predicate)) {
                        Reflect.set(annotationMetadataHolder_1, propertyKey, annotationMetadataInstance_1);
                    }
                });
            }
            return annotationMetadataHolder_1;
        }
    };
    return MetadataHelper;
}());
exports.MetadataHelper = MetadataHelper;
//# sourceMappingURL=MetadataHelper.js.map

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Utils = (function () {
    function Utils() {
    }
    Utils.isPresent = function (obj) {
        return obj !== undefined && obj !== null;
    };
    Utils.isUndefined = function (obj) {
        return obj === undefined;
    };
    Utils.isString = function (obj) {
        return typeof obj === 'string';
    };
    Utils.isFunction = function (obj) {
        return typeof obj === 'function';
    };
    Utils.isArray = function (obj) {
        return Array.isArray(obj);
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Utils = (function () {
    function Utils() {
    }
    Utils.isPresent = function (obj) {
        return obj !== undefined && obj !== null;
    };
    Utils.isUndefined = function (obj) {
        return obj === undefined;
    };
    Utils.isString = function (obj) {
        return typeof obj === 'string';
    };
    Utils.isFunction = function (obj) {
        return typeof obj === 'function';
    };
    Utils.isArray = function (obj) {
        return Array.isArray(obj);
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var DynamicComponent_1 = __webpack_require__(350);
var DynamicComponentModule = (function () {
    function DynamicComponentModule() {
    }
    DynamicComponentModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        DynamicComponent_1.DynamicComponent
                    ],
                    exports: [
                        DynamicComponent_1.DynamicComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    DynamicComponentModule.ctorParameters = [];
    return DynamicComponentModule;
}());
exports.DynamicComponentModule = DynamicComponentModule;
//# sourceMappingURL=DynamicComponentModule.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_header_logo_header_logo__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_inapppurchase_inapppurchase__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_logins_login_service__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
 * Uses dynamic component creation, see https://github.com/apoterenko/angular2-dynamic-component
 */
var DynamicContext = (function () {
    function DynamicContext() {
    }
    DynamicContext.prototype.onChange = function () {
        //console.log(this.value)
    };
    return DynamicContext;
}());
/** Development mode only -- END */
var CustomPage = (function () {
    function CustomPage(navParams, nav, modalCtrl, renderer, elementRef, viewCtrl, platform, translate, storage, events, toastCtrl, headerLogoService, loginservice, iap, loadingCtrl) {
        var _this = this;
        this.navParams = navParams;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.translate = translate;
        this.storage = storage;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.headerLogoService = headerLogoService;
        this.loginservice = loginservice;
        this.iap = iap;
        this.loadingCtrl = loadingCtrl;
        this.subscriptions = [];
        this.rtlBack = false;
        this.extraModules = [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */]];
        this.show_segments = false;
        this.login_modal_open = false;
        this.show_header_logo = false;
        /** Development mode only -- START */
        this.inputData = {
            // anything that the template needs access to goes here
            user: this.loginservice.user,
            pages: this.getPages(),
            segments: this.getSegments(),
            platform: this.platform,
            customClasses: this.customClasses,
            pushPage: function (page) {
                _this.pushPage(page);
            },
            openPage: function (page) {
                _this.openPage(page);
            },
            back: function () {
                _this.back();
            },
            mediaModal: function (src, img) {
                if (img === void 0) { img = null; }
                _this.mediaModal(src, img);
            },
            updateData: function () {
                _this.updateData();
            },
            changeRTL: function (event, rtl) {
                _this.changeRTL(event, rtl);
            },
            showSegments: function () {
                _this.showSegments();
            },
            showLanguages: function () {
                _this.showLanguages();
            },
            loginModal: function () {
                _this.loginModal();
            },
            buyProduct: function (id) {
                _this.iap.buy(id);
            },
            subscribeNoAds: function (id) {
                _this.iap.subscribeNoAds(id);
            },
            restoreNoAds: function (id) {
                _this.iap.restoreNoAds(id);
            }
        };
    }
    /** Development mode only -- END */
    CustomPage.prototype.ngOnInit = function () {
        var _this = this;
        // Initial user settings
        this.user = this.loginservice.user;
        this.inputData.user = this.loginservice.user;
        // Updates to user settings
        this.subscriptions.push(this.loginservice.loginStatus().subscribe(function (user) {
            _this.user = user;
            /** Development mode only -- START */
            _this.inputData.user = user;
            /** Development mode only -- END */
        }));
        this.pagetitle = this.navParams.data.title;
        if (this.navParams.data.is_home == true) {
            this.doLogo();
        }
        // kill vids on android
        if (this.platform.is('android')) {
            this.killVideos();
        }
        this.pages = this.getPages(); // not just pages: this is the whole myappp data
        this.menus = {
            side: this.getSideMenu(),
            tabs: this.getTabs()
        };
        this.segments = this.getSegments();
        var slug = this.navParams.data.slug;
        this.slug = slug;
        /** Development mode only -- START */
        // this.templateUrl = 'custom.html'
        this.templateUrl = 'build/' + slug + '.html?' + this.random(1, 999);
        /** Development mode only -- END */
        this.customClasses = 'custom-page page-' + this.slug;
        this.listener();
    };
    CustomPage.prototype.ionViewWillEnter = function () {
        if (this.platform.isRTL && this.viewCtrl.enableBack()) {
            this.viewCtrl.showBackButton(false);
            this.rtlBack = true;
        }
    };
    CustomPage.prototype.listener = function () {
        // Listen for link clicks, open in in app browser
        this.listenFunc = this.renderer.listen(this.elementRef.nativeElement, 'click', function (event) {
            if (event.target.href && event.target.href.indexOf('http') >= 0) {
                event.preventDefault();
                if (event.target.target && event.target.target) {
                    window.open(event.target.href, event.target.target);
                }
                else {
                    window.open(event.target.href, '_blank');
                }
            }
        });
    };
    // changes the back button transition direction if app is RTL
    CustomPage.prototype.backRtlTransition = function () {
        var obj = {};
        if (this.platform.is('ios'))
            obj = { direction: 'forward' };
        this.nav.pop(obj);
    };
    CustomPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'bottom'
        });
        toast.present();
    };
    // stop videos from playing when app is exited, required by Google
    CustomPage.prototype.killVideos = function () {
        var _this = this;
        this.platform.pause.subscribe(function () {
            var frames = _this.elementRef.nativeElement.getElementsByTagName('iframe');
            var Vidsrc;
            var _loop_1 = function (i) {
                if (/youtube|wistia|vimeo/.test(frames[i].src)) {
                    Vidsrc = frames[i].src;
                    frames[i].src = '';
                    setTimeout(function () {
                        frames[i].src = Vidsrc;
                    }, 500);
                }
            };
            for (var i in frames) {
                _loop_1(i);
            }
        });
    };
    CustomPage.prototype.random = function (min, max) {
        if (min == null && max == null) {
            max = 1;
        }
        min = +min || 0;
        if (max == null) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * ((+max || 0) - min + 1));
    };
    CustomPage.prototype.doLogo = function () {
        var _this = this;
        // check if logo file exists. If so, show it
        this.headerLogoService.checkLogo().then(function (data) {
            _this.show_header_logo = true;
            _this.header_logo_url = data;
        }).catch(function (e) {
            // no logo, do nothing
            //console.log(e)
        });
    };
    /**
     * Get side menu index by page slug
     */
    CustomPage.prototype.getMenuIndexBySlug = function (slug) {
        return this.getIndexBySlug(slug, this.menus.side);
    };
    /**
     * Get tab menu index by page slug
     * @param slug page slug
     */
    CustomPage.prototype.getTabIndexBySlug = function (slug) {
        return this.getIndexBySlug(slug, this.menus.tabs);
    };
    /**
     * Side or tab menus
     * @param slug page slug
     * @param pages menu or tab pages
     */
    CustomPage.prototype.getIndexBySlug = function (slug, pages) {
        var menu_index;
        var count = 0;
        if (!pages)
            return menu_index;
        for (var _i = 0, pages_1 = pages; _i < pages_1.length; _i++) {
            var page = pages_1[_i];
            if (page.slug && page.slug == slug) {
                menu_index = count;
            }
            count++;
        }
        ;
        if (!menu_index && menu_index !== 0)
            console.log(pages); // you can find the slugs here
        return menu_index;
    };
    /**
     * Search both menus for a page
     *
     * @param page_slug
     */
    CustomPage.prototype.getPage = function (page_slug) {
        var _this = this;
        var menu_index;
        var page;
        menu_index = this.getMenuIndexBySlug(page_slug);
        if (menu_index || menu_index === 0) {
            return this.menus.side[menu_index];
        }
        menu_index = this.getTabIndexBySlug(page_slug);
        if (menu_index || menu_index === 0) {
            return this.menus.tabs[menu_index];
        }
        // otherwise . . .
        this.translate.get('Page not found').subscribe(function (text) {
            _this.presentToast(text);
        });
        return false;
    };
    /**
     * Adds a view on top of root view (w/ backbutton)
     *
     * @param page
     */
    CustomPage.prototype.pushPage = function (page) {
        if (typeof page === 'string') {
            page = this.getPage(page);
            if (page === false)
                return;
        }
        if (page && page.extra_classes && this.yieldLogin(page.extra_classes))
            return;
        if (page.target === '_blank' && page.extra_classes.indexOf('system') >= 0) {
            window.open(page.url, '_system', null);
            return;
        }
        else if (page.target === '_blank') {
            window.open(page.url, page.target, null);
            return;
        }
        var opt = {};
        if (this.platform.isRTL && this.platform.is('ios'))
            opt = { direction: 'back' };
        if (page.type === 'apppages' && page.page_type === 'list') {
            this.nav.push('PostList', page, opt);
        }
        else if (page.type === 'apppages' && page.page_type === 'media-list') {
            this.nav.push('MediaList', page, opt);
        }
        else if (page.type === 'apppages') {
            this.nav.push(this.getPageModuleName(page.page_id), page, opt);
        }
        else if (page.url) {
            this.nav.push('Iframe', page, opt);
        }
        else {
            this.nav.push(page.component, page.navparams, opt);
        }
    };
    /**
     * Set a root view
     *
     * @param page
     */
    CustomPage.prototype.openPage = function (page) {
        if (typeof page === 'string') {
            page = this.getPage(page);
            if (page === false)
                return;
        }
        if (page && page.extra_classes && this.yieldLogin(page.extra_classes))
            return;
        if (page.extra_classes.indexOf('desktoptheme') >= 0) {
            var url = new URL(page.url);
            url.searchParams.append('appp_bypass', 'true');
            var iab = window.open(url.toString(), '_blank');
            return;
        }
        else if (page.target === '_blank' && page.extra_classes.indexOf('system') >= 0) {
            window.open(page.url, '_system', null);
            return;
        }
        else if (page.target === '_blank') {
            window.open(page.url, page.target, null);
            return;
        }
        if (page.type === 'apppages' && page.page_type === 'list') {
            this.nav.setRoot('PostList', page);
        }
        else if (page.type === 'apppages' && page.page_type === 'media-list') {
            this.nav.setRoot('MediaList', page);
        }
        else if (page.type === 'apppages') {
            this.nav.setRoot(this.getPageModuleName(page.page_id), page);
        }
        else if (page.url) {
            this.nav.setRoot('Iframe', page);
        }
        else {
            this.nav.setRoot(page.component, page.navparams);
        }
    };
    CustomPage.prototype.back = function () {
        this.nav.pop();
    };
    CustomPage.prototype.mediaModal = function (src, img) {
        if (img === void 0) { img = null; }
        var modal = this.modalCtrl.create('MediaPlayer', { source: src, image: img });
        modal.present();
    };
    CustomPage.prototype.updateData = function () {
        window.localStorage.removeItem('myappp');
        this.storage.remove('segments');
        this.events.publish('data:update', true);
    };
    CustomPage.prototype.changeRTL = function (event, rtl) {
        if (rtl) {
            this.platform.setDir('rtl', true);
        }
        else {
            this.platform.setDir('ltr', true);
        }
        this.storage.set('is_rtl', rtl);
    };
    CustomPage.prototype.showSegments = function () {
        var modal = this.modalCtrl.create('PushSettings');
        modal.present();
    };
    CustomPage.prototype.showLanguages = function () {
        var modal = this.modalCtrl.create('LanguageSettings');
        modal.present();
    };
    CustomPage.prototype.loginModal = function () {
        var _this = this;
        if (!this.login_modal) {
            this.login_modal = this.modalCtrl.create('LoginModal');
        }
        this.login_modal.onDidDismiss(function (data) {
            _this.login_modal_open = false;
        });
        if (this.login_modal_open === false) {
            this.login_modal_open = true;
            this.login_modal.present();
        }
    };
    /**
   * Open the login modal if the menu item's extra_classes contains 'yieldlogin'
   * @param extra_classes
   */
    CustomPage.prototype.yieldLogin = function (extra_classes) {
        if (extra_classes && extra_classes.indexOf('yieldlogin') >= 0) {
            if (this.user) {
                return false;
            }
            else {
                this.loginModal();
                return true;
            }
        }
        return false;
    };
    CustomPage.prototype.getPages = function () {
        if (!this.pages) {
            this.pages = JSON.parse(window.localStorage.getItem('myappp'));
        }
        return this.pages;
    };
    CustomPage.prototype.getSegments = function () {
        if (!this.segments)
            this.segments = JSON.parse(window.localStorage.getItem('segments'));
        return this.segments;
    };
    CustomPage.prototype.getSideMenu = function () {
        var myappp = JSON.parse(window.localStorage.getItem('myappp'));
        return myappp.menus.items;
    };
    CustomPage.prototype.getTabs = function () {
        var myappp = JSON.parse(window.localStorage.getItem('myappp'));
        return myappp.tab_menu.items;
    };
    CustomPage.prototype.getPageModuleName = function (page_id) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])())
            return 'Page' + page_id;
        else
            return 'CustomPage';
    };
    CustomPage.prototype.buyProduct = function (id) {
        this.iap.buy(id);
    };
    CustomPage.prototype.subscribeNoAds = function (id) {
        var _this = this;
        this.showSpinner();
        this.iap.subscribeNoAds(id);
        // TODO: convert this to promise, get rid of timeout
        setTimeout(function () {
            _this.hideSpinner();
        }, 3000);
    };
    CustomPage.prototype.restoreNoAds = function (id) {
        var _this = this;
        this.showSpinner();
        this.iap.restoreNoAds(id).then(function (res) {
            console.log(res);
            _this.hideSpinner();
        });
    };
    CustomPage.prototype.showSpinner = function () {
        this.spinner = this.loadingCtrl.create();
        this.spinner.present();
    };
    CustomPage.prototype.hideSpinner = function () {
        this.spinner.dismiss();
    };
    CustomPage.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subscription) {
            subscription.unsubscribe();
        });
    };
    CustomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/matt/projects/appp/ap3/src/pages/custom-pages/custom-page.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-buttons start>\n			<button *ngIf="rtlBack" (click)="backRtlTransition()" ion-button class="custom-back-button">\n				<ion-icon name="arrow-back"></ion-icon>\n				{{\'Back\' | translate }}\n			</button>\n			<button ion-button menuToggle>\n				<ion-icon name="menu"></ion-icon>\n			</button>\n\n		</ion-buttons>\n\n		<img class="header-logo" *ngIf="show_header_logo" [src]="header_logo_url" />\n\n		<ion-title *ngIf="!show_header_logo">{{pagetitle | translate}}</ion-title>\n\n	</ion-navbar>\n</ion-header>\n\n<ion-content [ngClass]="customClasses">\n\n	<DynamicComponent *ngIf="templateUrl"\n    [componentTemplateUrl]="templateUrl" \n    [componentModules]="extraModules"\n		[componentInputData]="inputData"></DynamicComponent>\n\n	<div *ngIf="!templateUrl">Missing templateUrl</div>\n\n</ion-content>'/*ion-inline-end:"/Users/matt/projects/appp/ap3/src/pages/custom-pages/custom-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_header_logo_header_logo__["a" /* HeaderLogo */],
            __WEBPACK_IMPORTED_MODULE_6__providers_logins_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_inapppurchase_inapppurchase__["a" /* IAP */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], CustomPage);
    return CustomPage;
}());

//# sourceMappingURL=custom-page.js.map

/***/ })

});
//# sourceMappingURL=1.js.map