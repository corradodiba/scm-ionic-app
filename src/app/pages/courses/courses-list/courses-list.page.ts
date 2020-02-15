import { Component, OnInit } from '@angular/core';

import Course from 'src/app/models/Course.model';

import { CoursesService } from 'src/app/providers/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.page.html',
  styleUrls: ['./courses-list.page.scss'],
})
export class CoursesListPage implements OnInit {
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
}
