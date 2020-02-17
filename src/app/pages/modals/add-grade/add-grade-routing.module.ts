import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddGradePage } from './add-grade.page';

const routes: Routes = [
  {
    path: '',
    component: AddGradePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddGradePageRoutingModule {}
