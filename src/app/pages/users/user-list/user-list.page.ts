import { Component, OnInit, ViewChild } from '@angular/core';

import { IonSlides, ModalController, ToastController } from '@ionic/angular';

import { UsersService } from 'src/app/providers/users.service';

import User from 'src/app/models/User.model';
import FabIcon from 'src/app/models/FabIcon.model';
import { AddUserPage } from 'src/app/modals/add-user/add-user.page';

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
      name: 'light',
      icon: 'add',
      action: async () => {
        this.addUser();
      },
    },
    {
      name: 'primary',
      icon: 'arrow-up',
      action: async () => {
        this.updateUser();
      },
    },
    {
      name: 'danger',
      icon: 'close',
      action: async () => {
        this.deleteUser();
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
    });
    // da inserire i valori generici
    const user: User = {
      id: '',
      email: 'prova@prova.com',
      password: 'pippo',
      fiscalCode: 'ABCEFG27B69C239K',
      name: 'Giuseppe',
      surname: 'Bianchi',
      dateOfBirth: new Date(1990, 12, 12),
      subjects: [],
      imagePath: 'string',
      type: 'Teacher',
    };
    this.newUser = await this.usersService.addUser(user);
    this.users.map(user => {
      if (user.id === this.newUser.id) {
        this.users.push(this.newUser);
      }
    });
    return await modal.present();
  }

  async updateUser() {
    const modal = await this.modalController.create({
      component: AddUserPage,
    });
    modal.onWillDismiss().then(data => {
      console.log(data.data);
    });
    const user = {
      surname: 'Arancione',
    };
    const id = '5e46587a53c76389db8ce80a';
    const updatedUser = await this.usersService.updateUser(id, user as User);
    // this.users.map(user => {
    //   if (user.id === updatedUser.id) {
    //     user = this.newUser;
    //   }
    // });
    this.users.map((user, index) => {
      if (user.id === updatedUser.id) {
        this.users.splice(index, 1, updatedUser);
      }
    });
    return await modal.present();
  }

  async deleteUser() {
    const id = '5e46587a53c76389db8ce80a';
    const deleteUser = await this.usersService.deleteUser(id);
    this.users.map((user, index) => {
      if (user.id === deleteUser.id) {
        this.users.splice(index, 1);
      }
    });
    const toast = await this.toastController.create({
      message: 'User deleted.',
      duration: 2000,
    });
    toast.present();
  }
}
