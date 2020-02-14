import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Course from 'src/app/models/Course.model';
import { FormGroup, FormControl } from '@angular/forms';

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
  constructor(private modalController: ModalController) {}
  ngOnInit() {}
  async closeModal() {
    await this.modalController.dismiss(this.courseForm.value);
  }
}
