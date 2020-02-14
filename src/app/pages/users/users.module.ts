import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersRoutingModule } from './users-routing.module';

import { UserListPage } from './user-list/user-list.page';
import { UserDetailPage } from './user-detail/user-detail.page';
import { MenuButtonModule } from 'src/app/components/menu-button/menu-button.module';
import { ListModule } from 'src/app/components/list/list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersRoutingModule,
    MenuButtonModule,
    ListModule,
  ],
  declarations: [UserListPage, UserDetailPage],
})
export class UsersModule {}
