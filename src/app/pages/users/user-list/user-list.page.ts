import { Component, OnInit, ViewChild } from '@angular/core';

import User from 'src/app/models/User.model';

import { UsersService } from 'src/app/providers/users.service';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  @ViewChild('slides', { static: true }) slider: IonSlides;
  numTimesLeft = 1;
  usersList: User[] = [];
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
  async doInfinite(event): Promise<User> {
    const users = await this.usersService.getUsers();
    try {
      return new Promise(resolve => {
        setTimeout(() => {
          for (const user of users) {
            this.usersList.push(user);
          }
          this.numTimesLeft -= 1;
          event.target.complete();
          resolve();
        }, 500);
      });
    } catch (error) {
      throw { error };
    }
  }
}
