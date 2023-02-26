import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APIRoutingModule } from './api-routing.module';
import { APIComponent } from './api.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    APIComponent
  ],
  imports: [
    CommonModule,
    APIRoutingModule,
    HttpClientModule
  ]
})
export class APIModule { }
