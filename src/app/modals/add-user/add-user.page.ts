import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {
  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
  ) {}

  async ngOnInit() {}

  async closeModal() {
    await this.modalController.dismiss();
    const toast = await this.toastController.create({
      message: 'User created.',
      duration: 2000,
    });
    toast.present();
  }
}
