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
var router_1 = require("@angular/router");
var RegisterComponent = (function () {
    function RegisterComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.token = '';
        this.user = {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: ''
        };
        this.response = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.isValidFirstName = function () {
        return !(this.user.firstname.length < 5);
    };
    RegisterComponent.prototype.isValidLastName = function () {
        return !(this.user.lastname.length < 5);
    };
    RegisterComponent.prototype.isValidUsername = function () {
        return !(this.user.username.length < 5);
    };
    RegisterComponent.prototype.isValidPassword = function () {
        return !(this.user.password.length < 5);
    };
    RegisterComponent.prototype.isValidEmail = function () {
        return !(this.user.email.length < 5);
    };
    RegisterComponent.prototype.isValidForm = function () {
        return (this.isValidEmail && this.isValidFirstName() && this.isValidLastName() && this.isValidUsername() && this.isValidPassword());
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.httpService.register(this.user).subscribe(function (res) {
            _this.response = res;
            _this.token = _this.response["token"];
            _this.httpService.token = _this.response["token"];
            _this.router.navigate(['login']);
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-register',
            templateUrl: 'register.component.html',
            styleUrls: ['register.component.css'],
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map