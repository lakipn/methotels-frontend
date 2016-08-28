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
var filterkvadratura_pipe_1 = require("../filterkvadratura.pipe");
var filterbrojkreveta_pipe_1 = require("../filterbrojkreveta.pipe");
var AllroomsComponent = (function () {
    function AllroomsComponent(httpService) {
        this.httpService = httpService;
        this.rooms = [];
        this.filterKvadratura = '';
        this.filterKreveti = 1;
    }
    AllroomsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.allrooms().subscribe(function (response) { return _this.rooms = response['rooms']; });
    };
    AllroomsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-allrooms',
            templateUrl: 'allrooms.component.html',
            styleUrls: ['allrooms.component.css'],
            pipes: [filterkvadratura_pipe_1.FilterkvadraturaPipe, filterbrojkreveta_pipe_1.FilterbrojkrevetaPipe]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], AllroomsComponent);
    return AllroomsComponent;
}());
exports.AllroomsComponent = AllroomsComponent;
//# sourceMappingURL=allrooms.component.js.map