import { Component, OnInit } from '@angular/core';

import FabIcon from 'src/app/models/FabIcon.model';
import Course from 'src/app/models/Course.model';

import { CoursesService } from 'src/app/providers/courses.service';
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.page.html',
  styleUrls: ['./courses-list.page.scss'],
})
export class CoursesListPage implements OnInit {
  buttons: FabIcon[] = [
    {
      name: 'light',
      icon: 'add',
      action: this.addCourse,
    },
    {
      name: 'primary',
      icon: 'arrow-up',
      action: this.updateCourse,
    },
    {
      name: 'danger',
      icon: 'close',
      action: this.deleteCourse,
    },
  ];
  courses: Course[] = [];
  selectedCourse: Course;

  constructor(private coursesService: CoursesService) {}

  async ngOnInit() {
    this.courses = await this.coursesService.getAll();
  }

  async onSelectCourse(id: string) {
    this.selectedCourse = await this.coursesService.getById(id);
  }
  async navigate(id: string) {
    await this.onSelectCourse(id);
  }
  addCourse() {
    console.log('Funonzia');
  }
  updateCourse() {
    console.log('Funonzia');
  }
  deleteCourse() {
    console.log('Funonzia');
  }
}
