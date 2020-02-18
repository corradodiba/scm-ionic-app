import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { MenuButtonModule } from '../../components/menu-button/menu-button.module';

import { HomePage } from './home.page';

import { TabsComponent } from '../../components/tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
    MenuButtonModule,
  ],
  declarations: [HomePage, TabsComponent],
  exports: [HomePage],
})
export class HomePageModule {}
