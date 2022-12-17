import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexSiteComponent} from "./index-site/index-site.component";


const routes: Routes = [

  {
    path: 'site', component: IndexSiteComponent,
    children: [
      // {path: 'planing',
      //   loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
      // },
      {path: '',
        loadChildren: () => import('../site/site.module').then(m => m.SiteModule)

      },
      // {path: 'planing',
      //   loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
      // },



    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesSiteRoutingModule { }
