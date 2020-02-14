import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersRoutingModule } from './users-routing.module';

import { UserListPage } from './user-list/user-list.page';
import { UserDetailPage } from './user-detail/user-detail.page';
import { MenuButtonModule } from 'src/app/components/menu-button/menu-button.module';
import { ListModule } from 'src/app/components/list/list.module';
import { FabButtonModule } from 'src/app/components/fab-button/fab-button.module';
import { AddUserPage } from 'src/app/modals/add-user/add-user.page';
import { AddUserPageModule } from 'src/app/modals/add-user/add-user.module';
import { UpdateUserPage } from 'src/app/modals/update-user/update-user.page';
import { UpdateUserPageModule } from 'src/app/modals/update-user/update-user.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersRoutingModule,
    MenuButtonModule,
    ListModule,
    FabButtonModule,
    AddUserPageModule,
    UpdateUserPageModule,
  ],
  declarations: [UserListPage, UserDetailPage],
  entryComponents: [AddUserPage, UpdateUserPage],
})
export class UsersModule {}
