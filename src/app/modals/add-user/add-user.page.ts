import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/providers/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {
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
  ) {}

  async ngOnInit() {}

  async closeModal() {
    await this.modalController.dismiss();
    const toast = await this.toastController.create({
      message: 'User not created.',
      duration: 6000,
    });
    toast.present();
  }

  async signUp() {
    if (this.userForm.invalid) {
      return;
    }
    const newUser = await this.userService.addUser(this.userForm.value);
    await this.modalController.dismiss(newUser);
    const toast = await this.toastController.create({
      message: `User created.`,
      duration: 6000,
    });
    toast.present();
  }
}
