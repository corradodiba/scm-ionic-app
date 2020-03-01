import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Course from 'src/app/models/Course.model';

import { CoursesService } from 'src/app/providers/courses.service';
import FabIcon from 'src/app/models/FabIcon.model';
import {
  ModalController,
  NavController,
  IonSlides,
  ToastController,
} from '@ionic/angular';
import { Subject } from 'src/app/models/Subject.model';
import { AddSubjectPage } from '../../modals/add-subject/add-subject.page';
import { SubjectsService } from 'src/app/providers/subjects.service';
import { UpdateSubjectPage } from '../../modals/update-subject/update-subject.page';
import { UsersService } from 'src/app/providers/users.service';
import { Grade } from 'src/app/models/Grade.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit {
  @ViewChild('slides', { static: true }) slider: IonSlides;

  courseId: string;
  course: Course;
  subjects: Subject[] = [];
  subject: Subject;
  segmentShowed = [];
  segment = 0;
  segments = ['subjects', 'students', 'teachers'];

  buttons: FabIcon[] = [
    {
      name: 'Add',
      color: 'light',
      icon: 'add',
      action: async () => {
        this.addSubject();
      },
    },
    // {
    //   name: 'Add Student',
    //   color: 'primary',
    //   icon: 'arrow-up',
    //   action: async () => {},
    // },
  ];
  slideOpts = {
    initialSlide: 0,
    speed: 1000,
  };

  constructor(
    private coursesService: CoursesService,
    private subjectsService: SubjectsService,
    private router: ActivatedRoute,
    private modalCtrl: ModalController,
    private toastController: ToastController,
    private navCtrl: NavController,
  ) {}

  async ngOnInit() {
    this.courseId = this.router.snapshot.paramMap.get('courseId');
    this.course = await this.coursesService.getById(this.courseId);
    this.subjects =
      this.course.subjects.length !== 0 ? this.course.subjects : [];
  }
  async navigate(id: string) {
    await this.navCtrl.navigateForward(`/grades/${id}`);
  }
  async segmentChanged() {
    const selectedSegment = this.segments[this.segment];
    this.segmentShowed =
      selectedSegment === 'subjects'
        ? this.course.subjects
        : selectedSegment === 'teachers'
        ? this.course.teachers
        : this.course.students;
  }
  async addSubject() {
    const modal = await this.modalCtrl.create({
      component: AddSubjectPage,
      componentProps: { courseSelected: this.courseId },
    });
    modal.onWillDismiss().then(async () => {
      this.course = await this.coursesService.getById(this.courseId);
    });
    await modal.present();
  }
  async updateSubject(id: string) {
    const selectedSubject = await this.subjectsService.getById(id);
    const modal = await this.modalCtrl.create({
      component: UpdateSubjectPage,
      componentProps: {
        id,
        name: selectedSubject.name,
        hours: selectedSubject.hours,
      },
    });
    modal.onWillDismiss().then(async () => {
      this.course = await this.coursesService.getById(this.courseId);
    });
    await modal.present();
  }
  async deleteSubject(id: string) {
    try {
      await this.subjectsService.delete(id);
      this.course = await this.coursesService.getById(this.courseId);
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
