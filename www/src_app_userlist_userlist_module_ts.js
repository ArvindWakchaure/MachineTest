(self["webpackChunkTestApp"] = self["webpackChunkTestApp"] || []).push([["src_app_userlist_userlist_module_ts"],{

/***/ 2187:
/*!*****************************************************!*\
  !*** ./src/app/userlist/userlist-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserlistPageRoutingModule": () => (/* binding */ UserlistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _userlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userlist.page */ 2972);




const routes = [
    {
        path: '',
        component: _userlist_page__WEBPACK_IMPORTED_MODULE_0__.UserlistPage
    }
];
let UserlistPageRoutingModule = class UserlistPageRoutingModule {
};
UserlistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserlistPageRoutingModule);



/***/ }),

/***/ 7333:
/*!*********************************************!*\
  !*** ./src/app/userlist/userlist.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserlistPageModule": () => (/* binding */ UserlistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _userlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userlist-routing.module */ 2187);
/* harmony import */ var _userlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userlist.page */ 2972);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-lazyload-image */ 7260);








let UserlistPageModule = class UserlistPageModule {
};
UserlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__.LazyLoadImageModule,
            _userlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserlistPageRoutingModule
        ],
        declarations: [_userlist_page__WEBPACK_IMPORTED_MODULE_1__.UserlistPage]
    })
], UserlistPageModule);



/***/ }),

/***/ 2972:
/*!*******************************************!*\
  !*** ./src/app/userlist/userlist.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserlistPage": () => (/* binding */ UserlistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_userlist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./userlist.page.html */ 119);
/* harmony import */ var _userlist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userlist.page.scss */ 7249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.service */ 9353);





let UserlistPage = class UserlistPage {
    constructor(service) {
        this.service = service;
        this.userData = [];
        this.isLoadedData = false;
        this.page_number = 1;
        this.page_limit = 10;
        this.searchTerm = '';
        this.defaultImage = 'https://cdn-icons-png.flaticon.com/512/149/149071.png';
    }
    ngOnInit() {
        setTimeout(() => {
            this.isLoadedData = true;
        }, 3000);
        this.getUserList(false, '');
    }
    getUserList(isLoad, event) {
        let selecPara = {
            "pageNo": this.page_number,
            "recordPerPage": this.page_limit
        };
        this.service.getUser(selecPara).subscribe(res => {
            console.log(res);
            // this.userData = res;
            for (let i = 0; i < res.length; i++) {
                this.userData.push(res[i]);
            }
            if (isLoad) {
                event.target.complete();
            }
            this.page_number++;
        }, error => {
            console.log(error);
        });
    }
    doInfinite(event) {
        this.getUserList(true, event);
    }
    setFilteredLocations(searchbar) {
        let text = searchbar.target.value;
        if (text == null || text == undefined || text == '' || text.length == 0) {
            this.getUserList(false, '');
        }
        this.userData = this.userData.filter((location) => {
            if (location.FullName.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
                location.Email.toLowerCase().indexOf(text.toLowerCase()) > -1) {
                return true;
            }
            return false;
        });
    }
};
UserlistPage.ctorParameters = () => [
    { type: _service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService }
];
UserlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-userlist',
        template: _raw_loader_userlist_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_userlist_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserlistPage);



/***/ }),

/***/ 7249:
/*!*********************************************!*\
  !*** ./src/app/userlist/userlist.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VybGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 119:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userlist/userlist.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title >User List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-item-divider sticky style=\"border: 0\">\n        <ion-searchbar [(ngModel)]=\"searchTerm\" (ionInput)=\"setFilteredLocations($event)\"></ion-searchbar>\n      </ion-item-divider>\n    \n  <ng-container *ngIf=\"isLoadedData; else elseTemplate\">\n    <ion-list>\n    <ion-item *ngFor=\"let item of userData\">\n        <ion-avatar slot=\"start\">\n          <img [defaultImage]=\"defaultImage\" [lazyLoad]=\"item.ProfileImageUrl\">\n        </ion-avatar>\n        <ion-label>\n          <h2>{{item.FullName}}</h2>\n          <p>{{item.Email}}</p>\n          <p>{{item.MobileNo}}</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n</ng-container>\n\n<ng-template #elseTemplate>\n\n  <ion-item *ngFor=\"let item of [1,2,3,4,5,6,7,8,9,10]\">\n    <ion-avatar slot=\"start\">\n      <ion-skeleton-text animated></ion-skeleton-text>\n    </ion-avatar>\n    <ion-label>\n      <h2><ion-skeleton-text animated style=\"width: 100px;\"></ion-skeleton-text></h2>\n      <p><ion-skeleton-text animated style=\"width: 180px;\"></ion-skeleton-text></p>\n      <p><ion-skeleton-text animated style=\"width: 180px;\"></ion-skeleton-text></p>\n    </ion-label>\n  </ion-item>\n\n</ng-template>\n\n<ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n  <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_userlist_userlist_module_ts.js.map