import { Component, OnInit, ViewChild } from '@angular/core';

import { IonSlides, ModalController, ToastController } from '@ionic/angular';

import { UsersService } from 'src/app/providers/users.service';

import User from 'src/app/models/User.model';
import FabIcon from 'src/app/models/FabIcon.model';
import { AddUserPage } from 'src/app/modals/add-user/add-user.page';
import { UpdateUserPage } from 'src/app/modals/update-user/update-user.page';

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
  newUser: User;

  segment = 0;

  segments = ['all', 'students', 'teachers'];

  buttons: FabIcon[] = [
    {
      name: 'Add User',
      icon: 'add',
      action: async () => {
        this.addUser();
      },
    },
  ];

  constructor(
    private usersService: UsersService,
    private modalController: ModalController,
    private toastController: ToastController,
  ) {}

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

  async addUser() {
    const modal = await this.modalController.create({
      component: AddUserPage,
    });
    modal.onWillDismiss().then(data => {
      console.log(data.data);
      this.users.push(data.data);
    });
    return await modal.present();
  }

  async updateUser(id: string) {
    const modal = await this.modalController.create({
      component: UpdateUserPage,
      componentProps: {
        id,
      },
    });
    modal.onWillDismiss().then(data => {
      console.log(data.data);
      this.users.map((user, index) => {
        if (user.id === data.data.id) {
          this.users.splice(index, 1, data.data);
        }
      });
    });
    return await modal.present();
  }

  async deleteUser(id: string) {
    const deleteUser = await this.usersService.deleteUser(id);
    this.users.map((user, index) => {
      if (user.id === deleteUser.id) {
        this.users.splice(index, 1);
      }
    });
    const toast = await this.toastController.create({
      message: 'User deleted.',
      duration: 6000,
    });
    toast.present();
  }
}
