import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuButtonComponent } from './menu-button.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [MenuButtonComponent],
  exports: [MenuButtonComponent],
})
export class MenuButtonModule {}
