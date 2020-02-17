import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/providers/users.service';
import { NavParams, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-update-grade',
  templateUrl: './update-grade.page.html',
  styleUrls: ['./update-grade.page.scss'],
})
export class UpdateGradePage implements OnInit {
  gradeForm = new FormGroup({
    grade: new FormControl(this.params.get('grade'), Validators.required),
  });
  constructor(
    private usersService: UsersService,
    private modalController: ModalController,
    private toastController: ToastController,
    private params: NavParams,
  ) {}
  async ngOnInit() {}

  abortModal() {
    this.modalController.dismiss();
  }

  async closeModal() {
    try {
      const body = {
        grade: Number(this.gradeForm.value),
        subject: this.params.get('subjectId'),
      };
      const updatedGrade = await this.usersService.updateGrade(
        this.params.get('id'),
        this.params.get('userId'),
        body,
      );

      await this.modalController.dismiss(updatedGrade);
      const toast = await this.toastController.create({
        message: `Grade updated.`,
        duration: 6000,
      });
      toast.present();
    } catch (error) {
      await this.modalController.dismiss();
      const toast = await this.toastController.create({
        message: `Grade was not updated. Error status code: ${error.status}`,
        duration: 6000,
      });
      toast.present();
    }
  }
}
