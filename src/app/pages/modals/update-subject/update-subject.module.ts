import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateSubjectPageRoutingModule } from './update-subject-routing.module';

import { UpdateSubjectPage } from './update-subject.page';
import { MenuButtonModule } from 'src/app/components/menu-button/menu-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateSubjectPageRoutingModule,
    ReactiveFormsModule,
    MenuButtonModule,
  ],
  declarations: [UpdateSubjectPage],
})
export class UpdateSubjectPageModule {}
