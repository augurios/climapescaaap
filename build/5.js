webpackJsonp([5],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushSettingsModule", function() { return PushSettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__push_settings__ = __webpack_require__(398);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PushSettingsModule = (function () {
    function PushSettingsModule() {
    }
    PushSettingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__push_settings__["a" /* PushSettings */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__push_settings__["a" /* PushSettings */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__push_settings__["a" /* PushSettings */]
            ]
        })
    ], PushSettingsModule);
    return PushSettingsModule;
}());

//# sourceMappingURL=push-settings.module.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_push_push__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PushSettings = (function () {
    function PushSettings(navParams, storage, push, viewCtrl, toastCtrl) {
        this.navParams = navParams;
        this.storage = storage;
        this.push = push;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
    }
    PushSettings.prototype.ionViewWillEnter = function () {
        this.getSegments();
    };
    // first get existing checked segments
    PushSettings.prototype.getSegments = function () {
        var _this = this;
        this.storage.get('segments').then(function (segmentList) {
            if (!segmentList) {
                // no segments, so don't have to see if they are checked
                _this.segments = JSON.parse(window.localStorage.getItem('myappp')).segments;
                _this.storage.set('segments', _this.segments);
                return;
            }
            var checkedSegments = [];
            for (var i = segmentList.length - 1; i >= 0; i--) {
                if (segmentList[i].isChecked == true)
                    checkedSegments.push(segmentList[i].arn);
            }
            _this.setSegments(checkedSegments);
        });
    };
    // get new segments, making sure existing checked ones stay checked, then save
    PushSettings.prototype.setSegments = function (checkedSegments) {
        var newSegments = JSON.parse(window.localStorage.getItem('myappp')).segments;
        for (var i = newSegments.length - 1; i >= 0; i--) {
            if (checkedSegments.indexOf(newSegments[i].arn) >= 0) {
                // segment is checked, resave it that way
                newSegments[i].isChecked = true;
            }
        }
        this.segments = newSegments;
        this.storage.set('segments', newSegments);
    };
    PushSettings.prototype.toggleSegment = function (event, segment, segments) {
        var _this = this;
        console.log('toggleSegment', event);
        this.storage.get(segment.arn).then(function (subscriptionArn) {
            if (subscriptionArn && segment.isChecked == false) {
                _this.unsubscribe(subscriptionArn, segment.arn);
            }
            else {
                _this.subscribe(segment.arn);
            }
            // update storage with toggle values
            _this.storage.set('segments', segments);
        });
    };
    PushSettings.prototype.checkStatus = function (topicArn) {
        this.storage.get(topicArn).then(function (res) {
            console.log('isChecked', res);
            if (res) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    PushSettings.prototype.subscribe = function (topicArn) {
        var _this = this;
        this.storage.get('deviceToken').then(function (token) {
            _this.push.subscribeToTopic(token, topicArn).then(function (res) {
                _this.storage.set(topicArn, res.subscriptionArn);
                _this.presentToast(res.msg);
            });
        });
    };
    PushSettings.prototype.unsubscribe = function (subscriptionArn, topicArn) {
        var _this = this;
        // have to get subscriptionArn, then send to unsubscribe
        this.push.unsubscribe(subscriptionArn).then(function (res) {
            _this.storage.remove(topicArn);
            _this.presentToast(res.msg);
        });
    };
    PushSettings.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'bottom'
        });
        toast.present();
    };
    PushSettings.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PushSettings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/matt/projects/appp/ap3/src/pages/push-settings/push-settings.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{ \'Notification Settings\' | translate }}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-list>\n<ion-item *ngFor="let segment of segments">\n  <span item-left class="dot"></span>\n  <ion-label>{{segment.name}}</ion-label>\n  <ion-toggle [(ngModel)]="segment.isChecked" (ionChange)="toggleSegment($event, segment, segments)"></ion-toggle>\n</ion-item>\n<ion-item *ngIf="!segments">{{ \'No segments available\' | translate }}</ion-item>\n</ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/matt/projects/appp/ap3/src/pages/push-settings/push-settings.html"*/,
            selector: 'push-settings'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_push_push__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], PushSettings);
    return PushSettings;
}());

//# sourceMappingURL=push-settings.js.map

/***/ })

});
//# sourceMappingURL=5.js.map