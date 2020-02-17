import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateGradePage } from './update-grade.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateGradePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateGradePageRoutingModule {}
