/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { UtilityModule } from '../utility/utility.module'

import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin

/* Containers */
import * as MypageContainers from './containers';



import { IconsModule } from '../icons/icons.module'


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
]); //이외의 timeGrid, weekGrid는 필요없으므로, 제외

@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      ReactiveFormsModule,
      FormsModule,
      AppCommonModule,
      NavigationModule,
      FullCalendarModule,
      IconsModule,
      UtilityModule
  ],
  providers: [],
  declarations: [...MypageContainers.containers],
  exports: [...MypageContainers.containers],
})
export class MypageModule { }
