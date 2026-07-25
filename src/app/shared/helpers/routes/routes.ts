import { RoutesList } from '@shared/helpers/routes/types';

export const ROUTES_NAMES = ['main', 'auth', 'login', 'signup', 'not-found'] as const;

export const routesList: RoutesList = {
  main: {
    path: '',
    title: 'Метрология',
    getLink: () => {
      return `/`;
    },
  },
  auth: {
    path: 'auth',
    getLink: () => {
      return '/auth';
    },
  },
  login: {
    path: 'login',
    getLink: () => {
      return `/auth/login`;
    },
    title: 'Вход',
  },
  signup: {
    path: 'signup',
    getLink: () => {
      return '/auth/signup';
    },
    title: 'Регистрация',
  },
  'not-found': {
    path: 'not-found',
    getLink: () => {
      return '/not-found';
    },
    title: 'Страница не найдена',
  },
};
