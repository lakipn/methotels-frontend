"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_service_1 = require("../http.service");
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.token = '';
        this.user = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.token != '') {
            console.log(this.token);
        }
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.httpService.login(this.user).subscribe(function (response) {
            _this.httpService.token = response["token"];
            //console.log(this.httpService.token);
            // rutiranje
        });
    };
    LoginComponent.prototype.isValidUsername = function (username) {
        return !(username.value.length < 5);
    };
    LoginComponent.prototype.isValidPassword = function (password) {
        return !(password.value.length < 5);
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css'],
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map