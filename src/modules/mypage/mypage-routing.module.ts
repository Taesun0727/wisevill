/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { MypageModule } from './mypage.module';

/* Containers */
import * as MypageContainers from './containers';


/* Routes */
export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mypage',
  },
  {
    path: 'myprofile',
    canActivate: [],
    component: MypageContainers.MyprofileComponent,
    data: {
      title: 'Tables - SB Admin Angular',
      breadcrumbs: [
          {
              text: '마이페이지',
          },
          {
              text: '내 정보',
              active: true,
          },
      ],
    } as SBRouteData,
  },
  {
    path: 'workrecord',
    canActivate: [],
    component: MypageContainers.WorkrecordComponent,
    data: {
      title: 'Tables - SB Admin Angular',
      breadcrumbs: [
          {
              text: '마이페이지',
          },
          {
              text: '내 근태관리',
              active: true,
          },
      ],
    } as SBRouteData,
  },
  {
    path: 'schedule',
    canActivate: [],
    component: MypageContainers.ScheduleComponent,
    data: {
      title: 'Tables - SB Admin Angular',
      breadcrumbs: [
          {
              text: '마이페이지',
          },
          {
              text: '내 일정관리',
              active: true,
          },
      ],
    } as SBRouteData,
  },
  {
    path: 'memo',
    canActivate: [],
    component: MypageContainers.MemoComponent,
    data: {
      title: 'Tables - SB Admin Angular',
      breadcrumbs: [
          {
              text: '마이페이지',
          },
          {
              text: '내 쪽지',
              active: true,
          },
      ],
    } as SBRouteData,
  }
];

@NgModule({
    imports: [MypageModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class MypageRoutingModule { }
