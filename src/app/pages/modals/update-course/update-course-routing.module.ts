import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateCoursePage } from './update-course.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateCoursePageRoutingModule {}
