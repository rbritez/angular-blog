
import { routing , appRoutingProviders } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// import {HttpClient, HttpHeaders} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { CategoryNewComponent } from './components/categoryNew/category-new.component';
import { PostNewComponent } from './components/post-new/post-new.component';
import { CategoryComponent } from './components/category/category.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    HomeComponent,
    UserEditComponent,
    CategoryNewComponent,
    PostNewComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    routing,
    FormsModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    AngularFileUploaderModule
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
