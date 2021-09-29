(self["webpackChunkTestApp"] = self["webpackChunkTestApp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 6770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 1339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.service */ 9353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);








let LoginPage = class LoginPage {
    constructor(fb, service, router, alertController, toastController, loadingController) {
        this.fb = fb;
        this.service = service;
        this.router = router;
        this.alertController = alertController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.submitted = false;
    }
    ngOnInit() {
        this.myForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
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
                    "UserName": this.myForm.value.username,
                    "Password": this.myForm.value.password,
                };
                const loading = yield this.loadingController.create({
                    cssClass: 'my-custom-class',
                    message: 'Please wait...',
                    duration: 2000
                });
                yield loading.present();
                this.service.signIn(selecPara).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    loading.dismiss();
                    console.log(res);
                    const toast = yield this.toastController.create({
                        message: 'Login Successfully',
                        duration: 2000
                    });
                    toast.present();
                    this.router.navigateByUrl('/userlist');
                }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    loading.dismiss();
                    const toast = yield this.toastController.create({
                        message: 'Login Failed',
                        duration: 2000
                    });
                    toast.present();
                }));
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 1339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ion-border {\n  border: 1px solid gray;\n  border-radius: 2px;\n}\n\n.signup-form {\n  margin-top: 4em;\n}\n\nh3 {\n  margin-top: 4em;\n}\n\n.error-msg {\n  color: red;\n  margin-left: 5px;\n}\n\n.account {\n  margin: 5px;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDRTtFQUNFLGVBQUE7QUFFSjs7QUFBRTtFQUNFLGVBQUE7QUFHSjs7QUFERTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBS0oiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1ib3JkZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB9XG4gIC5zaWdudXAtZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogNGVtO1xuICB9XG4gIGgzIHtcbiAgICBtYXJnaW4tdG9wOiA0ZW07XG4gIH1cbiAgLmVycm9yLW1zZyB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBtYXJnaW4tbGVmdDogNXB4OyBcbiAgfVxuICAuYWNjb3VudCB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gIH0gIl19 */");

/***/ }),

/***/ 6770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<ion-content>\n    <ion-content [fullscreen]=\"true\">\n        <div class=\"ion-margin-top\">\n          <h3 class=\"ion-margin-top ion-text-center\">SIGN IN</h3>\n          <div class=\"signup-form \">\n            <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n              <ion-grid fixed>\n                  <ion-row>\n                      <ion-col size=\"12\" size-sm=\"9\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\">\n                        <ion-item lines=\"none\" class=\"ion-border\">\n                          <ion-icon name=\"mail-outline\" class=\"ion-padding-right\"> </ion-icon>\n                          <ion-input type=\"text\" clearInput=true formControlName=\"username\" placeholder=\"Enter full name\"></ion-input>\n                        </ion-item>\n                      </ion-col>\n                    </ion-row>\n                      <small class=\"error-msg\" *ngIf=\"submitted && myForm.controls.username.errors.required\"> Full name is required</small>\n      \n              \n                <ion-row>\n                  <ion-col size=\"12\" size-sm=\"9\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\">\n                    <ion-item lines=\"none\" class=\"ion-border\">\n                        <ion-icon name=\"lock-closed-outline\" class=\"ion-margin-right\"> </ion-icon>\n                      <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Enter password\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <small class=\"error-msg\" *ngIf=\"submitted && myForm.controls.password.errors.required\"> password is required</small>\n                \n                  <p class=\"account\">New User? <a [routerLink]=\"['/home']\">Sign Up</a></p>\n                \n  \n                <ion-row class=\"ion-margin-top\">\n                  <ion-col  size=\"12\" size-sm=\"9\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\">\n                  <ion-button type=\"submit\" expand=\"block\" fill=\"outline\" color=\"success\">\n                    Sign In\n                  </ion-button>\n                </ion-col>\n                </ion-row>\n              </ion-grid>\n            </form>\n          </div>\n        </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map