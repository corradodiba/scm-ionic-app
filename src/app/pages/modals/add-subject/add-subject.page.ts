import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CoursesService } from 'src/app/providers/courses.service';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.page.html',
  styleUrls: ['./add-subject.page.scss'],
})
export class AddSubjectPage implements OnInit {
  @Input() courseSelected: string;
  subjectForm = new FormGroup({
    name: new FormControl(),
    hours: new FormControl(),
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
      const newSubject = await this.courseService.addSubjects(
        this.courseSelected,
        this.subjectForm.value,
      );
      await this.modalController.dismiss(this.subjectForm.value);
      const toast = await this.toastController.create({
        message: `Subjects ${this.subjectForm.value.name} created.`,
        duration: 6000,
      });
      toast.present();
    } catch (error) {
      await this.modalController.dismiss();
      const toast = await this.toastController.create({
        message: `Subjects ${this.subjectForm.value.name} not created. Error status code: ${error.status}`,
        duration: 6000,
      });
      toast.present();
    }
  }
}
