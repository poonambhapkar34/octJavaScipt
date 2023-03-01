import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamevalidationDirective } from '../namevalidation.directive';
import { CurrencyPipe1 } from '../currency1.pipe';
import { CustomPipe } from '../custom.pipe';
import { HttpClientModule } from '@angular/common/http';
import { LoginformComponent } from '../loginform/loginform.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    NamevalidationDirective,
    CurrencyPipe1,
    CustomPipe,
    LoginformComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[ NamevalidationDirective,
    CurrencyPipe1,
    CustomPipe
  ]
})
export class SharedModule { }
