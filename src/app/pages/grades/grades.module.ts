import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GradesPageRoutingModule } from './grades-routing.module';

import { GradesPage } from './grades.page';
import { FabButtonModule } from 'src/app/components/fab-button/fab-button.module';
import { ListModule } from 'src/app/components/list/list.module';
import { MenuButtonModule } from 'src/app/components/menu-button/menu-button.module';
import { AddGradePage } from '../modals/add-grade/add-grade.page';
import { UpdateGradePage } from '../modals/update-grade/update-grade.page';
import { AddGradePageModule } from '../modals/add-grade/add-grade.module';
import { UpdateGradePageModule } from '../modals/update-grade/update-grade.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GradesPageRoutingModule,
    FabButtonModule,
    ListModule,
    MenuButtonModule,
    AddGradePageModule,
    UpdateGradePageModule,
  ],
  declarations: [GradesPage],
  entryComponents: [AddGradePage, UpdateGradePage],
})
export class GradesPageModule {}
