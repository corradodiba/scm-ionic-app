import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CoursesService } from 'src/app/providers/courses.service';
import { ModalController, ToastController, NavParams } from '@ionic/angular';
import { SubjectsService } from 'src/app/providers/subjects.service';

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.page.html',
  styleUrls: ['./update-subject.page.scss'],
})
export class UpdateSubjectPage implements OnInit {
  subjectForm = new FormGroup({
    name: new FormControl(this.params.get('name'), Validators.required),
    hours: new FormControl(this.params.get('hours'), Validators.required),
  });
  disableName = true;
  disableHours = true;
  constructor(
    private subjectService: SubjectsService,
    private modalController: ModalController,
    private toastController: ToastController,
    private params: NavParams,
  ) {}
  async ngOnInit() {}

  enableName() {
    return (this.disableName = !this.disableName);
  }
  enableHours() {
    return (this.disableHours = !this.disableHours);
  }
  abortModal() {
    this.modalController.dismiss();
  }

  async closeModal() {
    try {
      const updatedSubject = await this.subjectService.update(
        this.params.get('id'),
        this.subjectForm.value,
      );

      await this.modalController.dismiss(updatedSubject);
      const toast = await this.toastController.create({
        message: `Subject ${this.subjectForm.value.name} updated.`,
        duration: 6000,
      });
      toast.present();
    } catch (error) {
      await this.modalController.dismiss();
      const toast = await this.toastController.create({
        message: `Subject ${this.subjectForm.value.name} not updated. Error status code: ${error.status}`,
        duration: 6000,
      });
      toast.present();
    }
  }
}
