import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/providers/courses.service';
import { ModalController, ToastController, NavParams } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.page.html',
  styleUrls: ['./update-course.page.scss'],
})
export class UpdateCoursePage implements OnInit {
  courseForm = new FormGroup({
    name: new FormControl(this.params.get('name'), Validators.required),
    status: new FormControl(this.params.get('status'), Validators.required),
    year: new FormControl(this.params.get('year'), Validators.required),
  });
  disableName = true;
  disableYear = true;
  disableStatus = true;
  constructor(
    private courseService: CoursesService,
    private modalController: ModalController,
    private toastController: ToastController,
    private params: NavParams,
  ) {}
  async ngOnInit() {}

  enableName() {
    return (this.disableName = !this.disableName);
  }
  enableStatus() {
    return (this.disableStatus = !this.disableStatus);
  }
  enableYear() {
    return (this.disableYear = !this.disableYear);
  }
  abortModal() {
    this.modalController.dismiss();
  }

  async closeModal() {
    try {
      const updatedCourse = await this.courseService.update(
        this.params.get('id'),
        this.courseForm.value,
      );

      await this.modalController.dismiss(updatedCourse);
      const toast = await this.toastController.create({
        message: `Course ${this.courseForm.value.name} updated.`,
        duration: 6000,
      });
      toast.present();
    } catch (error) {
      await this.modalController.dismiss();
      const toast = await this.toastController.create({
        message: `Course ${this.courseForm.value.name} not updated. Error status code: ${error.status}`,
        duration: 6000,
      });
      toast.present();
    }
  }
}
