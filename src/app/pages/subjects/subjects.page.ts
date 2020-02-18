import { Component, OnInit } from '@angular/core';
import FabIcon from 'src/app/models/FabIcon.model';
import { SubjectsService } from 'src/app/providers/subjects.service';
import { Subject } from 'src/app/models/Subject.model';
import { ModalController, NavController } from '@ionic/angular';
import { AddSubjectPage } from '../modals/add-subject/add-subject.page';
import { UpdateSubjectPage } from '../modals/update-subject/update-subject.page';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/providers/users.service';
import { Grade } from 'src/app/models/Grade.model';
import User from 'src/app/models/User.model';

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
    private router: ActivatedRoute,
    private usersService: UsersService,
    private navCtrl: NavController,
  ) {}

  async ngOnInit() {
    this.subjects = await this.subjectsService.getAll();
    const subjectId = this.router.snapshot.paramMap.get('subjectId');
    this.subject = await this.subjectsService.getById(subjectId);
    const users: User[] = await this.usersService.getUsers();
    for (const user of users) {
      const allGrades = await this.usersService.getAllGradesOfAUser(user.id);
      if (allGrades.length > 0) {
        const subjectGrades = allGrades.map(grade => {
          if (grade.subject.id === subjectId) {
            return grade;
          }
        });

        if (subjectGrades) {
          for (const grade of subjectGrades) {
            if (grade) {
              this.grades.push(grade);
            }
          }
        }
      }
    }
  }
  async navigate(id: string) {
    await this.navCtrl.navigateForward(`/grades/${id}`);
  }
  async addSubject() {
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
      if (data.data) {
        this.subjects.map((subject, index) => {
          if (subject.id === id) {
            this.subjects.splice(index, 1, data);
          }
        });
      }
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
  async getGrades() {}
}
