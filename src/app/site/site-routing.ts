import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsiteComponent} from "./newsite/newsite.component";
import {SearchSiteComponent} from "./search-site/search-site.component";
import {InfosSiteComponent} from "./infos-site/infos-site.component";
import {TechnoOverviewComponent} from "./level4/techno-overview/techno-overview.component";
import {ListSitesComponent} from "./list-sites/list-sites.component";
import {EditSiteComponent} from "./edit-site/edit-site.component";
import {BailComponent} from "./level3/bail/bail.component";


const routes: Routes = [

  {    path: '', component: SearchSiteComponent},

  {    path: 'new', component: NewsiteComponent,},
  {path: 'cand/:codesite', component: InfosSiteComponent,},

 // cand/bysite/A16MT122
  {path: 'search', component: SearchSiteComponent},
  {path: 'list', component: ListSitesComponent},
  {path: 'edit', component: EditSiteComponent},
  {path: 'bail/:codesite', component: BailComponent},


  {path: 'techno/overview', component: TechnoOverviewComponent},

  { path: '**', pathMatch: 'full',
    component: SearchSiteComponent },
]
//   {
//     pat: '', component: ReadonlyComponent ,
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
export class SiteRoutingModule { }
