import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/providers/login.service';
import { FetchedUser } from 'src/app/models/FetchedUser.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  userLogged: FetchedUser;
  constructor(
    private loginService: LoginService,
    private navCtrl: NavController,
  ) {}

  ngOnInit() {}

  async login() {
    const { email, password } = this.userForm.value;
    this.userLogged = await this.loginService.access({
      email,
      password,
    });
    if (this.userLogged != null) {
      this.navCtrl.navigateBack(['/home']);
    }
  }
}
