import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../../models/User.model';
import { SignUpService } from 'src/app/providers/signup.service';
import { LoginService } from 'src/app/providers/login.service';
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
    private signUpService: SignUpService,
    private loginService: LoginService,
    private navCtrl: NavController,
  ) {}

  ngOnInit() {}

  async signUp() {
    const { email, password } = await this.signUpService.registration(
      this.userForm.value,
    );
    this.fetchedUser = await this.loginService.access({ email, password });
    if (this.fetchedUser != null) {
      this.navCtrl.navigateBack(['/home']);
    }
  }
}
