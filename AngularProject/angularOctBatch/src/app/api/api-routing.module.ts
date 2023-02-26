import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APIComponent } from './api.component';

const routes: Routes = [{ path: '', component: APIComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class APIRoutingModule { }
