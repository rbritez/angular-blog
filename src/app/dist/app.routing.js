"use strict";
exports.__esModule = true;
exports.routing = exports.appRoutingProviders = void 0;
var router_1 = require("@angular/router");
// IMPORTAR COMPONENTES CREADOS
var login_component_1 = require("./components/login/login.component");
var register_component_1 = require("./components/register/register.component");
var error_component_1 = require("./components/error/error.component");
var home_component_1 = require("./components/home/home.component");
var user_edit_component_1 = require("./components/user-edit/user-edit.component");
var category_new_component_1 = require("./components/categoryNew/category-new.component");
var post_new_component_1 = require("./components/post-new/post-new.component");
// DEFINIR LAS RUTAS
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'inicio', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'registro', component: register_component_1.RegisterComponent },
    { path: 'logout/:sure', component: login_component_1.LoginComponent },
    { path: 'ajustes', component: user_edit_component_1.UserEditComponent },
    { path: 'crear-categoria', component: category_new_component_1.CategoryNewComponent },
    { path: 'crear-post', component: post_new_component_1.PostNewComponent },
    // Ruta del error siempre ultimo
    { path: '**', component: error_component_1.ErrorComponent }
];
// EXPORTAR CONFIGURACION
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
