import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, NavParams } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/providers/users.service';
import User from 'src/app/models/User.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {
  userForm = new FormGroup({
    email: new FormControl(this.param.get('email'), Validators.required),
    password: new FormControl(this.param.get('password'), Validators.required),
    fiscalCode: new FormControl(this.param.get('fiscal'), Validators.required),
    name: new FormControl(this.param.get('name'), Validators.required),
    surname: new FormControl(this.param.get('surname'), Validators.required),
    dateOfBirth: new FormControl(
      this.param.get('birthday'),
      Validators.required,
    ),
    //imagePath: new FormControl(this.param.get(''), Validators.required),
    type: new FormControl(this.param.get('type'), Validators.required),
  });
  disableName = true;
  disableSurname = true;
  disableBirthday = true;
  disableEmail = true;
  disablePassword = true;
  disableFiscal = true;
  disableType = true;
  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
    private userService: UsersService,
    private param: NavParams,
  ) {}

  ngOnInit() {}

  enableName() {
    return (this.disableName = !this.disableName);
  }
  enableSurname() {
    return (this.disableSurname = !this.disableSurname);
  }
  enableEmail() {
    return (this.disableEmail = !this.disableEmail);
  }
  enableBirthday() {
    return (this.disableBirthday = !this.disableBirthday);
  }
  enablePassword() {
    return (this.disablePassword = !this.disablePassword);
  }
  enableFiscal() {
    return (this.disableFiscal = !this.disableFiscal);
  }
  enableType() {
    return (this.disableType = !this.disableType);
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async modify() {
    if (this.userForm.invalid) {
      return;
    }
    const updatedUser = await this.userService.updateUser(
      this.param.get('id'),
      this.userForm.value,
    );
    await this.modalController.dismiss(updatedUser);
    const toast = await this.toastController.create({
      message: `User ${this.param.get('name')} edited.`,
      duration: 6000,
    });
    toast.present();
  }
}
