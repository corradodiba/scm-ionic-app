import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from '../app-routing.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, IonicModule, AppRoutingModule],
  exports: [MenuComponent],
})
export class ComponentsModule {}
