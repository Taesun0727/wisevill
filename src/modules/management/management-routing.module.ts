/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { ManagementModule } from './management.module';

/* Containers */
import * as authContainers from './containers';

/* Guards */


/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'member',
        canActivate: [],
        component: authContainers.MemberComponent,
        data: {
            title: 'Pages Login - SB Admin Angular',
            breadcrumbs: [
              {
                  text: '공통정보관리',
                  active: true,
              },
              {
                text: '사원관리',
                active: true,
            },
          ],
        } as SBRouteData,
    },
    {
        path: 'company',
        canActivate: [],
        component: authContainers.CompanyComponent,
        data: {
            title: 'Pages Register - SB Admin Angular',
            breadcrumbs: [
              {
                  text: '공통정보관리',
                  active: true,
              },
              {
                text: '소속관리',
                active: true,
            },
          ],
        } as SBRouteData,
    },
    {
        path: 'department',
        canActivate: [],
        component: authContainers.DepartmentComponent,
        data: {
            title: 'Pages Forgot Password - SB Admin Angular',
            breadcrumbs: [
              {
                  text: '공통정보관리',
                  active: true,
              },
              {
                text: '부서관리',
                active: true,
            },
          ],
        } as SBRouteData,
    },
    {
      path: 'work',
      canActivate: [],
      component: authContainers.WorkComponent,
      data: {
          title: 'Pages Forgot Password - SB Admin Angular',
          breadcrumbs: [
            {
                text: '공통정보관리',
                active: true,
            },
            {
              text: '근태관리',
              active: true,
          },
        ],
      } as SBRouteData,
    },
    {
      path: 'code',
      canActivate: [],
      component: authContainers.CodeComponent,
      data: {
          title: 'Pages Forgot Password - SB Admin Angular',
          breadcrumbs: [
            {
                text: '공통정보관리',
                active: true,
            },
            {
              text: '코드관리',
              active: true,
          },
        ],
      } as SBRouteData,
    },
];

@NgModule({
    imports: [ManagementModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})

export class ManagementRoutingModule { }
