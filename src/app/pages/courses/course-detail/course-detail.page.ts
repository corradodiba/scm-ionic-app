import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Course from 'src/app/models/Course.model';

import { CoursesService } from 'src/app/providers/courses.service';
import FabIcon from 'src/app/models/FabIcon.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit {
  courseId: string;
  course: Course;

  buttons: FabIcon[] = [
    {
      name: 'Add',
      color: 'light',
      icon: 'add',
      action: async () => {
        this.addSubject();
      },
    },
  ];

  constructor(
    private coursesService: CoursesService,
    private router: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.courseId = this.router.snapshot.paramMap.get('courseId');
    this.course = await this.coursesService.getById(this.courseId);
  }
  async addSubject() {
    //   const modal = await this.modalCtrl.create({
    //     component: AddCoursePage,
    //   });
    //   modal.onWillDismiss().then(({ data }) => {
    //     if (!data) {
    //       return;
    //     }
    //     this.courses.push(data);
    //   });
    //   await modal.present();
    // }
  }
}
