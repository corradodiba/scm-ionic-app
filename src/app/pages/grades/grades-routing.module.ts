import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradesPage } from './grades.page';

const routes: Routes = [
  {
    path: ':subjectId',
    component: GradesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradesPageRoutingModule {}
