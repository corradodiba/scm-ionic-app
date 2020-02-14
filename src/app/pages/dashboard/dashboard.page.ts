import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoCard } from 'src/app/models/InfoCard.model';
import { IonSlide } from '@ionic/angular';
import { CoursesService } from 'src/app/providers/courses.service';
import Course from 'src/app/models/Course.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild('slides', { static: true }) slider: IonSlide;
  courses: Course[];
  cards: InfoCard[] = [];
  numTimesLeft = 1;
  coursesList: Course[] = [];

  slideOpts = {
    initialSlide: 0,
    speed: 800,
    spaceBetween: -13,
  };

  constructor(private coursesService: CoursesService) {}

  async ngOnInit() {
    this.courses = await this.coursesService.getAll();
    this.cards = [
      {
        title: 'Courses',
        icon: 'school',
        counter: this.courses.length,
      },
      {
        title: 'Teachers',
        icon: 'school',
        counter: this.courses.length,
      },
      {
        title: 'Students',
        icon: 'school',
        counter: this.courses.length,
      },
      {
        title: 'Subjects',
        icon: 'school',
        counter: this.courses.length,
      },
    ];
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
