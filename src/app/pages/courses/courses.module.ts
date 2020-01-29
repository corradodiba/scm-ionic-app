import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursesRoutingModule } from './courses-routing.module';

import { CoursesListPage } from './courses-list/courses-list.page';
import { CourseDetailPage } from './course-detail/course-detail.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CoursesRoutingModule],
  declarations: [CoursesListPage, CourseDetailPage],
})
export class CoursesModule {}
