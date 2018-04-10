webpackJsonp([3],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeModule", function() { return IframeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__iframe__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IframeModule = (function () {
    function IframeModule() {
    }
    IframeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__iframe__["a" /* Iframe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__iframe__["a" /* Iframe */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__iframe__["a" /* Iframe */]
            ]
        })
    ], IframeModule);
    return IframeModule;
}());

//# sourceMappingURL=iframe.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaPlayer; });
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


var MediaPlayer = (function () {
    function MediaPlayer(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.source = navParams.get('source');
        this.image = navParams.get('image');
    }
    MediaPlayer.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MediaPlayer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/matt/projects/appp/ap3/src/pages/media-player/media-player.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{ \'Media Player\' | translate }}\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <vg-player>\n        <vg-overlay-play [ngStyle]="{\'background-image\': \'url(\' + image + \')\'}"></vg-overlay-play>\n        <vg-buffering></vg-buffering>\n\n        <vg-scrub-bar>\n            <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n            <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n        </vg-scrub-bar>\n\n        <vg-controls>\n            <vg-play-pause></vg-play-pause>\n            <vg-playback-button></vg-playback-button>\n\n            <vg-time-display property="current" format="mm:ss"></vg-time-display>\n\n            <vg-scrub-bar style="pointer-events: none;"></vg-scrub-bar>\n\n            <!-- <vg-time-display property="left" format="mm:ss"></vg-time-display> -->\n            <vg-time-display property="total" format="mm:ss"></vg-time-display>\n\n            <!-- <vg-track-selector></vg-track-selector>\n            <vg-mute></vg-mute> -->\n            <vg-volume></vg-volume>\n\n            <vg-fullscreen></vg-fullscreen>\n        </vg-controls>\n\n        <video [vgMedia]="media" #media preload="auto" crossorigin autoplay>\n            <source [src]="source">\n        </video>\n    </vg-player>\n\n</ion-content>'/*ion-inline-end:"/Users/matt/projects/appp/ap3/src/pages/media-player/media-player.html"*/,
            selector: 'media-player'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], MediaPlayer);
    return MediaPlayer;
}());

