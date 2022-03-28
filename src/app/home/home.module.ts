import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ListComponent } from './components/list/list.component';
import { UiModule } from '@ui/ui.module';
import { ListEmployees } from './containers/list-employees/list-employees.container';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    ListEmployees
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UiModule,
    ReactiveFormsModule
  ],
})
export class HomeModule { }
