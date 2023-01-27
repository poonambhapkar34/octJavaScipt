import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminloginRoutingModule } from './adminlogin-routing.module';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { FormsModule } from '@angular/forms';


console.log('In admin module')
@NgModule({
  declarations: [
    AdminsigninComponent
  ],
  imports: [
    CommonModule,
    AdminloginRoutingModule,
    FormsModule
  ],
  exports : [
    AdminsigninComponent //to access in other modules
  ]
})
export class AdminloginModule { 
;
}
