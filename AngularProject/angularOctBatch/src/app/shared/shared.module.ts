import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamevalidationDirective } from '../namevalidation.directive';
import { CurrencyPipe1 } from '../currency1.pipe';
import { CustomPipe } from '../custom.pipe';



@NgModule({
  declarations: [
    NamevalidationDirective,
    CurrencyPipe1,
    CustomPipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[ NamevalidationDirective,
    CurrencyPipe1,
    CustomPipe
  ]
})
export class SharedModule { }
