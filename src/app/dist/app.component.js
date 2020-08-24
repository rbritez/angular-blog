"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var category_service_1 = require("./services/category.service");
var global_service_1 = require("./services/global.service");
var user_service_1 = require("./services/user.service");
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(userService, categoryService) {
        this.userService = userService;
        this.categoryService = categoryService;
        this.title = 'Blog Angular';
        this.loadUser();
        this.url = global_service_1.global.url;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('webapp cargada correctamente');
        this.getCategories();
    };
    AppComponent.prototype.ngDoCheck = function () {
        this.loadUser();
    };
    AppComponent.prototype.loadUser = function () {
        this.identity = this.userService.getIdentity();
        this.token = this.userService.getToken();
    };
    AppComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (response) {
            if (response.status) {
                _this.categories = response.categories;
                console.log(response);
            }
        }, function (error) {
            _this.status = 'error';
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [user_service_1.UserService, category_service_1.CategoryService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
