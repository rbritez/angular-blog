"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostNewComponent = void 0;
var category_service_1 = require("./../../services/category.service");
var user_service_1 = require("./../../services/user.service");
// import { Router, ActivatedRoute, Params } from '@angular/router';
var post_1 = require("./../../models/post");
var core_1 = require("@angular/core");
var PostNewComponent = /** @class */ (function () {
    function PostNewComponent(userService, categoryService) {
        this.userService = userService;
        this.categoryService = categoryService;
        this.pageTitle = 'Crear nuevo Post';
        this.user = this.userService.getIdentity();
        this.category = this.categoryService.getCategories();
    }
    PostNewComponent.prototype.ngOnInit = function () {
        this.post = new post_1.Post(1, this.user.sub, 1, '', '', null, null);
        // console.log(this.post);
    };
    PostNewComponent.prototype.onSubmit = function (form) {
        console.log();
    };
    PostNewComponent = __decorate([
        core_1.Component({
            selector: 'app-post-new',
            templateUrl: './post-new.component.html',
            styleUrls: ['./post-new.component.css'],
            providers: [user_service_1.UserService, category_service_1.CategoryService]
        })
    ], PostNewComponent);
    return PostNewComponent;
}());
exports.PostNewComponent = PostNewComponent;
