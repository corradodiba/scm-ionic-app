import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateSubjectPage } from './update-subject.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateSubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateSubjectPageRoutingModule {}
