import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateUserPage } from './update-user.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateUserPageRoutingModule {}
