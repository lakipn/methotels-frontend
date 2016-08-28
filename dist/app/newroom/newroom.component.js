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
var NewroomComponent = (function () {
    function NewroomComponent(httpService) {
        this.httpService = httpService;
        this.room = {
            roomname: '',
            beds: 1,
            size: '',
            tv: 1
        };
        this.addedRoom = false;
        this.errorAddingRoom = '';
    }
    NewroomComponent.prototype.ngOnInit = function () {
    };
    NewroomComponent.prototype.isValidRoomname = function () {
        return this.room.roomname.length >= 3;
    };
    NewroomComponent.prototype.isValidBeds = function () {
        return this.room.beds >= 0;
    };
    NewroomComponent.prototype.isValidSize = function () {
        return this.room.size.length >= 2;
    };
    NewroomComponent.prototype.isValidTv = function () {
        return this.room.tv >= 0 && this.room.tv <= 1;
    };
    NewroomComponent.prototype.isValidForm = function () {
        return this.isValidBeds() && this.isValidRoomname() && this.isValidSize() && this.isValidTv();
    };
    NewroomComponent.prototype.onSubmit = function () {
        var _this = this;
        this.httpService.newroom(this.room).subscribe(function (data) {
            console.log(data);
            if (data['status'] == 'OK')
                _this.addedRoom = true;
            if (data['status'] == 'ERROR')
                _this.errorAddingRoom = data['error'];
        });
    };
    NewroomComponent.prototype.isError = function () {
        return this.errorAddingRoom != '';
    };
    NewroomComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-newroom',
            templateUrl: 'newroom.component.html',
            styleUrls: ['newroom.component.css']
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], NewroomComponent);
    return NewroomComponent;
}());
exports.NewroomComponent = NewroomComponent;
//# sourceMappingURL=newroom.component.js.map