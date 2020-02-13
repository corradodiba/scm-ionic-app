import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Course from 'src/app/models/Course.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {
  course: Course;
  constructor(private modalController: ModalController) {}
  ngOnInit() {}
  async closeModal() {
    await this.modalController.dismiss(this.course);
  }
}
