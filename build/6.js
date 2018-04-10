webpackJsonp([6],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListModule", function() { return PostListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_list__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PostListModule = (function () {
    function PostListModule() {
    }
    PostListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__post_list__["a" /* PostList */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__post_list__["a" /* PostList */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__post_list__["a" /* PostList */]
            ]
        })
    ], PostListModule);
    return PostListModule;
}());

//# sourceMappingURL=post-list.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_posts_posts__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_header_logo_header_logo__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PostList = (function () {
    function PostList(nav, navParams, postService, globalvars, loadingController, storage, toastCtrl, viewCtrl, platform, headerLogoService, Network, Device) {
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
        this.page = 1;
        this.defaultlist = false;
        this.cardlist = false;
        this.favorites = [];
        this.doFavorites = false;
        this.showSlider = false;
        this.showSearch = false;
        this.rtlBack = false;
        this.show_header_logo = false;
        this.customClasses = '';
        this.route = navParams.data.list_route;
        this.title = navParams.data.title;
        if (navParams.data.is_home == true) {
            this.doLogo();
        }
        if (navParams.data.favorites && navParams.data.favorites === "true") {
            this.doFavorites = true;
        }
        if (navParams.data.show_slider && navParams.data.show_slider === "true" && navParams.data.slide_route) {
            this.loadSlides(navParams.data.slide_route);
        }
        if (navParams.data.list_display === 'card') {
            this.cardlist = true;
            this.doFavorites = false;
        }
        else {
            this.defaultlist = true;
        }
        this.previewAlert(this.route);
        this.customClasses = 'post-list' + ((navParams.data.slug) ? ' page-' + navParams.data.slug : '');
    }
    PostList.prototype.ngOnInit = function () {
        this.networkState = this.Network.type;
        if (this.networkState === 'none' || this.networkState === 'unknown') {
            // if offline, get posts from storage
            this.getStoredPosts();
        }
        else {
            this.loadPosts(this.route);
        }
    };
    PostList.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.platform.isRTL && this.viewCtrl.enableBack()) {
            this.viewCtrl.showBackButton(false);
            this.rtlBack = true;
        }
        this.storage.get(this.route.substr(-10, 10) + '_favorites').then(function (favorites) {
            if (favorites)
                _this.favorites = favorites;
        });
    };
    // get posts from storage when we are offline
    PostList.prototype.getStoredPosts = function () {
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
    PostList.prototype.loadPosts = function (route) {
        var _this = this;
        var loading = this.loadingController.create({
            showBackdrop: false,
        });
        loading.present(loading);
        this.page = 1;
        // any menu imported from WP has to use same component. Other pages can be added manually with different components
        this.postService.load(route, this.page).then(function (items) {
            // Loads posts from WordPress API
            _this.items = items;
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
    PostList.prototype.itemTapped = function (event, item) {
        var opt = {};
        if (this.platform.isRTL && this.platform.is('ios'))
            opt = { direction: 'back' };
        this.nav.push('PostDetailsPage', {
            item: item
        }, opt);
    };
    PostList.prototype.doRefresh = function (refresh) {
        this.loadPosts(this.route);
        this.loadSlides(this.navParams.data.slide_route);
        // refresh.complete should happen when posts are loaded, not timeout
        setTimeout(function () { return refresh.complete(); }, 500);
    };
    PostList.prototype.toggleSearchBar = function () {
        if (this.showSearch === true) {
            this.showSearch = false;
        }
        else {
            this.showSearch = true;
        }
        this.content.resize();
    };
    PostList.prototype.search = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            // set to this.route so infinite scroll works
            this.route = this.addQueryParam(this.navParams.data.list_route, 'search=' + val);
            this.loadPosts(this.route);
        }
    };
    PostList.prototype.addQueryParam = function (url, param) {
        var separator = (url.indexOf('?') > 0) ? '&' : '?';
        return url + separator + param;
    };
    PostList.prototype.clearSearch = function () {
        // reset to original query
        this.route = this.navParams.data.list_route;
        this.loadPosts(this.route);
    };
    PostList.prototype.loadMore = function (infiniteScroll) {
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
            for (var i = 0; i < length; ++i) {
                _this.items.push(items[i]);
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
    PostList.prototype.addFav = function (slidingItem, item) {
        var inArray = false;
        for (var i = this.favorites.length - 1; i >= 0; i--) {
            if (this.favorites[i].id === item.id) {
                inArray = true;
                break;
            }
        }
        // Don't add duplicate favs
        if (inArray === false) {
            this.favorites.push(item);
            this.storage.set(this.route.substr(-10, 10) + '_favorites', this.favorites);
            this.presentToast('Favorite Added');
        }
        else {
            for (var i = this.favorites.length - 1; i >= 0; i--) {
                if (this.favorites[i].id === item.id) {
                    this.favorites.splice(i, 1);
                    break;
                }
            }
            this.storage.set(this.route.substr(-10, 10) + '_favorites', this.favorites);
            // refresh the list
            if (this.favorites.length) {
                this.items = this.favorites;
            }
            else {
                this.showAll();
            }
            this.presentToast('Favorite Removed');
        }
        slidingItem.close();
    };
    PostList.prototype.presentToast = function (msg) {
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
    PostList.prototype.showFavorites = function () {
        var _this = this;
        this.storage.get(this.route.substr(-10, 10) + '_favorites').then(function (favorites) {
            if (favorites && favorites.length) {
                _this.favorites = favorites;
                _this.items = favorites;
                _this.showSlider = false;
            }
            else {
                _this.presentToast('No Favorites to show');
            }
        });
    };
    PostList.prototype.showAll = function () {
        var _this = this;
        this.storage.get(this.route.substr(-10, 10) + '_posts').then(function (items) {
            _this.items = items;
        });
        if (this.navParams.data.show_slider && this.navParams.data.show_slider === "true") {
            this.showSlider = true;
        }
    };
    // Show alert in preview if not using https
    PostList.prototype.previewAlert = function (url) {
        if (!url) {
            return;
        }
        if (this.Device.platform != 'iOS' && this.Device.platform != 'Android' && url.indexOf('http://') >= 0) {
            alert('Cannot display http pages in browser preview. Please build app for device or use https.');
        }
    };
    // get data for slides
    PostList.prototype.loadSlides = function (route) {
        var _this = this;
        this.postService.load(route, '1').then(function (slides) {
            // Loads posts from WordPress API
            _this.slides = slides;
            _this.showSlider = true;
        }).catch(function (err) {
            _this.showSlider = false;
            console.error('Error getting posts', err);
        });
    };
    // changes the back button transition direction if app is RTL
    PostList.prototype.backRtlTransition = function () {
        var obj = {};
        if (this.platform.is('ios'))
            obj = { direction: 'forward' };
        this.nav.pop(obj);
    };
    PostList.prototype.doLogo = function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Content */])
    ], PostList.prototype, "content", void 0);
    PostList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/matt/projects/appp/ap3/src/pages/post-list/post-list.html"*/'<ion-header>\n  \n  <ion-navbar no-border-bottom>\n\n    <ion-buttons start>\n      <button *ngIf="rtlBack" (click)="backRtlTransition()" ion-button class="custom-back-button">\n          <ion-icon name="arrow-back"></ion-icon>\n          {{\'Back\' | translate }}\n      </button>\n\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n\n    </ion-buttons>\n\n    <img class="header-logo" *ngIf="show_header_logo" [src]="header_logo_url" />\n\n    <ion-title *ngIf="!show_header_logo">{{title | translate}}</ion-title>\n\n    <ion-buttons end>\n    <button ion-button class="search-button-header" (click)="toggleSearchBar()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    </ion-navbar>\n\n    <ion-toolbar *ngIf="showSearch">\n      <ion-searchbar placeholder="{{\'Search\' | translate }}" debounce="1000" (ionInput)="search($event)" (ionClear)="clearSearch()"></ion-searchbar>\n    </ion-toolbar>\n\n    <ion-toolbar *ngIf="doFavorites" id="favorites-toolbar">\n\n      <button ion-button clear (click)="showAll()">\n        {{ \'All\' | translate }}\n      </button>\n\n      <button ion-button clear (click)="showFavorites()">\n        {{ \'Favorites\' | translate }}\n      </button>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content [ngClass]="customClasses">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-slides *ngIf="showSlider" pager>\n\n    <ion-slide *ngFor="let slide of slides" [ngStyle]="{\'background-image\': \'url(\' + (slide.featured_image_urls ? slide.featured_image_urls.large : null) + \')\'}" (click)="itemTapped($event, slide)">\n\n      <h3 class="slide-title" *ngIf="slide.title && slide.title.rendered" [innerHTML]="slide.title.rendered"></h3>\n\n      <div *ngIf="slide.appp && slide.appp.post_list && slide.appp.post_list.slide_content" [innerHTML]="slide.appp.post_list.slide_content"></div>\n\n    </ion-slide>\n\n  </ion-slides>\n  \n  <ion-list *ngIf="defaultlist">\n\n    <ion-item-sliding *ngFor="let item of items" #slidingItem>\n      <button ion-item (click)="itemTapped($event, item)">\n\n      <ion-avatar item-left *ngIf="item.featured_image_urls">\n        <img *ngIf="item.featured_image_urls && item.featured_image_urls.thumbnail" src="{{item.featured_image_urls.thumbnail}}">\n        <img *ngIf="!item.featured_image_urls || !item.featured_image_urls.thumbnail" src="assets/default.png">\n      </ion-avatar>\n\n      <div *ngIf="item.appp && item.appp.post_list && item.appp.post_list.above_title" [innerHTML]="item.appp.post_list.above_title"></div>\n\n      <h2 *ngIf="item.title && item.title.rendered" [innerHTML]="item.title.rendered"></h2>\n\n      <div *ngIf="item.appp && item.appp.post_list && item.appp.post_list.below_title" [innerHTML]="item.appp.post_list.below_title"></div>\n\n      <p *ngIf="item.excerpt && item.excerpt.rendered" [innerHTML]="item.excerpt.rendered"></p>\n\n      <div *ngIf="item.appp && item.appp.post_list && item.appp.post_list.below_content" [innerHTML]="item.appp.post_list.below_content"></div>\n\n      </button>\n\n      <ion-item-options side="right" *ngIf="doFavorites">\n        <button ion-button color="primary" (click)="addFav(slidingItem, item)">\n          <ion-icon name="star-outline"></ion-icon>\n          {{ \'Favorite\' | translate }}\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <ion-list *ngIf="cardlist">\n\n    <ion-card (click)="itemTapped($event, item)" *ngFor="let item of items">\n      \n      <div class="card-featured-wrap" *ngIf="item.featured_image_urls && item.featured_image_urls.large">\n        <img src="{{item.featured_image_urls.large}}">\n      </div>\n\n      <div *ngIf="item.appp && item.appp.post_list && item.appp.post_list.above_title" [innerHTML]="item.appp.post_list.above_title"></div>\n\n      <ion-card-content>\n\n        <ion-card-title *ngIf="item.title && item.title.rendered">\n          <h2 [innerHTML]="item.title.rendered"></h2>\n        </ion-card-title>\n\n        <div *ngIf="item.appp && item.appp.post_list && item.appp.post_list.below_title" [innerHTML]="item.appp.post_list.below_title"></div>\n\n        <p *ngIf="item.excerpt && item.excerpt.rendered" [innerHTML]="item.excerpt.rendered"></p>\n\n      </ion-card-content>\n\n      <div *ngIf="item.appp && item.appp.post_list && item.appp.post_list.below_content" [innerHTML]="item.appp.post_list.below_content"></div>\n\n    </ion-card>\n\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n   <ion-infinite-scroll-content></ion-infinite-scroll-content>\n </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Users/matt/projects/appp/ap3/src/pages/post-list/post-list.html"*/
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
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */]])
    ], PostList);
    return PostList;
}());

//# sourceMappingURL=post-list.js.map

/***/ })

});
//# sourceMappingURL=6.js.map