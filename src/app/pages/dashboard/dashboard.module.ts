import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { InfoCardComponent } from 'src/app/components/info-card/info-card.component';
import { MenuButtonModule } from 'src/app/components/menu-button/menu-button.module';
import { ListComponent } from 'src/app/components/list/list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    MenuButtonModule,
  ],
  declarations: [DashboardPage, InfoCardComponent, ListComponent],
})
export class DashboardPageModule {}
