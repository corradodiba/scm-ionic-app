import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCoursePageRoutingModule } from './update-course-routing.module';

import { UpdateCoursePage } from './update-course.page';
import { MenuButtonModule } from 'src/app/components/menu-button/menu-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpdateCoursePageRoutingModule,
    MenuButtonModule,
  ],
  declarations: [UpdateCoursePage],
})
export class UpdateCoursePageModule {}
