import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/providers/users.service';
import User from 'src/app/models/User.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { Subject } from 'src/app/models/Subject.model';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.page.html',
  styleUrls: ['./add-grade.page.scss'],
})
export class AddGradePage implements OnInit {
  @Input() subject: Subject;
  users: User[];
  gradeForm = new FormGroup({
    grade: new FormControl(),
    user: new FormControl(),
  });
  constructor(
    private usersService: UsersService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
  ) {}

  async ngOnInit() {
    this.users = await this.usersService.getUsersByType('Student');
  }
  abortModal() {
    this.modalCtrl.dismiss();
  }
  async closeModal() {
    const userId = this.gradeForm.value.user;
    console.log(this.gradeForm.value);

    const body = {
      grade: this.gradeForm.value.grade,
      subjectId: this.subject.id,
    };
    try {
      const newGrade = await this.usersService.addGrade(userId, body);
      await this.modalCtrl.dismiss(newGrade);
      const toast = await this.toastCtrl.create({
        message: `Grade added.`,
        duration: 6000,
      });
      toast.present();
    } catch (error) {
      await this.modalCtrl.dismiss();
      const toast = await this.toastCtrl.create({
        message: `Grade not added. Error status code: ${error.status}`,
        duration: 6000,
      });
      toast.present();
    }
  }
}
