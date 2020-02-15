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
import { AddSubjectPageModule } from '../modals/add-subject/add-subject.module';
import { AddSubjectPage } from '../modals/add-subject/add-subject.page';
import { UpdateSubjectPage } from '../modals/update-subject/update-subject.page';
import { UpdateSubjectPageModule } from '../modals/update-subject/update-subject.module';

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
    AddSubjectPageModule,
    UpdateSubjectPageModule,
  ],
  declarations: [CoursesListPage, CourseDetailPage],
  entryComponents: [
    AddCoursePage,
    UpdateCoursePage,
    AddSubjectPage,
    UpdateSubjectPage,
  ],
})
export class CoursesModule {}
