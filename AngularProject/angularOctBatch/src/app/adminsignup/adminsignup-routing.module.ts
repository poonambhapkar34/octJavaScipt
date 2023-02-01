import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsignupComponent } from './adminsignup.component';

const routes: Routes = [{ path: '', component: AdminsignupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsignupRoutingModule { }
