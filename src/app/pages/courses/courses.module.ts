import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CoursesRoutingModule } from './courses-routing.module';
import { MenuButtonModule } from 'src/app/components/menu-button/menu-button.module';

import { CoursesListPage } from './courses-list/courses-list.page';
import { CourseDetailPage } from './course-detail/course-detail.page';
import { ListModule } from 'src/app/components/list/list.module';
import { FabButtonModule } from 'src/app/components/fab-button/fab-button.module';
import { AddCoursePage } from '../modals/add-course/add-course.page';
import { AddCoursePageModule } from '../modals/add-course/add-course.module';
import { UpdateCoursePageModule } from '../modals/update-course/update-course.module';
import { UpdateCoursePage } from '../modals/update-course/update-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursesRoutingModule,
    MenuButtonModule,
    ListModule,
    FabButtonModule,
    AddCoursePageModule,
    UpdateCoursePageModule,
    ListModule,
  ],
  declarations: [CoursesListPage, CourseDetailPage],
  entryComponents: [AddCoursePage, UpdateCoursePage],
})
export class CoursesModule {}
