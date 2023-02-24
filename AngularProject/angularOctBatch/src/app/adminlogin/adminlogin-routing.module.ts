import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { ChildComponent } from './child/child.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path: '', component: AdminlandingComponent},
  {path: 'adminSignIn', component: AdminsigninComponent},
  {path : 'parent', component:ParentComponent},
  {path : 'parechildnt', component:ChildComponent},
  //wildcard routing/universal routing
  {path : '**', component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminloginRoutingModule { }
