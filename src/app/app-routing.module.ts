import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { PagesComponent } from './pages/pages.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { LoginComponent } from './user/login/login.component';
import { UserloginGuard } from './user/services/login/userlogin.guard';
import { BlogsComponent } from './blogs/blogs.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginGuard } from './services/Admin/admin-login.guard';
import { AdminUserComponent } from './Admin/admin-user/admin-user.component';
import { ForgetpassComponent } from './user/forgetpass/forgetpass.component';
import { AdminAddCategoryComponent } from './Admin/admin-add-category/admin-add-category.component';
import { AdminAddSubCategoryComponent } from './Admin/admin-add-sub-category/admin-add-sub-category.component';
import { AdminblogComponent } from './Admin/adminblog/adminblog.component';
import { UpdatePassComponent } from './user/update-pass/update-pass.component';
import { VerifyformComponent } from './verifyform/verifyform.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component'
import { AdminSignupComponent } from './admin-signup/admin-signup.component'



const routes: Routes = [
  {
    path:"",
    component:BodyComponent
  },
  
  {
    path:"nav",
    component:NavbarComponent
  },

  {
    path:"header",
    component:HeaderComponent
  },

  {
    path:"blogs",
    component:BlogsComponent

  },

  {
    path:"forgetpass",
    component:ForgetpassComponent
  },



  {
    path:"user/update-pass/:token",
    component:UpdatePassComponent
  },

  {
    path:"pages",
    component:PagesComponent
  },

  {
    path:"news",
    component:NewsComponent
  },

  {
    path:"contact",
    component:ContactComponent
  },

  {
    path:"verifyform/:token",
    component:VerifyformComponent
  },

  {
    path:"Admin/adminblog",
    component:AdminblogComponent, canActivate:[AdminLoginGuard]
  },

  {
    path:"dashboard",
    component: DashboardComponent, canActivate:[UserloginGuard]
  },

  {
    path:"signup",
    component:SignupComponent
  },

  {
    path:"Admin/admin-login",
    component:AdminLoginComponent
  },

  {
    path:"Admin/admin-addcategory",
    component:AdminAddCategoryComponent, canActivate:[AdminLoginGuard]
  },

  {
   path:"Admin/admin-addsubcategory",
   component:AdminAddSubCategoryComponent, canActivate:[AdminLoginGuard]
  },



  {
    path:"Admin/admin-user",
    component:AdminUserComponent, canActivate:[AdminLoginGuard]
  },

  {
    path:"Admin/admin-dashboard",
    component:AdminDashboardComponent, canActivate:[AdminLoginGuard]
  },

  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"Myadmin",
    component:AdminSignupComponent
  },

    {
    path:"**",
    component:PageNotfoundComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
