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
import * as smartfactoryComponents from './components';

/* Containers */
import * as smartfactoryContainers from './containers';
import { ForjComponent } from './components/forj/forj.component';
import { SoriComponent } from './components/sori/sori.component';

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
  declarations: [...smartfactoryContainers.containers, ...smartfactoryComponents.components, ForjComponent, SoriComponent,],
  exports: [...smartfactoryContainers.containers,],
})
export class SmartfactoryModule { }
