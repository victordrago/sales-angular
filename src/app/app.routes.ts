import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/public/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [],
  }
];