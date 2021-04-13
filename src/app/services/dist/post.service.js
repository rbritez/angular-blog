"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var global_service_1 = require("./global.service");
var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.url = global_service_1.global.url;
    }
    PostService.prototype.save = function (token, post) {
        var json = JSON.stringify(post);
        var params = 'json=' + json;
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);
        return this.http.post(this.url + 'post', params, { headers: headers });
    };
    PostService = __decorate([
        core_1.Injectable()
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
