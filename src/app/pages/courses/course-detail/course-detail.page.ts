import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Course from 'src/app/models/Course.model';

import { CoursesService } from 'src/app/providers/courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit {
  courseId: string = undefined;
  course: Course = undefined;

  constructor(
    private coursesService: CoursesService,
    private router: ActivatedRoute,
  ) {}

  async ngOnInit() {
    console.log('ci sono arrivato!');
    this.courseId = this.router.snapshot.paramMap.get('courseId');
    console.log('courseId => ', this.courseId);
    this.course = await this.coursesService.getById(this.courseId);
    console.log('course-detail', this.course);
  }
}
