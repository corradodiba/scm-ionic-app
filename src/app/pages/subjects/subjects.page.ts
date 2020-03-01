import { Component, OnInit } from '@angular/core';
import FabIcon from 'src/app/models/FabIcon.model';
import { SubjectsService } from 'src/app/providers/subjects.service';
import { Subject } from 'src/app/models/Subject.model';
import {
  ModalController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { AddSubjectPage } from '../modals/add-subject/add-subject.page';
import { UpdateSubjectPage } from '../modals/update-subject/update-subject.page';
import { Grade } from 'src/app/models/Grade.model';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.page.html',
  styleUrls: ['./subjects.page.scss'],
})
export class SubjectsPage implements OnInit {
  subjects: Subject[] = [];
  grades: Grade[] = [];
  subject: Subject;
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
    private subjectsService: SubjectsService,
    private modalCtrl: ModalController,
    private toastController: ToastController,
    private navCtrl: NavController,
  ) {}

  async ngOnInit() {
    this.subjects = await this.subjectsService.getAll();
  }
  async navigate(id: string) {
    await this.navCtrl.navigateForward(`/grades/${id}`);
  }
  async addSubject() {
    const modal = await this.modalCtrl.create({
      component: AddSubjectPage,
    });
    modal.onWillDismiss().then(async () => {
      this.subjects = await this.subjectsService.getAll();
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
      this.subjects = await this.subjectsService.getAll();
    });
    await modal.present();
  }
  async deleteSubject(id: string) {
    try {
      await this.subjectsService.delete(id);
      this.subjects = await this.subjectsService.getAll();
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
  async getGrades() {}
}
