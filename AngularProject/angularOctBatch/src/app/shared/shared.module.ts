import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamevalidationDirective } from '../namevalidation.directive';



@NgModule({
  declarations: [
    NamevalidationDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[ NamevalidationDirective]
})
export class SharedModule { }
