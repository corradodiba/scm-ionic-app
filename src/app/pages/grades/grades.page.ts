import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Grade } from 'src/app/models/Grade.model';
import { UsersService } from 'src/app/providers/users.service';
import FabIcon from 'src/app/models/FabIcon.model';
import User from 'src/app/models/User.model';
import { Subject } from 'src/app/models/Subject.model';
import { SubjectsService } from 'src/app/providers/subjects.service';
import { AddGradePage } from '../modals/add-grade/add-grade.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.page.html',
  styleUrls: ['./grades.page.scss'],
})
export class GradesPage implements OnInit {
  grades: Grade[] = [];
  subject: Subject;
  buttons: FabIcon[] = [
    {
      name: 'Add',
      color: 'light',
      icon: 'add',
      action: async () => {
        this.addGrade();
      },
    },
  ];
  constructor(
    private router: ActivatedRoute,
    private usersService: UsersService,
    private subjectsService: SubjectsService,
    private modalCtrl: ModalController,
  ) {}

  async ngOnInit() {
    //prendiamo la materia che abbiamo selezionato
    const subjectId = this.router.snapshot.paramMap.get('subjectId');
    this.subject = await this.subjectsService.getById(subjectId);

    //prendo tutti gli user
    const users: User[] = await this.usersService.getUsers();
    for (const user of users) {
      console.log(user.id);

      //di ognuno prendo il loro id per prendermi i loro voti di ogni materia
      let allGrades = await this.usersService.getAllGradesOfAUser(user.id);
      //se ce ne sono, filtriamoli per la materia selezionata
      if (allGrades.length > 0) {
        let subjectGrades = allGrades.map(grade => {
          console.log(grade);

          if (grade.subject.id == subjectId) return grade;
        });
        console.log(subjectGrades);

        if (subjectGrades)
          for (const grade of subjectGrades) {
            //mettiamo questi voti nell'array
            if (grade) this.grades.push(grade);
          }
      }
    }
    console.log(this.grades);
  }
  async addGrade() {
    const modal = await this.modalCtrl.create({
      component: AddGradePage,
      componentProps: {
        subject: this.subject,
      },
    });
    modal.onWillDismiss().then(({ data }) => {
      if (!data) {
        return;
      }
      this.grades.push(data);
    });
    await modal.present();
  }
  async deleteGrade(userId: string, id: string) {
    const deletedCourse = await this.usersService.deleteGrade(userId, id);
    this.grades.map((course, index) => {
      if (course.id === deletedCourse.id) {
        this.grades.splice(index, 1);
      }
    });
  }
}
