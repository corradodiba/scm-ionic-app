import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../../models/User.model';
import { SignUpService } from 'src/app/providers/signup.service';

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
  constructor(private signUpService: SignUpService) {}

  ngOnInit() {}

  signUp() {
    const user: User = this.userForm.value;
    this.signUpService.registration(user);
  }
  //user:admin@admin.admin pass: admin
}
