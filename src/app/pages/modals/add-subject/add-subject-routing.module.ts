import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSubjectPage } from './add-subject.page';

const routes: Routes = [
  {
    path: '',
    component: AddSubjectPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSubjectPageRoutingModule {}
