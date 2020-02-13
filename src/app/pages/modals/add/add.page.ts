import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
})
export class AddPage implements OnInit {
  constructor(private modalController: ModalController) {}
  ngOnInit() {}
  async closeModal() {
    await this.modalController.dismiss();
  }
}
