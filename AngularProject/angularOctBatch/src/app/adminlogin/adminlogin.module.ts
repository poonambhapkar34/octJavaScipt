import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminloginRoutingModule } from './adminlogin-routing.module';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SharedModule } from '../shared/shared.module';
import { NumbersonlyDirective } from './numbersonly.directive';

console.log('admin module');

console.log('In admin module')
@NgModule({
  declarations: [
    AdminsigninComponent,
    AdminlandingComponent,
    PagenotfoundComponent,
    NumbersonlyDirective,
    
  ],
  imports: [
    CommonModule,
    AdminloginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  //exports : [
  //  SharedModule
   // AdminsigninComponent //to access in other modules
  //]
})
export class AdminloginModule { 
;
}
