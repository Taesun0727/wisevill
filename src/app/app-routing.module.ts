import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard',
    },
    {
        path: 'charts',
        loadChildren: () =>
            import('modules/charts/charts-routing.module').then(m => m.ChartsRoutingModule),
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('modules/dashboard/dashboard-routing.module').then(
                m => m.DashboardRoutingModule
            ),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
    {
        path: 'mypage',
        loadChildren: () =>
            import('modules/mypage/mypage-routing.module').then(m => m.MypageRoutingModule),
    },
	{
		path: 'notice',
		loadChildren: () =>
			import('modules/notice/notice-routing.module').then(m => m.NoticeRoutingModule),
	},
	{
		path: 'project',
		loadChildren: () =>
			import('modules/project/project-routing.module').then(m => m.ProjectRoutingModule),
	},
	{
		path: 'management',
		loadChildren: () =>
			import('modules/management/management-routing.module').then(m => m.ManagementRoutingModule),
	},
    {
        path: 'smartfactory',
        loadChildren: () =>
            import('modules/smartfactory/smartfactory-routing.module').then(m => m.SmartfactoryRoutingModule),
    },
    {
        path: 'tables',
        loadChildren: () =>
            import('modules/tables/tables-routing.module').then(m => m.TablesRoutingModule),
    },
    {
        path: 'version',
        loadChildren: () =>
            import('modules/utility/utility-routing.module').then(m => m.UtilityRoutingModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
