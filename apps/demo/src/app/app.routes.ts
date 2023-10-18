import { Route } from '@angular/router';
import { DemoPageComponent } from './demo-page/demo-page.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'demo',
  },
  {
    path: 'demo',
    component: DemoPageComponent,
  },
];
