import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCoursePageRoutingModule } from './update-course-routing.module';

import { UpdateCoursePage } from './update-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpdateCoursePageRoutingModule,
  ],
  declarations: [UpdateCoursePage],
})
export class UpdateCoursePageModule {}
