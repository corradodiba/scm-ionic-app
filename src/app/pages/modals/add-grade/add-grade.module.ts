import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddGradePageRoutingModule } from './add-grade-routing.module';

import { AddGradePage } from './add-grade.page';
import { MenuButtonModule } from 'src/app/components/menu-button/menu-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddGradePageRoutingModule,
    MenuButtonModule,
  ],
  declarations: [AddGradePage],
})
export class AddGradePageModule {}
