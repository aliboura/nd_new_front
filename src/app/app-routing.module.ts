import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [

  {
    path: '',
    // loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    loadChildren: () => import('./templates-site/templates-site.module').then(m => m.TemplatesSiteModule)

  },
  {
    path: 'dashboard',
    loadChildren: () => import('./templates-dashboard/templates-dashboard.module').then(m => m.TemplatesDashboardModule)

  },
  {path: 'site',
    // loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    loadChildren: () => import('./templates-site/templates-site.module').then(m => m.TemplatesSiteModule)

  }
  // {
  //   path: 'dashboard', component: DashboardComponent,
  //   children: [
  //     { path: 'home', component: HomeComponent },
  //     { path: 'about', component: AboutComponent },
  //   ]
  // },
  // { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
