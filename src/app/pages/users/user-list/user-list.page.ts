import { Component, OnInit } from '@angular/core';

import User from 'src/app/models/User.model';

import { UsersService } from 'src/app/providers/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  users: User[] = [];
  userSelected: User;

  constructor(private usersService: UsersService) {}

  async ngOnInit() {
    this.users = await this.usersService.allStudent();
  }

  async onUserSelected(id: string) {
    this.userSelected = await this.usersService.getStudentById(id);
  }

}
