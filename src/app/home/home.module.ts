import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
import { MenuButtonModule } from '../components/menu-button/menu-button.module';

import { HomePage } from './home.page';

import { TabsComponent } from '../components/tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    MenuButtonModule,
  ],
  declarations: [HomePage, TabsComponent],
})
export class HomePageModule {}
