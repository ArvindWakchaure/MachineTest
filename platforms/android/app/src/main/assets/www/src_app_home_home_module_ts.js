(self["webpackChunkTestApp"] = self["webpackChunkTestApp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.service */ 9353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);








let HomePage = class HomePage {
    constructor(fb, service, router, toastController, alertController, loadingController) {
        this.fb = fb;
        this.service = service;
        this.router = router;
        this.toastController = toastController;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.submit = false;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    ngOnInit() {
        this.myForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(100)]],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('[a-zA-Z0-9.-_-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')])],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            password: ['sankalp']
        });
    }
    change(event) {
        console.log(event.target.value);
        let input = event.target.value;
        (input.length > 10) ? this.submit = true : this.submit = false;
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // this.router.navigate(['/userlist']);
            this.submitted = true;
            if (!this.myForm.valid) {
                console.log('all fields required');
            }
            else {
                console.log(this.myForm.value);
                let selecPara = {
                    "FullName": this.myForm.value.name,
                    "Email": this.myForm.value.email,
                    "MobileNo": this.myForm.value.mobile,
                    "Password": "sankalp",
                };
                const loading = yield this.loadingController.create({
                    cssClass: 'my-custom-class',
                    message: 'Please wait...',
                    duration: 2000
                });
                yield loading.present();
                this.service.signUp(selecPara).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    loading.dismiss();
                    console.log(res);
                    const alert = yield this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Congratulations!',
                        message: `You are registered successfully`,
                        buttons: [{
                                text: 'OK',
                                handler: (() => {
                                    this.router.navigateByUrl('/userlist');
                                })
                            }]
                    });
                    yield alert.present();
                }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    loading.dismiss();
                    console.log(error);
                    const toast = yield this.toastController.create({
                        message: `${error}`,
                        duration: 2000
                    });
                    toast.present();
                }));
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ion-border {\n  border: 1px solid gray;\n  border-radius: 2px;\n}\n\n.signup-form {\n  margin-top: 4em;\n}\n\nh3 {\n  margin-top: 4em;\n}\n\n.error-msg {\n  color: red;\n  margin-left: 5px;\n}\n\n.account {\n  margin: 5px;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFLRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLnNpZ251cC1mb3JtIHtcbiAgbWFyZ2luLXRvcDogNGVtO1xufVxuaDMge1xuICBtYXJnaW4tdG9wOiA0ZW07XG59XG4uZXJyb3ItbXNnIHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLWxlZnQ6IDVweDsgXG59XG4uYWNjb3VudCB7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nLWxlZnQ6MTBweDtcbn0gIl19 */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"ion-margin-top\">\n    <h3 class=\"ion-margin-top ion-text-center\">SIGN UP</h3>\n    <div class=\"signup-form \">\n      <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n        <ion-grid fixed>\n            <ion-row>\n                <ion-col size=\"12\" size-sm=\"9\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\">\n                  <ion-item lines=\"none\" class=\"ion-border\">\n                    <ion-icon name=\"mail-outline\" class=\"ion-padding-right\"> </ion-icon>\n                    <ion-input type=\"text\" clearInput=true formControlName=\"name\" placeholder=\"Enter full name\"></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n                <small class=\"error-msg\" *ngIf=\"submitted && myForm.controls.name.errors.required\"> Full name is required</small>\n                <small class=\"error-msg\" *ngIf=\"submitted && myForm.controls.name.errors.maxlength\"> Full name length maximum 100</small>\n\n          <ion-row>\n            <ion-col size=\"12\" size-sm=\"9\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\">\n              <ion-item lines=\"none\" class=\"ion-border\">\n                <ion-icon name=\"mail-outline\" class=\"ion-padding-right\"> </ion-icon>\n                <ion-input type=\"email\" clearInput=true formControlName=\"email\" placeholder=\"Enter Email\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n            <small class=\"error-msg\" *ngIf=\"submitted && myForm.controls.email.errors.required\"> Email is required</small>\n            <small class=\"error-msg\" *ngIf=\"myForm.controls.email.errors.pattern\"> Invalid email pattern</small>\n\n          <ion-row>\n            <ion-col size=\"12\" size-sm=\"9\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\">\n              <ion-item lines=\"none\" class=\"ion-border\" >\n                  <ion-icon name=\"call-outline\" class=\"ion-margin-right\"> </ion-icon>\n                <ion-input type=\"number\" clearInput=true  formControlName=\"mobile\" (ionInput)=\"change($event)\" placeholder=\"Enter mobile\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <small class=\"error-msg\" *ngIf=\"submitted && myForm.controls.mobile.errors.required\"> Mobile number is required</small>\n          <small class=\"error-msg\" *ngIf=\"submit\"> Mobile number should be 10 digit</small>\n          \n          <ion-row>\n            <ion-col size=\"12\" size-sm=\"9\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\">\n              <ion-item lines=\"none\" class=\"ion-border\">\n                  <ion-icon name=\"lock-closed-outline\" class=\"ion-margin-right\"> </ion-icon>\n                <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Enter password\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          \n            <p class=\"account\">Already have account? <a [routerLink]=\"['/login']\">Login</a></p>\n         \n          <ion-row class=\"ion-margin-top\">\n            <ion-col  size=\"12\" size-sm=\"9\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\">\n            <ion-button type=\"submit\" expand=\"block\" fill=\"outline\" color=\"success\">\n              sign up\n            </ion-button>\n          </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </div>\n  </div>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map