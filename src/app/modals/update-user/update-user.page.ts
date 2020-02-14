import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, NavParams } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/providers/users.service';
import User from 'src/app/models/User.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {
  userForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    fiscalCode: new FormControl(),
    name: new FormControl(),
    surname: new FormControl(),
    dateOfBirth: new FormControl(),
    imagePath: new FormControl(),
    type: new FormControl(),
  });

  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
    private userService: UsersService,
    private param: NavParams,
  ) {}

  ngOnInit() {}

  async closeModal() {
    await this.modalController.dismiss();
    const toast = await this.toastController.create({
      message: 'User not edit.',
      duration: 6000,
    });
    toast.present();
  }

  async signUp() {
    if (this.userForm.invalid) {
      return;
    }
    this.userService.updateUser(this.param.get('id'), this.userForm.value);
    await this.modalController.dismiss(this.userForm.value);
    const toast = await this.toastController.create({
      message: 'User created.',
      duration: 6000,
    });
    toast.present();
  }
}
