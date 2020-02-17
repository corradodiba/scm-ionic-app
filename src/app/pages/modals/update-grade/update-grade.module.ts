import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateGradePageRoutingModule } from './update-grade-routing.module';

import { UpdateGradePage } from './update-grade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpdateGradePageRoutingModule,
  ],
  declarations: [UpdateGradePage],
})
export class UpdateGradePageModule {}
