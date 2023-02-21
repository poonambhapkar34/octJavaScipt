import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule } from "@angular/forms";
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { LandingComponent } from './landing/landing.component';
import { AdminloginModule } from './adminlogin/adminlogin.module';
import { NamevalidationDirective } from './namevalidation.directive';
 //imported formModule for ngModule
console.log('root module');

@NgModule({
  declarations: [ //compo+dire
    AppComponent,
    LoginformComponent,
    StudentloginComponent,
    LandingComponent,
   // NamevalidationDirective,
  
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // AdminloginModule
  ],
  // exports :[ NamevalidationDirective],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
