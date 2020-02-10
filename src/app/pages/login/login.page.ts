import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/providers/auth.service';
import Token from 'src/app/models/Token.model';

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
  userLogged: Token;
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    const { email, password } = this.userForm.value;
    this.authService.access({
      email,
      password,
    });
  }
}