//# sourceMappingURL=media-player.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Iframe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__media_player_media_player__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_header_logo_header_logo__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_language_language_service__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var Iframe = (function () {
    function Iframe(navParams, nav, viewCtrl, platform, loadingController, sanitizer, modalCtrl, storage, el, headerLogoService, languageservice, Keyboard, Device, Geolocation, SocialSharing, events, zone) {
        this.navParams = navParams;
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.loadingController = loadingController;
        this.sanitizer = sanitizer;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.el = el;
        this.headerLogoService = headerLogoService;
        this.languageservice = languageservice;
        this.Keyboard = Keyboard;
        this.Device = Device;
        this.Geolocation = Geolocation;
        this.SocialSharing = SocialSharing;
        this.events = events;
        this.zone = zone;
        this.loaded = false;
        this.activityModal = false;
        this.checkinModal = false;
        this.showShare = false;
        this.rtlBack = false;
        this.lang = '';
        this.shareUrl = '';
        this.cart_link = '';
        this.showCartLink = false;
        this.show_header_logo = false;
        this.hide_share_icon = false;
        this.is_registration_page = false;
    }
    Iframe.prototype.ngOnInit = function () {
        if (this.navParams.data.is_home == true) {
            this.doLogo();
        }
        this.setupURL();
        var dataurl = this.navParams.data.url;
        // Show error message if in preview and not using https
        this.previewAlert(this.navParams.data.url);
        var myappp = localStorage.getItem('myappp');
        if (myappp) {
            if (typeof myappp == 'string')
                myappp = JSON.parse(myappp);
            if (myappp && myappp.meta && myappp.meta.share && myappp.meta.share.icon && myappp.meta.share.icon.hide)
                this.hide_share_icon = myappp.meta.share.icon.hide;
        }
    };
    /**
     * Adds the appp=3 to the URL, but makes sure hashtags stay at the end
     * and we don't end up with more than one ?.
     */
    Iframe.prototype.setupURL = function () {
        var url = this.navParams.data.url;
        url = this.languageservice.appendUrlLang(url);
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    Iframe.prototype.ionViewWillEnter = function () {
        this.title = this.navParams.get('title');
        this.showShare = false;
        this.iframeLoading();
        if (this.navParams.get('is_register_page') === true) {
            console.log('yes, is_register_page');
            if (this.viewCtrl.enableBack())
                this.viewCtrl.showBackButton(false);
            this.rtlBack = false;
            this.is_registration_page = true;
        }
        else if (this.platform.isRTL && this.viewCtrl.enableBack()) {
            this.viewCtrl.showBackButton(false);
            this.rtlBack = true;
            this.is_registration_page = false;
        }
    };
    Iframe.prototype.ionViewWillLeave = function () {
        // Hack to clear page title when going back. Otherwise page title will be from previous page
        window.postMessage(JSON.stringify({ post_title: '', post_url: 'none' }), '*');
    };
    Iframe.prototype.iframeLoading = function () {
        var _this = this;
        // set this.loaded so cached pages don't show loading spinner
        if (this.loaded)
            return;
        this.showSpinner();
        window.addEventListener('native.keyboardhide', function (e) {
            _this.notifyThemeKeyboardClosed();
        });
        window.addEventListener('native.keyboardshow', function (e) {
            _this.notifyThemeKeyboardOpened();
        });
        this.platform.pause.subscribe(function () {
            _this.postPauseEvent();
        });
        this.loaded = true;
    };
    Iframe.prototype.showSpinner = function () {
        var _this = this;
        this.loading = this.loadingController.create({
            showBackdrop: false,
            dismissOnPageChange: false
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 8000);
    };
    Iframe.prototype.ionSelected = function () {
        // fires when an active menu item is pressed again, causing a refresh
        var _this = this;
        this.showSpinner();
        var url = this.url;
        this.url = '';
        setTimeout(function () {
            _this.url = url;
        }, 1);
    };
    // ng2 way of adding a listener
    Iframe.prototype.onMessage = function (event) {
        this.myListeners(event);
    };
    Iframe.prototype.myListeners = function (e) {
        // get current window so we can find active iframe
        var w = e.target;
        if (e.data === 'site_loaded') {
            this.loading.dismiss();
        }
        else if (e.data === 'show_spinner') {
            this.showSpinner();
        }
        else if (e.data === 'reload_frame') {
            // need to reload frame on login
            this.iframe = w.document.getElementsByClassName('ap3-iframe')[0];
            var src = this.iframe.src;
            this.iframe.src = src;
        }
        else if (e.data === 'activity_modal') {
            this.activityModal = true;
        }
        else if (e.data === 'checkin_icon_show' || e.data === 'checkin_modal' /* icon */) {
            this.checkinModal = true;
        }
        else if (e.data === 'checkin_modal_show') {
            // doCheckinModal expects an event target, so we'll simulate one
            var _e = {
                target: this.el.nativeElement.querySelector('.ap3-iframe')
            };
            this.doCheckinModal(_e);
        }
        else if (e.data.indexOf('{') === 0) {
            // if it's a json object, parse it
            var parsed = JSON.parse(e.data);
            if (parsed.media) {
                this.mediaModal(parsed.media, parsed.img);
            }
            else if (parsed.apppkeyboardhelper) {
                if (parsed.apppkeyboardhelper === 'close') {
                    if (this.Keyboard) {
                        this.Keyboard.close();
                    }
                }
            }
            else if (parsed.cart_link && parsed.cart_link != '') {
                this.cart_link = parsed.cart_link;
                this.changeTitle(parsed.post_title);
                this.showCartLink = true;
            }
            else if (parsed.post_url && parsed.post_url != 'none') {
                this.shareUrl = parsed.post_url;
                this.changeTitle(parsed.post_title);
                if (!this.hide_share_icon)
                    this.showShare = true;
            }
            else if (parsed.post_url && parsed.post_url === 'none') {
                // part of the hack to clear page titles when going back
                this.showShare = false;
                this.changeTitle(this.navParams.get('title'));
            }
            else if (parsed.geo_place) {
                // doCheckinPlaceModal expects an event target, so we'll simulate one
                var _e = {
                    target: this.el.nativeElement.querySelector('.ap3-iframe')
                };
                this.doCheckinPlaceModal(_e, parsed.geo_place);
            }
            else if (parsed.apppgeolocation) {
                // appp-geolocation shortcode
                var _e = {
                    target: this.el.nativeElement.querySelector('.ap3-iframe')
                };
                this.doApppGeolocation(_e);
            }
        }
    };
    Iframe.prototype.changeTitle = function (title) {
        var _this = this;
        if (title === '')
            return;
        // zone fixes bug where title didn't update properly on device
        this.zone.run(function () {
            _this.title = title;
        });
    };
    Iframe.prototype.postPauseEvent = function () {
        this.findIframe();
        if (this.iframe && this.iframe.contentWindow) {
            this.iframe.contentWindow.postMessage('{"pause_event":{"platform":"' + this.Device.platform + '"}}', '*');
        }
        else {
            console.warn('contentWindow not found in iframe.ts postPauseEvent()');
        }
    };
    // find the first ancestor with the given class name
    Iframe.prototype.findAncestor = function (el, cls) {
        while ((el = el.parentElement) && !el.classList.contains(cls))
            ;
        return el;
    };
    Iframe.prototype.doActivityModal = function (event) {
        this.findIframeBySelector(event.target);
        this.iframe.contentWindow.postMessage('activity', '*');
    };
    Iframe.prototype.doCheckinModal = function (event) {
        var _this = this;
        this.findIframeBySelector(event.target);
        // first message is to show modal, then we send through location
        this.iframe.contentWindow.postMessage('checkin', '*');
        // Do this when checkin button clicked
        this.Geolocation.getCurrentPosition().then(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log('position', position);
            // need to postmessage this
            _this.iframe.contentWindow.postMessage({ lat: latitude, long: longitude }, '*');
        });
    };
    Iframe.prototype.doCheckinPlaceModal = function (event, place) {
        var _this = this;
        this.findIframeBySelector(event.target);
        // Do this when checkin button clicked when it has a place parameter
        this.Geolocation.getCurrentPosition().then(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log('position', position);
            // need to postmessage this
            _this.iframe.contentWindow.postMessage({ geo_place: place, lat: latitude, long: longitude }, '*');
        });
    };
    /**
     *  [appp-geolocation] Geo the location to set the form values
     */
    Iframe.prototype.doApppGeolocation = function (event) {
        var _this = this;
        this.findIframeBySelector(event.target);
        // event on wp's page load containing the shortcode
        this.Geolocation.getCurrentPosition().then(function (position) {
            console.log('Iframe doApppGeolocation position', position);
            var coords = {
                accuracy: position.coords.accuracy,
                altitude: position.coords.altitude,
                altitudeAccuracy: position.coords.altitudeAccuracy,
                heading: position.coords.heading,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                speed: position.coords.speed
            };
            var message = JSON.stringify({
                apppgeolocation: {
                    coords: coords,
                    timestamp: position.timestamp
                }
            });
            // need to postmessage this
            _this.iframe.contentWindow.postMessage(message, '*');
        }).catch(function (reason) {
            console.log('getCurrentPosition reason', reason);
            var message = JSON.stringify({
                apppgeolocation: {
                    ready: false,
                    message: reason.message
                }
            });
            // need to postmessage this
            _this.iframe.contentWindow.postMessage(message, '*');
        });
    };
    Iframe.prototype.notifyThemeKeyboardClosed = function () {
        this.findIframe();
        this.iframe.contentWindow.postMessage('appp_keyboard_closed', '*');
    };
    Iframe.prototype.notifyThemeKeyboardOpened = function () {
        this.findIframe();
        this.iframe.contentWindow.postMessage('appp_keyboard_opened', '*');
    };
    Iframe.prototype.mediaModal = function (src, img) {
        if (img === void 0) { img = null; }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__media_player_media_player__["a" /* MediaPlayer */], { source: src, image: img });
        modal.present();
    };
    // Show alert in preview if not using https
    Iframe.prototype.previewAlert = function (url) {
        if (this.Device.platform != 'iOS' && this.Device.platform != 'Android' && url.indexOf('http://') >= 0 && location.port != '8100') {
            alert('Cannot display http pages in browser preview. Please build app for device or use https.');
        }
    };
    // Must send in selector from a click event on the page
    Iframe.prototype.findIframeBySelector = function (el) {
        /*
         Ionic stacks cached views on top of each other, which causes duplicate ids on the page. We need to find the active page in the stack, and send our post messages there. Otherwise message is sent to the wrong page.
        */
        var page = this.findAncestor(el, 'ion-page');
        this.iframe = page.getElementsByClassName('ap3-iframe')[0];
    };
    // find the iframe without a selector
    Iframe.prototype.findIframe = function () {
        /*
         Ionic stacks cached views on top of each other, which causes duplicate ids on the page. We need to find the active page in the stack, and send our post messages there. Otherwise message is sent to the wrong page.
        */
        // only look in active stack
        var components = document.querySelectorAll('#nav > ng-component');
        for (var i = components.length - 1; i >= 0; i--) {
            if (!components[i].hasAttribute('hidden')) {
                // this is the shown ng-component element
                var active = components[i];
            }
        }
        // If we have tabs views stack differently
        if (active.querySelectorAll('ion-tabs .show-tabbar').length) {
            // tabs exist, define iframe relative to active tab
            var page = active.querySelectorAll('ion-tab[aria-hidden=false] .show-page');
            this.iframe = page[0].getElementsByClassName('ap3-iframe')[0];
            return;
        }
        // if no tabs
        this.iframe = active.querySelector('#ap3-iframe');
    };
    // changes the back button transition direction if app is RTL
    Iframe.prototype.backRtlTransition = function () {
        var obj = {};
        if (this.platform.is('ios'))
            obj = { direction: 'forward' };
        this.nav.pop(obj);
        if (this.is_registration_page)
            this.events.publish('login:force_login');
    };
    Iframe.prototype.share = function () {
        this.SocialSharing.share(this.title, null, null, this.shareUrl).then(function () {
            // Sharing via email is possible
        }).catch(function () {
            // Sharing via email is not possible
        });
    };
    Iframe.prototype.cartLink = function () {
        this.nav.push('Iframe', { 'title': '', 'url': this.cart_link });
    };
    Iframe.prototype.doLogo = function () {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('window:message', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Iframe.prototype, "onMessage", null);
    Iframe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/matt/projects/appp/ap3/src/pages/iframe/iframe.html"*/'<ion-header>\n\n	<ion-navbar>\n		\n		<ion-buttons start>\n		<button *ngIf="rtlBack||is_registration_page" (click)="backRtlTransition()" ion-button class="custom-back-button">\n		    <ion-icon name="arrow-back"></ion-icon>\n		    {{ \'Back\' | translate }}\n		</button>\n\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n\n		</ion-buttons>\n\n	    <img class="header-logo" *ngIf="show_header_logo" [src]="header_logo_url" />\n\n    	<ion-title *ngIf="!show_header_logo">{{title | translate}}</ion-title>\n\n	    <ion-buttons end>\n	    <button *ngIf="activityModal" ion-button (click)="doActivityModal($event)">\n			<ion-icon name="ios-create-outline"></ion-icon>\n		</button>\n		<button *ngIf="checkinModal" ion-button (click)="doCheckinModal($event)">\n			<ion-icon name="ios-navigate-outline"></ion-icon>\n		</button>\n		<button *ngIf="showShare" ion-button (click)="share()">\n			<ion-icon name="share"></ion-icon>\n		</button>\n		<button *ngIf="showCartLink" ion-button (click)="cartLink()">\n			<ion-icon name="cart"></ion-icon>\n		</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n    <iframe *ngIf="url" [src]="url" id="ap3-iframe" class="ap3-iframe" allowfullscreen></iframe>\n</ion-content>'/*ion-inline-end:"/Users/matt/projects/appp/ap3/src/pages/iframe/iframe.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_9__providers_header_logo_header_logo__["a" /* HeaderLogo */],
            __WEBPACK_IMPORTED_MODULE_10__providers_language_language_service__["a" /* LanguageService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"]])
    ], Iframe);
    return Iframe;
}());

//# sourceMappingURL=iframe.js.map

/***/ })

});
//# sourceMappingURL=3.js.map