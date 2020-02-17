import { Component, OnInit } from '@angular/core';
import FabIcon from 'src/app/models/FabIcon.model';
import { SubjectsService } from 'src/app/providers/subjects.service';
import { Subject } from 'src/app/models/Subject.model';
import { ModalController } from '@ionic/angular';
import { AddSubjectPage } from '../modals/add-subject/add-subject.page';
import { UpdateSubjectPage } from '../modals/update-subject/update-subject.page';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.page.html',
  styleUrls: ['./subjects.page.scss'],
})
export class SubjectsPage implements OnInit {
  subjects: Subject[] = [];
  buttons: FabIcon[] = [
    {
      name: 'Add',
      color: 'light',
      icon: 'add',
      action: async () => {
        this.addCourse();
      },
    },
  ];
  constructor(
    private subjectsService: SubjectsService,
    private modalCtrl: ModalController,
  ) {}

  async ngOnInit() {
    this.subjects = await this.subjectsService.getAll();
  }
  async addCourse() {
    const modal = await this.modalCtrl.create({
      component: AddSubjectPage,
    });
    modal.onWillDismiss().then(({ data }) => {
      if (!data) {
        return;
      }
      this.subjects.push(data);
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
    modal.onWillDismiss().then(({ data }) => {
      this.subjects.map((subject, index) => {
        if (subject.id === id) {
          this.subjects.splice(index, 1, data);
        }
      });
    });
    await modal.present();
  }
  async deleteSubject(id: string) {
    const deletedSubjects = await this.subjectsService.delete(id);
    this.subjects.map((subject, index) => {
      if (subject.id === deletedSubjects.id) {
        this.subjects.splice(index, 1);
      }
    });
  }
}
