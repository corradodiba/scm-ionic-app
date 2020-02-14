import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCoursePage } from '../add-course/add-course.page';

const routes: Routes = [
  {
    path: '',
    component: AddCoursePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCoursePageRoutingModule {}
