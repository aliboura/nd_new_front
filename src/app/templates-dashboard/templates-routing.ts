import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from "./index/index.component";


const routes: Routes = [

  {
    path: '', component: IndexComponent,
    children: [
      // {path: 'planing',
      //   loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
      // },
      {path: '',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)

      },
      // {path: 'planing',
      //   loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
      // },

      {path: 'home',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
      }

    ]
  }
  // ,
  // {
  //   path: 'site', component: IndexComponent,
  //   children: [
  //     // {path: 'planing',
  //     //   loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
  //     // },
  //     {path: '',
  //       loadChildren: () => import('../site/site.module').then(m => m.SiteModule)
  //     },
  //     // {path: 'planing',
  //     //   loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
  //     // },
  //
  //     {path: 'home',
  //       loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
  //     }
  //
  //   ]
  // }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
