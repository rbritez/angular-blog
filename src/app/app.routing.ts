// IMPORTS NECESARIOS
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORTAR COMPONENTES CREADOS
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { CategoryNewComponent } from './components/categoryNew/category-new.component';
import { PostNewComponent } from './components/post-new/post-new.component';
import { CategoryComponent }  from './components/category/category.component';


// DEFINIR LAS RUTAS
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'logout/:sure', component: LoginComponent},
  {path: 'ajustes', component: UserEditComponent},
  {path: 'crear-categoria', component: CategoryNewComponent},
  {path: 'crear-post', component: PostNewComponent},
  {path: 'categorias',component: CategoryComponent},
  // Ruta del error siempre ultimo
  {path: '**', component: ErrorComponent}
];
// EXPORTAR CONFIGURACION
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
