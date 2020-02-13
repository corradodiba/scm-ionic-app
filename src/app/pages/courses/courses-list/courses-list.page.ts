import { Component, OnInit } from '@angular/core';

import FabIcon from 'src/app/models/FabIcon.model';
import Course from 'src/app/models/Course.model';

import { CoursesService } from 'src/app/providers/courses.service';
import { ModalController } from '@ionic/angular';
import { AddCoursePage } from '../../modals/add-course/add-course.page';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.page.html',
  styleUrls: ['./courses-list.page.scss'],
})
export class CoursesListPage implements OnInit {
  buttons: FabIcon[] = [
    {
      name: 'light',
      color: 'light',
      icon: 'add',
      action: async () => {
        this.addCourse();
      },
    },
    {
      name: 'primary',
      color: 'primary',
      icon: 'arrow-up',
      action: async () => {
        this.updateCourse();
      },
    },
    {
      name: 'danger',
      color: 'danger',
      icon: 'close',
      action: async () => {
        this.deleteCourse();
      },
    },
  ];
  courses: Course[] = [];
  selectedCourse: Course;

  constructor(
    private coursesService: CoursesService,
    private modalCtrl: ModalController,
  ) {}

  async ngOnInit() {
    this.courses = await this.coursesService.getAll();
  }

  async onSelectCourse(id: string) {
    this.selectedCourse = await this.coursesService.getById(id);
  }
  async navigate(id: string) {
    await this.onSelectCourse(id);
    //await this.navCtrl.navigateForward(this.selectedCourse.id);
  }
  async addCourse() {
    // let id: string;
    // let name: string;
    // let status: string;
    // let year: Date;
    const modal = await this.modalCtrl.create({
      component: AddCoursePage,
      componentProps: {},
    });
    modal.onWillDismiss().then(data => {
      console.log('goodbye', data.data);
    });
    return await modal.present().then(_ => {
      console.log('hello');
    });
    const { data } = await modal.onDidDismiss();
    console.log(data);
    // const errors = await this.coursesService.add({
    //   id: '',
    //   name: 'name',
    //   status: 'pending',
    //   year: new Date('2019'),
    // });
    // if (errors) this.courses.push(errors);
    // console.log(errors);

    //if (errors)
  }
  async updateCourse() {
    const course = {
      id: '5e45cbae82c850c8eefe1d41',
      name: 'name',
      status: 'complete',
      year: new Date('2019'),
    };
    const updatedCourse = await this.coursesService.update(course);
    console.log(updatedCourse);
    this.courses.map((course, index) => {
      if (course.id === updatedCourse.id)
        this.courses.splice(index, 1, updatedCourse);
    });
  }
  async deleteCourse() {
    const id = '5e45cb8782c850c8eefe1d40';
    console.log('x');
    const deletedCourse = await this.coursesService.delete(id);
    console.log(deletedCourse);
    this.courses.map((course, index) => {
      if (course.id === deletedCourse.id) this.courses.splice(index, 1);
    });
  }
}
