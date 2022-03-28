import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployees } from './containers/list-employees/list-employees.container';

const routes: Routes = [
  {
    path:'',
    component: ListEmployees
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
