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
  course: any = [];

  constructor(private coursesService: CoursesService) {}

  async ngOnInit() {
    this.courses = await this.coursesService.getAll();
    console.log(this.courses);
  }

  async onSelectCourse(id: string) {
    this.selectedCourse = await this.coursesService.getById(id);
  }
  async navigate(id: string) {
    await this.onSelectCourse(id);
    // await this.navCtrl.navigateForward(this.selectedCourse.id);
  }
  doInfinite(event) {
    setTimeout(() => {
      this.coursesService.getAll().then(courses => {
        for (const course of courses) {
          this.course.push(course);
        }
      });
      this.numTimesLeft -= 1;
      event.target.complete();
    }, 500);
  }
}
