webpackJsonp([8],{

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalModule", function() { return LoginModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_modal__ = __webpack_require__(363);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModalModule = (function () {
    function LoginModalModule() {
    }
    LoginModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login_modal__["a" /* LoginModal */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login_modal__["a" /* LoginModal */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login_modal__["a" /* LoginModal */]
            ]
        })
    ], LoginModalModule);
    return LoginModalModule;
}());

//# sourceMappingURL=login-modal.module.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wplogin_wplogin__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_logins_logins__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_facebook_login_app__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_facebook_fbconnect_settings__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_logins_login_service__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginModal = (function () {
    function LoginModal(viewCtrl, loadingCtrl, wplogin, logins, events, storage, translate, fbconnectApp, fbconnectvars, toastCtrl, loginservice, Device) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.wplogin = wplogin;
        this.logins = logins;
        this.events = events;
        this.storage = storage;
        this.translate = translate;
        this.fbconnectApp = fbconnectApp;
        this.fbconnectvars = fbconnectvars;
        this.toastCtrl = toastCtrl;
        this.loginservice = loginservice;
        this.Device = Device;
        this.login = {};
        this.force_login = false;
        this.is_preview = false;
        this.fb_login = false;
        this.register_link = '';
        // login through postmessage sets login_data this way
        events.subscribe('modal:logindata', function (data) {
            _this.setLoginData(data);
        });
        // get login data on first load
        this.storage.get('user_login').then(function (data) {
            if (data) {
                _this.login_data = data;
            }
        });
        this.storage.get('force_login').then(function (data) {
            if (data) {
                _this.force_login = true;
            }
        });
        this.storage.get('registration_url').then(function (data) {
            if (data) {
                _this.register_link = data;
            }
            else {
                _this.register_link = null;
            }
        });
        this.initFBLogin();
        this.is_preview = (location.href.indexOf('myapppresser') > 0);
    }
    /**
     * The FB login button will only display after settings are received
     *
     * fb_login: true|false to show the button
     */
    LoginModal.prototype.initFBLogin = function () {
        var _this = this;
        this.fb_login = (this.fbconnectvars.get_nonce()) ? true : false;
        if (this.fb_login === false) {
            setTimeout(function () {
                _this.fb_login = (_this.fbconnectvars.get_nonce()) ? true : false;
                if (_this.fb_login === false) {
                    setTimeout(function () {
                        _this.fb_login = (_this.fbconnectvars.get_nonce()) ? true : false;
                    }, 5000); // iOS seems to take longer
                }
            }, 3000); // Slow on first app load
        }
    };
    LoginModal.prototype.doLogin = function () {
        var _this = this;
        // if in preview, Device.platform is empty object. On device it should be string like 'iOS'
        // checking for port 8100 let's me test logins locally
        if (typeof this.Device.platform != 'string' && location.port != '8100') {
            this.translate.get('Please try from a device.').subscribe(function (text) {
                _this.presentToast(text);
            });
            return;
        }
        this.translate.get('Please enter a valid login.').subscribe(function (text) {
            if (!_this.login)
                _this.presentToast(text);
        });
        this.showSpinner();
        this.wplogin.login(this.login).then(function (response) {
            if (!response || response.success === false) {
                _this.loginErr(response);
                return;
            }
            var login_data = response.data;
            if (login_data && login_data.avatar)
                login_data.avatar = _this.logins.fixProtocolRelativeUrl(login_data.avatar);
            _this.storage.set('user_login', login_data);
            _this.events.publish('user:login', login_data);
            _this.login_data = login_data;
            _this.dismiss();
            _this.hideSpinner();
        }, function (err) {
            _this.loginErr(err);
        }).catch(function (e) {
            console.warn(e);
            _this.hideSpinner();
            _this.translate.get('There was a problem connecting to the server.').subscribe(function (text) {
                _this.presentToast(text);
            });
        });
    };
    LoginModal.prototype.loginErr = function (err) {
        var _this = this;
        console.log(err);
        this.hideSpinner();
        this.translate.get('There was a problem, please try again.').subscribe(function (text) {
            var msg = text;
            if (err.data && err.data.message)
                msg += ' ' + err.data.message;
            _this.presentToast(msg);
        });
    };
    LoginModal.prototype.doFBLogin = function () {
        var _this = this;
        if (typeof this.Device.platform != 'string' && location.port != '8100') {
            this.translate.get('Please try from a device.').subscribe(function (text) {
                _this.presentToast(text);
            });
            return;
        }
        this.events.subscribe('fb:login', function (data) {
            console.log('captured fb login event', data);
            _this.dismiss();
            if (data.redirect_url)
                _this.events.publish('user:login_redirect', data.redirect_url);
        });
        this.fbconnectApp.login();
    };
    LoginModal.prototype.doLogout = function () {
        var _this = this;
        this.showSpinner();
        this.fbconnectvars.loggout();
        this.loginservice.removeLoginStatus();
        this.wplogin.logout().then(function (response) {
            _this.storage.remove('user_login');
            _this.events.publish('user:logout', response);
            _this.login_data = null;
            _this.dismiss();
            _this.hideSpinner();
        }, function (err) {
            _this.storage.remove('user_login');
            _this.events.publish('user:logout');
            _this.login_data = null;
            _this.hideSpinner();
            console.log(err);
            _this.translate.get('You are logged out of the app, but there was a problem on the server.').subscribe(function (text) {
                var msg = text;
                if (err.data && err.data.message)
                    msg += ' ' + err.data.message;
                _this.presentToast(msg);
            });
        }).catch(function (e) {
            console.warn(e);
            _this.hideSpinner();
            _this.translate.get('There was a problem connecting to the server.').subscribe(function (text) {
                _this.presentToast(text);
            });
        });
    };
    LoginModal.prototype.setLoginData = function (data) {
        this.login_data = data;
        console.log('setLoginData', this.login_data);
    };
    LoginModal.prototype.register = function (e) {
        var title = e.target.innerText;
        this.dismiss();
        this.events.publish('pushpage', { url: this.register_link, title: title, is_register_page: true });
    };
    LoginModal.prototype.lostpw = function (e) {
        var title = e.target.innerText;
        this.dismiss();
        var item = window.localStorage.getItem('myappp');
        var url = JSON.parse(item).wordpress_url;
        this.events.publish('pushpage', { url: url + 'wp-login.php?action=lostpassword', title: title });
    };
    LoginModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginModal.prototype.showSpinner = function () {
        this.spinner = this.loadingCtrl.create();
        this.spinner.present();
    };
    LoginModal.prototype.hideSpinner = function () {
        this.spinner.dismiss();
    };
    LoginModal.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'bottom'
        });
        toast.present();
    };
    LoginModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-modal',template:/*ion-inline-start:"/Users/matt/projects/appp/ap3/src/pages/login-modal/login-modal.html"*/'<ion-header>\n\n  <ion-toolbar>\n  \n    <ion-title>{{ \'Login\' | translate }}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button *ngIf="!force_login && !login_data || login_data || (is_preview && force_login)" (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n	<form (ngSubmit)="doLogin()" padding *ngIf="!login_data">\n\n      <ion-item>\n        <ion-label stacked>{{ \'Username\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="login.user" name="user" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>{{ \'Password\' | translate }}</ion-label>\n        <ion-input type="password" [(ngModel)]="login.pass" name="pass" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></ion-input>\n      </ion-item>\n      \n      <div padding>\n      <button ion-button type="submit" block>{{ \'Submit\' | translate }}</button>\n      </div>\n\n      <div *ngIf="fb_login">\n\n          <div class="login-div-wrap">\n            <div><div class="login-div"></div><div class="login-div-text">or</div><div class="login-div"></div></div>\n          </div>\n\n          <div class="appfbconnectlogin">\n            <button href="#" type="button" (click)="doFBLogin()">\n              <span class="fb-icon"></span>\n              <span class="fb-login-text">{{ \'Login with Facebook\' | translate }}</span>\n            </button>\n          </div>\n\n      </div>\n\n      <ion-grid class="modal-footer">\n        <ion-row>\n          <!-- <ion-col>\n            <button ion-button color="light" full class="lost-password" (click)="lostpw( $event )">{{ \'Lost Password\' | translate }}</button>\n          </ion-col> -->\n\n          <ion-col *ngIf="register_link">\n\n            <button type="button" ion-button color="light" class="register-link" full (click)="register( $event )">{{ \'Sign Up\' | translate }}</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n    </form>\n\n	<div padding *ngIf="login_data">\n		<p>{{login_data.message}}</p>\n    	<button ion-button block (click)="doLogout()">{{ \'Click here to logout\' | translate }}</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/matt/projects/appp/ap3/src/pages/login-modal/login-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_wplogin_wplogin__["a" /* WPlogin */],
            __WEBPACK_IMPORTED_MODULE_3__providers_logins_logins__["a" /* Logins */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_facebook_login_app__["a" /* FbConnectApp */],
            __WEBPACK_IMPORTED_MODULE_5__providers_facebook_fbconnect_settings__["a" /* FBConnectAppSettings */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_logins_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */]])
    ], LoginModal);
    return LoginModal;
}());

//# sourceMappingURL=login-modal.js.map

/***/ })

});
//# sourceMappingURL=8.js.map