import { Routes } from '@angular/router';
import { MainPage } from '@pages/main-page/main-page';
import { routesList } from '@shared/helpers/routes/routes';
import { MainLayout } from '@shared/layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: routesList.main.path,
    title: routesList.main.title,
    component: MainLayout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainPage,
      },
    ],
  },
  {
    path: routesList.auth.path,
    loadComponent: () =>
      import('@shared/layouts/auth-layout/auth-layout').then((c) => c.AuthLayout),
    children: [
      {
        path: '',
        redirectTo: routesList.login.getLink(),
        pathMatch: 'full',
      },
      {
        path: routesList.login.path,
        title: routesList.login.title,
        loadComponent: () => import('@pages/login-page/login-page').then((c) => c.LoginPage),
      },
      {
        path: routesList.signup.path,
        title: routesList.signup.title,
        loadComponent: () => import('@pages/signup-page/signup-page').then((c) => c.SignupPage),
      },
    ],
  },
  {
    path: routesList['not-found'].path,
    title: routesList['not-found'].title,
    loadComponent: () => import('@pages/not-found-page/not-found-page').then((c) => c.NotFoundPage),
  },
  {
    path: '**',
    redirectTo: routesList['not-found'].getLink(),
  },
];
