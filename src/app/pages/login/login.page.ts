import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/providers/auth.service';
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
    private authService: AuthService,
    private navCtrl: NavController,
  ) {}

  ngOnInit() {}

  login() {
    const { email, password } = this.userForm.value;
    this.authService.access({
      email,
      password,
    });
    if (localStorage.getItem('token')) {
      this.navCtrl.navigateBack(['/home']);
    }
  }
}
