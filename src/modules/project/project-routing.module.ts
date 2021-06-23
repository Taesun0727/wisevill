/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { ProjectModule } from './project.module';

/* Components */
import * as ProjectComponent from './components';

/* Containers */
import * as Projectcontainer from './containers';

/* Guards */


/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: Projectcontainer.ProjectComponent,
        data: {
            title: 'Charts - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'createproject',
        canActivate: [],
        component: ProjectComponent.CreateprojectComponent,
        data: {
          title: 'Tables - SB Admin Angular',
          breadcrumbs: [
              {
                  text: '프로젝트',
              },
              {
                  text: '프로젝트 등록',
                  active: true,
              },
          ],
        } as SBRouteData,
      },
];

@NgModule({
    imports: [ProjectModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ProjectRoutingModule {}
