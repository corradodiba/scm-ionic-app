import { Component, OnInit } from '@angular/core';

import FabIcon from 'src/app/models/FabIcon.model';
import Course from 'src/app/models/Course.model';

import { CoursesService } from 'src/app/providers/courses.service';
import { ModalController, NavController } from '@ionic/angular';
import { AddCoursePage } from '../../modals/add-course/add-course.page';
import { UpdateCoursePage } from '../../modals/update-course/update-course.page';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.page.html',
  styleUrls: ['./courses-list.page.scss'],
})
export class CoursesListPage implements OnInit {
  buttons: FabIcon[] = [
    {
      name: 'Add',
      color: 'light',
      icon: 'add',
      action: async () => {
        this.addCourse();
      },
    },
    // {
    //   name: 'primary',
    //   color: 'primary',
    //   icon: 'arrow-up',
    //   action: async () => {
    //     this.updateCourse();
    //   },
    // },
    // {
    //   name: 'danger',
    //   color: 'danger',
    //   icon: 'close',
    //   action: async () => {
    //     this.deleteCourse();
    //   },
    // },
  ];
  courses: Course[] = [];

  constructor(
    private coursesService: CoursesService,
    private modalCtrl: ModalController,
    private navCtrl: NavController,
  ) {}

  async ngOnInit() {
    this.courses = await this.coursesService.getAll();
  }

  async navigate(id: string) {
    await this.navCtrl.navigateForward(id);
  }
  async addCourse() {
    const modal = await this.modalCtrl.create({
      component: AddCoursePage,
    });
    modal.onWillDismiss().then(({ data }) => {
      if (!data) {
        return;
      }
      this.courses.push(data);
    });
    await modal.present();
  }
  async updateCourse(id: string) {
    const selectedCourse = await this.coursesService.getById(id);
    const modal = await this.modalCtrl.create({
      component: UpdateCoursePage,
      componentProps: {
        id,
        name: selectedCourse.name,
        status: selectedCourse.status,
        year: selectedCourse.year,
      },
    });
    modal.onWillDismiss().then(data => {
      if (data.data) {
        this.courses.map((course, index) => {
          if (course.id === id) {
            this.courses.splice(index, 1, data.data);
          }
        });
      }
    });
    await modal.present();
  }
  async deleteCourse(id: string) {
    const deletedCourse = await this.coursesService.delete(id);
    this.courses.map((course, index) => {
      if (course.id === deletedCourse.id) {
        this.courses.splice(index, 1);
      }
    });
  }
}
