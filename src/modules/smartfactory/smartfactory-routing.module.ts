/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { SmartfactoryModule } from './smartfactory.module';

/* Components */
import * as smartfactoryComponents from './components'

/* Containers */
import * as smartfactoryContainers from './containers';

/* Guards */


/* Routes */
export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'smartfactory',
  },
  {
    path: 'company',
    children: [
      {
        path: '',
        component: smartfactoryContainers.CompanyComponent,
        data: {
          title: 'Tables - SB Admin Angular',
          breadcrumbs: [
              {
                  text: '스마트팩토리관리',
              },
              {
                  text: '기본정보관리',
                  active: true,
              },
          ],
        } as SBRouteData,
      },
      {
        path: 'createcompany',
        component: smartfactoryComponents.CreatecompanyComponent,
        data: {
          title: 'Tables - SB Admin Angular',
          breadcrumbs: [
              {
                  text: '기본정보관리',
              },
              {
                  text: '스마트팩토리등록',
                  active: true,
              },
          ],
        } as SBRouteData,
      },
    ],
  },
  {
    path: 'server',
    children: [
      {
        path: '',
        component: smartfactoryContainers.ServerComponent,
        data: {
          title: 'Tables - SB Admin Angular',
          breadcrumbs: [
              {
                  text: '스마트팩토리관리',
              },
              {
                  text: '서버관리',
                  active: true,
              },
          ],
        } as SBRouteData,
      },
      {
        path: 'createserver',
        component: smartfactoryComponents.CreateserverComponent,
        data: {
          title: 'Tables - SB Admin Angular',
          breadcrumbs: [
              {
                  text: '서버관리',
              },
              {
                  text: '서버등록',
                  active: true,
              },
          ],
        } as SBRouteData,
      },
    ],
  },
  {
    path: 'db',
    children: [
      {
        path: '',
        component: smartfactoryContainers.DbComponent,
        data: {
          title: 'Tables - SB Admin Angular',
          breadcrumbs: [
              {
                  text: '스마트팩토리관리',
              },
              {
                  text: 'DB관리',
                  active: true,
              },
          ],
        } as SBRouteData,
      },
      {
        path: 'createdb',
        component: smartfactoryComponents.CreatedbComponent,
        data: {
          title: 'Tables - SB Admin Angular',
          breadcrumbs: [
              {
                  text: 'DB관리',
              },
              {
                  text: 'DB등록',
                  active: true,
              },
          ],
        } as SBRouteData,
      },
    ],
  },
  {
    path: 'monitoring',
    canActivate: [],
    component: smartfactoryContainers.MonitoringComponent,
    data: {
      title: 'Tables - SB Admin Angular',
      breadcrumbs: [
          {
              text: '스마트팩토리관리',
          },
          {
              text: '모니터링',
              active: true,
          },
      ],
    } as SBRouteData,
  },
  {
    path: 'iot',
    children: [
      {
        path: '',
        component: smartfactoryContainers.IotComponent,
        data: {
          title: 'Tables - SB Admin Angular',
          breadcrumbs: [
              {
                  text: '스마트팩토리관리',
              },
              {
                  text: 'IOT관리',
                  active: true,
              },
          ],
        } as SBRouteData,
      },
      {
        path: 'createiot',
        component: smartfactoryComponents.CreateiotComponent,
        data: {
          title: 'Tables - SB Admin Angular',
          breadcrumbs: [
              {
                  text: 'IOT관리',
              },
              {
                  text: 'IOT등록',
                  active: true,
              },
          ],
        } as SBRouteData,
      },
    ],
  },
];

@NgModule({
    imports: [SmartfactoryModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class SmartfactoryRoutingModule { }
