/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { UtilityModule } from '../utility/utility.module'

/* Components */


/* Containers */
import * as ManagementContaines from './containers';


/* Guards */


/* Services */


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        UtilityModule,
    ],
    providers: [],
    declarations: [...ManagementContaines.containers,],
    exports:[...ManagementContaines.containers],
})
export class ManagementModule {}
