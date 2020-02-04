import { Component, OnInit, ViewChild } from '@angular/core';

import User from 'src/app/models/User.model';

import { UsersService } from 'src/app/providers/users.service';
import { IonSlides } from '@ionic/angular';
import { typeUser } from 'src/app/interfaces/typeUser.type';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  @ViewChild('slides', { static: true }) slider: IonSlides;

  users: User[] = [];
  students: User[] = [];
  teachers: User[] = [];
  userSelected: User;

  segment = 0;

  segments = ['all', 'students', 'teachers'];

  constructor(private usersService: UsersService) {}

  async ngOnInit() {
    this.users = await this.usersService.getUsers();
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
    const selectedSegment = this.segments[this.segment];
    this.users =
      selectedSegment === 'students'
        ? await this.usersService.getUsersByType('Student')
        : selectedSegment === 'teachers'
        ? await this.usersService.getUsersByType('Teacher')
        : await this.usersService.getUsers();
  }

  async onUserSelected(id: string) {
    this.userSelected = await this.usersService.getUserById(id);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
}
