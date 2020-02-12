import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CoursesRoutingModule } from './courses-routing.module';
import { MenuButtonModule } from 'src/app/components/menu-button/menu-button.module';

import { CoursesListPage } from './courses-list/courses-list.page';
import { CourseDetailPage } from './course-detail/course-detail.page';
import { ListModule } from 'src/app/components/list/list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursesRoutingModule,
    MenuButtonModule,
    ListModule,
  ],
  declarations: [CoursesListPage, CourseDetailPage],
})
export class CoursesModule {}
