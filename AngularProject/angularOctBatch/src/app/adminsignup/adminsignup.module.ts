import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsignupRoutingModule } from './adminsignup-routing.module';
import { AdminsignupComponent } from './adminsignup.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminsignupComponent
  ],
  imports: [
    CommonModule,
    AdminsignupRoutingModule,
    FormsModule
  ]
})
export class AdminsignupModule { }
