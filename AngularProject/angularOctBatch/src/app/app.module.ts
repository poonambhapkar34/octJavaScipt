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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { CustomPipe } from './custom.pipe';
//import { CurrencyPipe1 } from './currency1.pipe';
// import { HttpClientModule } from '@angular/common/http';
 //imported formModule for ngModule
 import {MatButtonModule} from '@angular/material/button';
 import {MatCheckboxModule} from '@angular/material/checkbox';
import { ModelComponent } from './model/model.component';
import { ParentModelComponent } from './parent-model/parent-model.component';
import {MatDialogModule} from '@angular/material/dialog';
console.log('root module');

@NgModule({
  declarations: [ //compo+dire+pipe
    AppComponent,
   // LoginformComponent,
    StudentloginComponent,
    LandingComponent,
    ModelComponent,
    ParentModelComponent,
   // CustomPipe,
   // CurrencyPipe1,
  
  
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule
    //HttpClientModule
    // AdminloginModule
  ],
  // exports :[ NamevalidationDirective],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
