/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { NoticeModule } from './notice.module';

/* Containers */
import * as Noticecontainers from './containers';

/* Guards */


/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: Noticecontainers.NoticeComponent,
        data: {
            title: 'Charts - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'createnotice',
        canActivate: [],
        component: Noticecontainers.CreatenoticeComponent,
        data: {
          title: 'Tables - SB Admin Angular',
          breadcrumbs: [
              {
                  text: '공지사항',
              },
              {
                  text: '공지사항 등록',
                  active: true,
              },
          ],
        } as SBRouteData,
      },
    {
        path: 'updatenotice',
        canActivate: [],
        component: Noticecontainers.UpdatenoticeComponent,
    }
];

@NgModule({
    imports: [NoticeModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class NoticeRoutingModule { }
