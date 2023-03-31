import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginformComponent } from './loginform/loginform.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { ParentModelComponent } from './parent-model/parent-model.component';

const routes: Routes = [
  {path : '', component : LandingComponent},
  {path : 'loginform' , component : LoginformComponent},
  {path : 'studentLogin' , component : StudentloginComponent},
  {path : 'landing' , component: LandingComponent},
  {
    path :'parentModel' ,component:ParentModelComponent
  },
  //lazy loading
  {path : 'adminLogin', loadChildren : ()=> import('./adminlogin/adminlogin.module').then(m=>m.AdminloginModule)},
  { path: 'adminsignup', loadChildren: () => import('./adminsignup/adminsignup.module').then(m => m.AdminsignupModule) },
  { path: 'directives', loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule) },
  { path: 'API', loadChildren: () => import('./api/api.module').then(m => m.APIModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
