import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';
import { CoursesService } from 'src/app/providers/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {
  courseForm = new FormGroup({
    name: new FormControl(),
    status: new FormControl(),
    year: new FormControl(),
  });
  constructor(
    private courseService: CoursesService,
    private modalController: ModalController,
    private toastController: ToastController,
  ) {}
  ngOnInit() {}

  abortModal() {
    this.modalController.dismiss();
  }

  async closeModal() {
    try {
      const newCourse = await this.courseService.add(this.courseForm.value);
      await this.modalController.dismiss(newCourse);
      const toast = await this.toastController.create({
        message: `Course ${this.courseForm.value.name} created.`,
        duration: 6000,
      });
      toast.present();
    } catch (error) {
      await this.modalController.dismiss();
      const toast = await this.toastController.create({
        message: `Course ${this.courseForm.value.name} not created. Error status code: ${error.status}`,
        duration: 6000,
      });
      toast.present();
    }
  }
}
