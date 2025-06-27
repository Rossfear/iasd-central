import { Routes } from '@angular/router';
import { layoutRoutes } from './domains/layout.routes';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./domains/layout.routes').then((m) => m.layoutRoutes)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
