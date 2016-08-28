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
var FilterbrojkrevetaPipe = (function () {
    function FilterbrojkrevetaPipe() {
    }
    FilterbrojkrevetaPipe.prototype.transform = function (value, args) {
        if (value.length == 0 || args == null || args[0] == null || args[0].length == 0)
            return value;
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (parseInt(item['BEDS']) == parseInt(args[0]))
                resultArray.push(item);
        }
        return resultArray;
    };
    FilterbrojkrevetaPipe = __decorate([
        core_1.Pipe({
            name: 'filterbrojkreveta'
        }), 
        __metadata('design:paramtypes', [])
    ], FilterbrojkrevetaPipe);
    return FilterbrojkrevetaPipe;
}());
exports.FilterbrojkrevetaPipe = FilterbrojkrevetaPipe;
//# sourceMappingURL=filterbrojkreveta.pipe.js.map