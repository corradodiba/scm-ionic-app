import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersRoutingModule } from './users-routing.module';

import { UserListPage } from './user-list/user-list.page';
import { UserDetailPage } from './user-detail/user-detail.page';
import { MenuButtonModule } from 'src/app/components/menu-button/menu-button.module';
import { FabButtonComponent } from 'src/app/components/fab-button/fab-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersRoutingModule,
    MenuButtonModule,
  ],
  declarations: [UserListPage, UserDetailPage, FabButtonComponent],
})
export class UsersModule {}
