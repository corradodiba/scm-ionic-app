import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FabButtonComponent } from './fab-button.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [FabButtonComponent],
  exports: [FabButtonComponent],
})
export class FabButtonModule {}
