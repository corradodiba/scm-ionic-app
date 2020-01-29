import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesListPage } from './courses-list/courses-list.page';
import { CourseDetailPage } from './course-detail/course-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CoursesListPage,
  },
  {
    path: ':courseId',
    component: CourseDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
