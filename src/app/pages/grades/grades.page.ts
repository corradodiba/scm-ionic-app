import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Grade } from 'src/app/models/Grade.model';
import { UsersService } from 'src/app/providers/users.service';
import FabIcon from 'src/app/models/FabIcon.model';
import User from 'src/app/models/User.model';
import { Subject } from 'src/app/models/Subject.model';
import { SubjectsService } from 'src/app/providers/subjects.service';
import { AddGradePage } from '../modals/add-grade/add-grade.page';
import { ModalController, ToastController } from '@ionic/angular';
import { UpdateGradePage } from '../modals/update-grade/update-grade.page';

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
    private toastController: ToastController,
    private modalCtrl: ModalController,
  ) {}

  async ngOnInit() {
    //let's get the subject by the url
    const subjectId = this.router.snapshot.paramMap.get('subjectId');
    this.subject = await this.subjectsService.getById(subjectId);

    //let's get all the students
    const users: User[] = await this.usersService.getUsersByType('Student');
    for (const user of users) {
      //let's get a list of grades of each student
      let allGrades = await this.usersService.getAllGradesOfAUser(user.id);
      //if they exist, let's store only the grade of the selected subject
      if (allGrades.length > 0) {
        let subjectGrades = allGrades.map(grade => {
          if (grade.subject.id == subjectId) return grade;
        });

        if (subjectGrades)
          for (const grade of subjectGrades) {
            //store them in the grades array
            if (grade) this.grades.push(grade);
          }
      }
    }
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
    try {
      const deletedGrade = await this.usersService.deleteGrade(userId, id);
      this.grades.map((grade, index) => {
        if (grade.id === deletedGrade.id) {
          this.grades.splice(index, 1);
        }
      });
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
  async updateGrade(userId: string, gradeId: string) {
    const modal = await this.modalCtrl.create({
      component: UpdateGradePage,
      componentProps: {
        gradeId,
        subjectId: this.subject.id,
        userId: userId,
      },
    });
    modal.onWillDismiss().then(data => {
      if (data.data) {
        this.grades.map((grade, index) => {
          if (grade.id === gradeId) {
            this.grades.splice(index, 1, data.data);
          }
        });
      }
    });
    await modal.present();
  }
}
