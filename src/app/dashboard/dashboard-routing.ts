import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {Index2Component} from "./index2/index2.component";

const routes: Routes = [

  {
    path: '', component: IndexComponent
  },

  {
    path: 'index2', component: Index2Component,

  },

]
//   {
//     path: '', component: ReadonlyComponent ,
//
//   },
// {
//   path: 'manager', component: ManagerComponent,
//   canActivate:[AuthGuard]
// },
// {
//   path: 'director', component: DirectorComponent,
//   canActivate:[AuthGuard]
// },
//
// {
//   path: 'officer', component: OfficerComponent,
//   canActivate:[AuthGuard]
// },
// {
//   path: 'read', component: ReadonlyComponent,
//   canActivate:[AuthMainGuard]
//
// }
// ,
// {
//   path: 'user', component: UserComponent,
//   canActivate:[AuthGuard]
// }
//];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
