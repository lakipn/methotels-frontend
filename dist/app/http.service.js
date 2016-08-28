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
var http_1 = require('@angular/http');
require('rxjs/Rx');
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.token = '';
    }
    HttpService.prototype.login = function (user) {
        var body = 'username=' + user.username + '&password=' + user.password;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://localhost/methotels/backend/login.php', body, {
            headers: headers
        }).map(function (response) { return response.json(); });
    };
    HttpService.prototype.register = function (user) {
        //const body = JSON.stringify(user);
        var body = 'firstname=' + user.firstname + '&lastname=' + user.lastname + '&email=' + user.email + '&username=' + user.username + '&password=' + user.password;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://localhost/methotels/backend/register.php', body, {
            headers: headers
        })
            .map(function (response) { return response.json(); });
    };
    HttpService.prototype.newroom = function (room) {
        var body = 'roomname=' + room.roomname + '&beds=' + room.beds + '&size=' + room.size + '&tv=' + room.tv;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        if (this.token != '')
            headers.append('Token', this.token);
        return this.http.post('http://localhost/methotels/backend/newroom.php', body, {
            headers: headers
        }).map(function (response) { return response.json(); });
    };
    HttpService.prototype.allrooms = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.get('http://localhost/methotels/backend/allrooms.php', {
            headers: headers
        }).map(function (response) { return response.json(); });
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map