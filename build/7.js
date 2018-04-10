webpackJsonp([7],{

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaListModule", function() { return MediaListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media_list__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MediaListModule = (function () {
    function MediaListModule() {
    }
    MediaListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__media_list__["a" /* MediaList */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__media_list__["a" /* MediaList */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__media_list__["a" /* MediaList */]
            ]
        })
    ], MediaListModule);
    return MediaListModule;
}());

//# sourceMappingURL=media-list.module.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_posts_posts__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_header_logo_header_logo__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_download_download__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MediaList = (function () {
    function MediaList(nav, navParams, postService, globalvars, loadingController, storage, toastCtrl, viewCtrl, platform, headerLogoService, Network, Device, download, modalCtrl, file, translate, events, zone) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.postService = postService;
        this.globalvars = globalvars;
        this.loadingController = loadingController;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.headerLogoService = headerLogoService;
        this.Network = Network;
        this.Device = Device;
        this.download = download;
        this.modalCtrl = modalCtrl;
        this.file = file;
        this.translate = translate;
        this.events = events;
        this.zone = zone;
        this.items = [];
        this.page = 1;
        this.defaultlist = false;
        this.cardlist = false;
        this.downloads = [];
        this.doDownloads = false;
        this.showSearch = false;
        this.rtlBack = false;
        this.show_header_logo = false;
        this.customClasses = '';
        this.loadProgress = 0;
        this.showFeaturedImage = false;
        events.subscribe('load:progress', function (progress) {
            _this.doProgress(progress);
        });
        this.selectedItem = navParams.data;
        this.route = navParams.data.list_route;
        this.title = navParams.data.title;
        if (navParams.data.is_home == true) {
            this.doLogo();
        }
        if (navParams.data.allow_downloads && navParams.data.allow_downloads === "true") {
            this.doDownloads = true;
        }
        if (navParams.data.download_list_image && navParams.data.download_list_image === "image") {
            this.showFeaturedImage = true;
        }
        this.previewAlert(this.route);
        this.customClasses = 'post-list' + ((navParams.data.slug) ? ' page-' + navParams.data.slug : '');
        this.zone = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"]({ enableLongStackTrace: false });
    }
    MediaList.prototype.ngOnInit = function () {
        this.networkState = this.Network.type;
        if (this.networkState === 'none' || this.networkState === 'unknown') {
            // if offline, get posts from storage
            this.getStoredPosts();
        }
        else {
            this.loadPosts(this.route);
        }
    };
    MediaList.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.platform.isRTL && this.viewCtrl.enableBack()) {
            this.viewCtrl.showBackButton(false);
            this.rtlBack = true;
        }
        this.storage.get(this.route.substr(-10, 10) + '_downloads').then(function (downloads) {
            if (downloads)
                _this.downloads = downloads;
        });
    };
    // get posts from storage when we are offline
    MediaList.prototype.getStoredPosts = function () {
        var _this = this;
        this.storage.get(this.route.substr(-10, 10) + '_posts').then(function (posts) {
            if (posts) {
                _this.items = posts;
            }
            else {
                _this.presentToast('No data available, pull to refresh when you are online.');
            }
        });
    };
    MediaList.prototype.loadPosts = function (route) {
        var _this = this;
        var loading = this.loadingController.create({
            showBackdrop: false,
        });
        loading.present(loading);
        this.page = 1;
        // any menu imported from WP has to use same component. Other pages can be added manually with different components
        this.postService.load(route, this.page).then(function (items) {
            _this.items = [];
            // only add if we have a media url
            for (var i = 0; i < items.length; ++i) {
                if (items[i].appp_media && items[i].appp_media.media_url) {
                    _this.items.push(items[i]);
                }
            }
            // console.log(this.items)
            if (!_this.items.length) {
                _this.presentToast('No media urls are defined.');
                console.log("Please add media urls according to the AppPresser documentation.");
                return;
            }
            _this.mergeDownloadData();
            _this.storage.set(route.substr(-10, 10) + '_posts', items);
            // load more right away
            _this.loadMore(null);
            loading.dismiss();
        }).catch(function (err) {
            loading.dismiss();
            console.error('Error getting posts', err);
            _this.presentToast('Error getting posts.');
        });
        setTimeout(function () {
            loading.dismiss();
        }, 8000);
    };
    MediaList.prototype.doRefresh = function (refresh) {
        this.loadPosts(this.route);
        // refresh.complete should happen when posts are loaded, not timeout
        setTimeout(function () { return refresh.complete(); }, 500);
    };
    MediaList.prototype.toggleSearchBar = function () {
        if (this.showSearch === true) {
            this.showSearch = false;
        }
        else {
            this.showSearch = true;
        }
        this.content.resize();
    };
    MediaList.prototype.search = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            // set to this.route so infinite scroll works
            this.route = this.addQueryParam(this.navParams.data.list_route, 'search=' + val);
            this.loadPosts(this.route);
        }
    };
    MediaList.prototype.addQueryParam = function (url, param) {
        var separator = (url.indexOf('?') > 0) ? '&' : '?';
        return url + separator + param;
    };
    MediaList.prototype.clearSearch = function () {
        // reset to original query
        this.route = this.navParams.data.list_route;
        this.loadPosts(this.route);
    };
    MediaList.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        this.page++;
        this.postService.load(this.route, this.page).then(function (items) {
            // Loads posts from WordPress API
            var length = items["length"];
            if (length === 0) {
                if (infiniteScroll)
                    infiniteScroll.complete();
                return;
            }
            // only add if we have a media url
            for (var i = 0; i < length; ++i) {
                if (items[i].appp_media && items[i].appp_media.media_url) {
                    _this.items.push(items[i]);
                }
            }
            _this.storage.set(_this.route.substr(-10, 10) + '_posts', _this.items);
            if (infiniteScroll)
                infiniteScroll.complete();
        }).catch(function (e) {
            // promise was rejected, usually a 404 or error response from API
            if (infiniteScroll)
                infiniteScroll.complete();
            console.warn(e);
        });
    };
    // add or remove download to storage and download or delete file
    MediaList.prototype.addDownload = function (item) {
        var _this = this;
        if (typeof this.Device.platform != 'string') {
            this.presentToast("Please try from a device.");
            return;
        }
        var inArray = false;
        for (var i = this.downloads.length - 1; i >= 0; i--) {
            if (this.downloads[i].id === item.id) {
                inArray = true;
                break;
            }
        }
        // Don't add duplicate favs
        if (inArray === false) {
            // download the file
            this.download.downloadFile(item.appp_media.media_url).then(function (downloadUrl) {
                console.log(downloadUrl);
                if (downloadUrl) {
                    _this.loadProgress = 0;
                    item.download_url = downloadUrl;
                    item.downloaded = true;
                    _this.downloads.push(item);
                    _this.storage.set(_this.route.substr(-10, 10) + '_downloads', _this.downloads);
                    _this.presentToast('Downloaded!');
                }
                else {
                    _this.presentToast('Problem downloading file.');
                }
            })
                .catch(function (e) {
                console.log('file download error', e);
            });
        }
        else {
            var path = cordova.file.dataDirectory + '/media';
            var fileName = item.download_url.replace(/^.*[\\\/]/, '');
            item.download_url = '';
            item.downloaded = false;
            // console.log('remove file ' + path + fileName )
            this.file.removeFile(path, fileName).then(function (msg) {
                _this.removeDownloadSuccess(item.id);
            }, function (error) {
                console.warn(error);
                // still remove data if file not found
                if (error.code == 1) {
                    _this.removeDownloadSuccess(item.id);
                }
            });
        }
    };
    MediaList.prototype.removeDownloadSuccess = function (id) {
        this.removeDownloadData(id);
        // remove from downloads and delete file
        for (var i = this.downloads.length - 1; i >= 0; i--) {
            if (this.downloads[i].id === id) {
                this.downloads.splice(i, 1);
                break;
            }
        }
        this.storage.set(this.route.substr(-10, 10) + '_downloads', this.downloads);
        this.presentToast('Download Removed');
    };
    // if an item is downloaded already, merge that data with this.items after a refresh
    MediaList.prototype.mergeDownloadData = function () {
        // loop through downloads and for each one, search this.items for a match. If there's a match, replace it and update this.items and storage
        var _this = this;
        this.storage.get(this.route.substr(-10, 10) + '_downloads').then(function (downloaded) {
            if (!downloaded)
                return;
            _this.downloads = downloaded;
            // add download data to existing post objects
            for (var i = downloaded.length - 1; i >= 0; i--) {
                _this.replaceItem(i);
            }
            _this.storage.set(_this.route.substr(-10, 10) + '_posts', _this.items);
        });
    };
    // loop through this.items and replace with downloaded item so we can show green download icon
    MediaList.prototype.replaceItem = function (download_key) {
        for (var i = 0; i < this.items.length; ++i) {
            if (this.downloads[download_key].id === this.items[i].id) {
                console.log(this.items[i]);
                this.items[i] = this.downloads[download_key];
            }
        }
    };
    // set this.downloaded to false in item storage after deleting download
    MediaList.prototype.removeDownloadData = function (item_id) {
        var _this = this;
        this.storage.get(this.route.substr(-10, 10) + '_posts').then(function (posts) {
            if (!posts)
                return;
            for (var i = 0; i < posts.length; ++i) {
                if (posts[i].id === item_id) {
                    posts[i].downloaded = false;
                    posts[i].download_url = '';
                }
            }
            _this.items = posts;
            _this.storage.set(_this.route.substr(-10, 10) + '_posts', posts);
        });
    };
    MediaList.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            // console.log('Dismissed toast');
        });
        toast.present();
    };
    MediaList.prototype.showDownloads = function () {
        var _this = this;
        this.storage.get(this.route.substr(-10, 10) + '_downloads').then(function (downloads) {
            if (downloads && downloads.length) {
                _this.downloads = downloads;
                _this.items = downloads;
            }
            else {
                _this.translate.get('Click the download icon to download an item.').subscribe(function (text) {
                    _this.presentToast(text);
                });
            }
        });
    };
    MediaList.prototype.showAll = function () {
        var _this = this;
        this.storage.get(this.route.substr(-10, 10) + '_posts').then(function (items) {
            if (items) {
                _this.items = items;
                _this.mergeDownloadData();
            }
            else {
                _this.loadPosts(_this.route);
            }
        });
    };
    // Show alert in preview if not using https
    MediaList.prototype.previewAlert = function (url) {
        if (!url) {
            return;
        }
        if (this.Device.platform != 'iOS' && this.Device.platform != 'Android' && url.indexOf('http://') >= 0) {
            alert('Cannot display http pages in browser preview. Please build app for device or use https.');
        }
    };
    // changes the back button transition direction if app is RTL
    MediaList.prototype.backRtlTransition = function () {
        var obj = {};
        if (this.platform.is('ios'))
            obj = { direction: 'forward' };
        this.nav.pop(obj);
    };
    MediaList.prototype.doLogo = function () {
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
    MediaList.prototype.mediaModal = function (item) {
        console.log(item);
        var url = '';
        if (item.downloaded && item.download_url) {
            url = item.download_url;
        }
        else {
            url = item.appp_media.media_url;
        }
        var modal = this.modalCtrl.create('MediaPlayer', { source: url });
        modal.present();
    };
    MediaList.prototype.doProgress = function (progress) {
        var _this = this;
        // progress doesn't update unless in a zone
        this.zone.run(function () {
            _this.loadProgress = progress;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Content */])
    ], MediaList.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('progress'),
        __metadata("design:type", Object)
    ], MediaList.prototype, "progress", void 0);
    MediaList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/matt/projects/appp/ap3/src/pages/media-list/media-list.html"*/'<ion-header>\n  \n  <ion-navbar no-border-bottom>\n\n    <ion-buttons start>\n      <button *ngIf="rtlBack" (click)="backRtlTransition()" ion-button class="custom-back-button">\n          <ion-icon name="arrow-back"></ion-icon>\n          {{\'Back\' | translate }}\n      </button>\n\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n\n    </ion-buttons>\n\n    <img class="header-logo" *ngIf="show_header_logo" [src]="header_logo_url" />\n\n    <ion-title *ngIf="!show_header_logo">{{title | translate}}</ion-title>\n\n    <ion-buttons end>\n    <button ion-button class="search-button-header" (click)="toggleSearchBar()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    </ion-navbar>\n\n    <ion-toolbar *ngIf="showSearch">\n      <ion-searchbar placeholder="{{\'Search\' | translate }}" debounce="1000" (ionInput)="search($event)" (ionClear)="clearSearch()"></ion-searchbar>\n    </ion-toolbar>\n\n    <ion-toolbar *ngIf="doDownloads" id="favorites-toolbar">\n\n      <button ion-button clear (click)="showAll()">\n        {{ \'All\' | translate }}\n      </button>\n\n      <button ion-button clear (click)="showDownloads()">\n        {{ \'Downloaded\' | translate }}\n      </button>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content [ngClass]="customClasses">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  \n  <ion-list class="media-list">\n\n      <ion-item *ngFor="let item of items">\n\n        <ion-avatar item-left *ngIf="showFeaturedImage">\n          <img *ngIf="item.featured_image_urls && item.featured_image_urls.thumbnail" src="{{item.featured_image_urls.thumbnail}}">\n        </ion-avatar>\n        \n        <div (click)="mediaModal(item)" class="media-click-area">\n\n          <ion-icon item-start name="{{selectedItem.download_left_icon}}" *ngIf="!showFeaturedImage"></ion-icon>\n\n          <div *ngIf="item.appp && item.appp.post_list && item.appp.post_list.above_title" [innerHTML]="item.appp.post_list.above_title"></div>\n\n          <h2 *ngIf="item.title && item.title.rendered" [innerHTML]="item.title.rendered"></h2>\n\n          <p class="downloaded-text" *ngIf="item.downloaded">Downloaded</p>\n\n          <div *ngIf="item.appp && item.appp.post_list && item.appp.post_list.below_title" [innerHTML]="item.appp.post_list.below_title"></div>\n\n          <p *ngIf="item.excerpt && item.excerpt.rendered" [innerHTML]="item.excerpt.rendered"></p>\n\n          <div *ngIf="item.appp && item.appp.post_list && item.appp.post_list.below_content" [innerHTML]="item.appp.post_list.below_content"></div>\n\n        </div>\n\n        <ion-icon (click)="addDownload(item)" *ngIf="!item.downloaded && doDownloads" item-end name="{{selectedItem.download_right_icon}}"></ion-icon>\n        <ion-icon (click)="addDownload(item)" *ngIf="item.downloaded" item-end name="remove-circle"></ion-icon>\n\n      </ion-item>\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n   <ion-infinite-scroll-content></ion-infinite-scroll-content>\n </ion-infinite-scroll>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="light" *ngIf="loadProgress > 0">\n    <p align="center">Downloading...</p>\n    <div class="progress-outer">\n        <div class="progress-inner" [style.width]="loadProgress + \'%\'">\n            {{loadProgress}}%\n        </div>\n    </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/matt/projects/appp/ap3/src/pages/media-list/media-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_posts_posts__["a" /* Posts */],
            __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__providers_header_logo_header_logo__["a" /* HeaderLogo */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_8__providers_download_download__["a" /* Download */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"]])
    ], MediaList);
    return MediaList;
}());

//# sourceMappingURL=media-list.js.map

/***/ })

});
//# sourceMappingURL=7.js.map