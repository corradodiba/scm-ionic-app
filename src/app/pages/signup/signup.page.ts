import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from 'src/app/providers/auth.service';
import { FetchedUser } from 'src/app/models/FetchedUser.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  userForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    fiscalCode: new FormControl(),
    name: new FormControl(),
    surname: new FormControl(),
    dateOfBirth: new FormControl(),
    imagePath: new FormControl(),
    type: new FormControl(),
  });
  fetchedUser: FetchedUser;
  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
  ) {}

  ngOnInit() {}

  signUp() {
    if (this.userForm.invalid) {
      return;
    }
    this.authService.registration(this.userForm.value);
    if (localStorage.getItem('token')) {
      this.navCtrl.navigateBack(['/home']);
    }
  }
}
