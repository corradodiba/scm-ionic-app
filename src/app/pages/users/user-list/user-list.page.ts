import { Component, OnInit, ViewChild } from '@angular/core';

import {
  IonSlides,
  ModalController,
  ToastController,
  NavController,
} from '@ionic/angular';

import { Socket } from 'ngx-socket-io';

import { UsersService } from 'src/app/providers/users.service';

import User from 'src/app/models/User.model';
import FabIcon from 'src/app/models/FabIcon.model';
import { AddUserPage } from 'src/app/pages/modals/add-user/add-user.page';
import { UpdateUserPage } from 'src/app/pages/modals/update-user/update-user.page';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  users: User[] = [];
  students: User[] = [];
  teachers: User[] = [];
  userSelected: User;
  newUser: User;

  segment = 0;

  segments = ['all', 'students', 'teachers'];

  buttons: FabIcon[] = [
    {
      name: 'Add',
      icon: 'add',
      color: 'light',
      action: async () => {
        this.addUser();
      },
    },
  ];

  constructor(
    private socket: Socket,
    private usersService: UsersService,
    private modalController: ModalController,
    private toastController: ToastController,
    private navCtrl: NavController,
  ) {}

  async ngOnInit() {
    this.socket.connect();
    this.users = await this.usersService.getUsers();
    this.socket
      .fromEvent('auth')
      .subscribe((data: { status: boolean; id: string }) => {
        const { status, id } = data;
        this.users.find(user => id === user.id).status = status;
      });
  }

  async navigate(id: string) {
    await this.navCtrl.navigateForward(`users/${id}`);
  }

  async segmentChanged() {
    const selectedSegment = this.segments[this.segment];
    this.users =
      selectedSegment === 'students'
        ? await this.usersService.getUsersByType('Student')
        : selectedSegment === 'teachers'
        ? await this.usersService.getUsersByType('Teacher')
        : await this.usersService.getUsers();
  }

  async addUser() {
    const modal = await this.modalController.create({
      component: AddUserPage,
    });
    modal.onWillDismiss().then(async () => {
      this.users = await this.usersService.getUsers();
    });
    return await modal.present();
  }

  async updateUser(id: string) {
    const selectedUser = await this.usersService.getUserById(id);

    const modal = await this.modalController.create({
      component: UpdateUserPage,
      componentProps: {
        id,
        name: selectedUser.name,
        surname: selectedUser.surname,
        email: selectedUser.email,
        fiscal: selectedUser.fiscalCode,
        type: selectedUser.type,
        birthday: selectedUser.dateOfBirth,
      },
    });
    modal.onWillDismiss().then(async () => {
      this.users = await this.usersService.getUsers();
    });
    await modal.present();
  }

  async deleteUser(id: string) {
    try {
      await this.usersService.deleteUser(id);
      this.users = await this.usersService.getUsers();
    } catch (e) {
      if (e.status == 0) {
        const toast = await this.toastController.create({
          message: 'Server crashed. Error status code: 500',
          duration: 6000,
        });
        toast.present();
      }
    }
  }
}
