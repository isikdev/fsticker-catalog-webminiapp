import { createRouteView } from 'atomic-router-react';

import { currentRoute } from './model';
import { About } from './page';

import { PageLayout } from '@/shared/ui/layouts';


export const AboutRoute = {
  view: createRouteView({
    route: currentRoute,
    view: About,
  }),
  layout: PageLayout,
  route: currentRoute,
};
