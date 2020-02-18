import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SlidesPage } from './slides.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [SlidesPage],
  exports: [SlidesPage],
})
export class SlidesPageModule {}
