import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NavigationItem } from 'src/app/models/NavigationItem.model';
import { IonSlide } from '@ionic/angular';
import { InfoCard } from 'src/app/models/InfoCard.model';
import { CoursesService } from 'src/app/providers/courses.service';
import { UsersService } from 'src/app/providers/users.service';
import { SubjectsService } from 'src/app/providers/subjects.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('slides', { static: true }) slider: IonSlide;
  cards: InfoCard[] = [];

  slideOpts = {
    initialSlide: 0,
    speed: 500,
    spaceBetween: -16,
  };

  tabs: NavigationItem[] = [
    // {
    //   title: 'Profile',
    //   url: '/home',
    //   icon: 'apps',
    //   guest: true,
    // },
    {
      title: 'courses',
      url: '/courses',
      icon: 'contact',
      guest: true,
    },
    {
      title: 'users',
      url: '/users',
      icon: 'contact',
      guest: true,
    },
    {
      title: 'subjects',
      url: '/subjects',
      icon: 'contact',
      guest: true,
    },
  ];
  constructor(
    private coursesService: CoursesService,
    private usersService: UsersService,
    private subjectsService: SubjectsService,
  ) {}

  async ngOnInit() {
    const [courses, teachers, students, subjects] = await Promise.all([
      this.coursesService.getAll(),
      this.usersService.getUsersByType('Teacher'),
      this.usersService.getUsersByType('Student'),
      this.subjectsService.getAll(),
    ]);

    this.cards = [
      {
        title: 'Courses',
        icon: 'bookmark',
        counter: courses.length,
      },
      {
        title: 'Students',
        icon: 'school',
        counter: students.length,
        style: 'second',
      },
      {
        title: 'Teachers',
        icon: 'briefcase',
        counter: teachers.length,
        style: 'third',
      },
      {
        title: 'Subjects',
        icon: 'bookmarks',
        counter: subjects.length,
        style: 'fourth',
      },
    ];
  }
}
