import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListPage } from './user-list/user-list.page';
import { UserDetailPage } from './user-detail/user-detail.page';

const routes: Routes = [
    {
        path: '',
        component: UserListPage,
    },
    {
        path: 'users/:id',
        component: UserDetailPage,
    },
    {
        path: 'students/:id',
        component: UserDetailPage,
    },
    {
        path: 'teachers/:id',
        component: UserDetailPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule {}