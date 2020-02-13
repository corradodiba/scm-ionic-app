import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async closeModal() {
    await this.modalController.dismiss();
  }
}
