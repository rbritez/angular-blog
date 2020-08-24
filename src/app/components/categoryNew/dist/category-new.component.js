"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CategoryNewComponent = void 0;
var category_service_1 = require("./../../services/category.service");
var category_1 = require("../../models/category");
var user_service_1 = require("../../services/user.service");
var core_1 = require("@angular/core");
var CategoryNewComponent = /** @class */ (function () {
    function CategoryNewComponent(userService, categoryService) {
        this.userService = userService;
        this.categoryService = categoryService;
        this.pageTitle = 'Crear nueva Categoria';
        this.token = this.userService.getToken();
        this.category = new category_1.Category(1, ''); // cargo los datos del formulario
    }
    CategoryNewComponent.prototype.ngOnInit = function () {
    };
    CategoryNewComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.categoryService.save(this.token, this.category).subscribe(function (response) {
            if (response.status === 'success') {
                _this.status = 'success';
                form.reset();
            }
            else {
                _this.status = 'error';
            }
        }, function (error) {
            _this.status = 'error';
        });
    };
    CategoryNewComponent = __decorate([
        core_1.Component({
            selector: 'app-category-new',
            templateUrl: 'categoryNew.component.html',
            styleUrls: ['./categoryNew.component.css'],
            providers: [user_service_1.UserService, category_service_1.CategoryService]
        })
    ], CategoryNewComponent);
    return CategoryNewComponent;
}());
exports.CategoryNewComponent = CategoryNewComponent;
