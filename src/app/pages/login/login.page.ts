import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/providers/login.service';

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
  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  login() {
    const userLoginData = this.userForm.value;
    this.loginService.access({
      email: userLoginData.email,
      password: userLoginData.password,
    });
  }
}
