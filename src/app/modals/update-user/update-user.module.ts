import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateUserPageRoutingModule } from './update-user-routing.module';

import { UpdateUserPage } from './update-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateUserPageRoutingModule,
  ],
  declarations: [UpdateUserPage],
})
export class UpdateUserPageModule {}
