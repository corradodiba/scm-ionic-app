import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoCard } from 'src/app/models/InfoCard.model';
import { IonSlide } from '@ionic/angular';
import { CoursesService } from 'src/app/providers/courses.service';
import Course from 'src/app/models/Course.model';
import { UsersService } from 'src/app/providers/users.service';
import { SubjectsService } from 'src/app/providers/subjects.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild('slides', { static: true }) slider: IonSlide;
  courses: Course[] = [];
  cards: InfoCard[] = [];

  slideOpts = {
    initialSlide: 0,
    speed: 800,
    spaceBetween: -13,
  };

  constructor(
    private coursesService: CoursesService,
    private usersService: UsersService,
    private subjectsService: SubjectsService,
  ) {}

  async ngOnInit() {
    this.courses = await this.coursesService.getAll();
    const teachers = await this.usersService.getUsersByType('Teacher');
    const students = await this.usersService.getUsersByType('Student');
    const subjects = await this.subjectsService.getAll();

    this.cards = [
      {
        title: 'Courses',
        icon: 'school',
        counter: this.courses.length,
      },
      {
        title: 'Teachers',
        icon: 'school',
        counter: teachers.length,
      },
      {
        title: 'Students',
        icon: 'school',
        counter: students.length,
      },
      {
        title: 'Subjects',
        icon: 'school',
        counter: subjects.length,
      },
    ];
  }
}
