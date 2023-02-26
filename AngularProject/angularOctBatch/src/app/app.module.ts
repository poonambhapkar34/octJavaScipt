import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule } from "@angular/forms";
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { LandingComponent } from './landing/landing.component';
import { AdminloginModule } from './adminlogin/adminlogin.module';
import { SharedModule } from './shared/shared.module';
//import { CustomPipe } from './custom.pipe';
//import { CurrencyPipe1 } from './currency1.pipe';
import { HttpClientModule } from '@angular/common/http';
 //imported formModule for ngModule
console.log('root module');

@NgModule({
  declarations: [ //compo+dire+pipe
    AppComponent,
    LoginformComponent,
    StudentloginComponent,
    LandingComponent,
   // CustomPipe,
   // CurrencyPipe1,
  
  
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule
    // AdminloginModule
  ],
  // exports :[ NamevalidationDirective],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
