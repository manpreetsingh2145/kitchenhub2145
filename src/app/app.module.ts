import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { PagesComponent } from './pages/pages.component';
import { PostComponent } from './post/post.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { LoginComponent } from './user/login/login.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminUserComponent } from './Admin/admin-user/admin-user.component';
import { ForgetpassComponent } from './user/forgetpass/forgetpass.component';
import { AdminAddCategoryComponent } from './Admin/admin-add-category/admin-add-category.component';
import { AdminAddSubCategoryComponent } from './Admin/admin-add-sub-category/admin-add-sub-category.component';
import { AdminblogComponent } from './Admin/adminblog/adminblog.component';
import { UpdatePassComponent } from './user/update-pass/update-pass.component';
import { VerifyformComponent } from './verifyform/verifyform.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    BodyComponent,
    HeaderComponent,
    PagesComponent,
    PostComponent,
    NewsComponent,
    ContactComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    BlogsComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminUserComponent,
    ForgetpassComponent,
    AdminAddCategoryComponent,
    AdminAddSubCategoryComponent,
    AdminblogComponent,
    UpdatePassComponent,
    VerifyformComponent,
    PageNotfoundComponent,
    AdminSignupComponent,

   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
