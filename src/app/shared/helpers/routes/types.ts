import { ROUTES_NAMES } from '@shared/helpers/routes/routes';

interface RouteType {
  path: string;
  title?: string;
  getLink: (segments?: string | string[]) => string;
}

type RouteName = (typeof ROUTES_NAMES)[number];

export type RoutesList = Record<RouteName, RouteType>;
