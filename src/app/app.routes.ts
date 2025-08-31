import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pages/',
    loadChildren: () =>
      import('./pages/routes.route').then((m) => m.PagesRoutes),
  },
  {
    path: 'login/',
    loadChildren: () => import('./login/login.route').then((m) => m.loginRoute),
  },
  { path: '**', redirectTo: 'pages/', pathMatch: 'full' },
];
