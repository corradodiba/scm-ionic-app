import { Component, OnInit } from '@angular/core';

import FabIcon from 'src/app/models/FabIcon.model';
import Course from 'src/app/models/Course.model';

import { CoursesService } from 'src/app/providers/courses.service';
import {
  ModalController,
  NavController,
  ToastController,
} from '@ionic/angular';
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
    private toastController: ToastController,
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
    modal.onWillDismiss().then(async () => {
      this.courses = await this.coursesService.getAll();
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
    modal.onWillDismiss().then(async () => {
      this.courses = await this.coursesService.getAll();
    });
    await modal.present();
  }
  async deleteCourse(id: string) {
    try {
      await this.coursesService.delete(id);
      this.courses = await this.coursesService.getAll();
    } catch (e) {
      if (e.status == 0) {
        const toast = await this.toastController.create({
          message: 'Server crashed. Error status code: 500',
          duration: 6000,
        });
        toast.present();
      }
    }
  }
}
