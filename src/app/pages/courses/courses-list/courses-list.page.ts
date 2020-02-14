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
  numTimesLeft = 1;
  coursesList: Course[] = [];

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
  async doInfinite(event): Promise<Course> {
    const courses = await this.coursesService.getAll();
    try {
      return new Promise(resolve => {
        setTimeout(() => {
          for (const course of courses) {
            this.coursesList.push(course);
          }
          this.numTimesLeft -= 1;
          event.target.complete();
          resolve();
        }, 500);
      });
    } catch (error) {
      throw { error };
    }
  }
}
