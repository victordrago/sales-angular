import { Routes } from '@angular/router';
import { MainLayoutComponent } from './app/layouts/public/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./app/modules/dashboard/dashboard-module').then(m => m.DashboardModule) }
    ]
  }
];
