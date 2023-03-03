import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminloginRoutingModule } from './adminlogin-routing.module';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SharedModule } from '../shared/shared.module';
import { NumbersonlyDirective } from './numbersonly.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SubjecttestComponent } from './subjecttest/subjecttest.component';
import { MatButtonModule } from '@angular/material/button';

console.log('admin module');

console.log('In admin module')
@NgModule({
  declarations: [
    AdminsigninComponent,
    AdminlandingComponent,
    PagenotfoundComponent,
    NumbersonlyDirective,
    ParentComponent,
    ChildComponent,
    SubjecttestComponent,
    
  ],
  imports: [
    CommonModule,
    AdminloginRoutingModule,
    FormsModule,
    MatButtonModule,
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
