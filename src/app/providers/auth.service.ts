import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchedUser } from '../models/FetchedUser.model';
import { environment } from 'src/environments/environment';
import { User } from '../models/User.model';
const ApiUrl = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;
  private tokenTimeout;
  private fetchedUser: FetchedUser;
  constructor(private httpClient: HttpClient) {}

  async access(body: { email: string; password: string }) {
    this.httpClient
      .post<FetchedUser>(`${ApiUrl}/${environment.loginPath}`, body)
      .subscribe(resp => {
        this.fetchedUser = resp;
        if (this.fetchedUser.token) {
          this.getTokenTimeout(this.fetchedUser.expiresIn);
          this.isAuthenticated = true;
          const timeStamp = new Date();
          const expirationDate = new Date(
            timeStamp.getTime() + this.fetchedUser.expiresIn * 1000,
          );
          localStorage.setItem('token', this.fetchedUser.token);
          localStorage.setItem('expiresIn', expirationDate.toISOString());
          localStorage.setItem('userId', this.fetchedUser.id);
          localStorage.setItem('type', this.fetchedUser.type);
        }
      });
    console.log(this.fetchedUser);
  }
  registration(body: User) {
    const { email, password } = body;
    this.httpClient
      .post<User>(`${ApiUrl}/${environment.signUpPath}`, body)
      .subscribe(placeholder => {
        this.access({ email, password });
      });
  }
  getTokenTimeout(expiresIn: number) {
    this.tokenTimeout = setTimeout(() => {
      this.logoutUser();
    }, expiresIn * 1000);
  }
  logoutUser() {
    this.isAuthenticated = false;
    this.fetchedUser = null;
    clearTimeout(this.tokenTimeout);
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('userId');
    localStorage.removeItem('type');
  }
}
