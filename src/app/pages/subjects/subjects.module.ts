import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubjectsPageRoutingModule } from './subjects-routing.module';

import { SubjectsPage } from './subjects.page';
import { FabButtonModule } from 'src/app/components/fab-button/fab-button.module';
import { MenuButtonModule } from 'src/app/components/menu-button/menu-button.module';
import { ListModule } from 'src/app/components/list/list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubjectsPageRoutingModule,
    FabButtonModule,
    MenuButtonModule,
    ListModule,
  ],
  declarations: [SubjectsPage],
})
export class SubjectsPageModule {}
