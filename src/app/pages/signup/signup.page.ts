import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from 'src/app/providers/auth.service';

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

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  signUp() {
    if (this.userForm.invalid) {
      return;
    }
    this.authService.registration(this.userForm.value);
  }
}
