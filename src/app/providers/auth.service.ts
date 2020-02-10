import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchedUser } from '../models/FetchedUser.model';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import User from '../models/User.model';

const ApiUrl = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;
  private tokenTimeout;
  private authStatusListener = new Subject<boolean>();
  private fetchedUser: FetchedUser;
  constructor(private httpClient: HttpClient) {}

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  registration(body: User) {
    this.httpClient
      .post<User>(`${ApiUrl}/${environment.signUpPath}`, body)
      .subscribe(user => {
        const { email, password } = user;
        this.access({ email, password });
      });
  }
  access(body: { email: string; password: string }) {
    console.log('body => ', body);
    this.httpClient
      .post<FetchedUser>(`${ApiUrl}/${environment.loginPath}`, { ...body })
      .subscribe(resp => {
        console.log('resp =>', resp);
        this.fetchedUser = resp;
        if (this.fetchedUser.token) {
          this.getTokenTimeout(this.fetchedUser.expiresIn);
          this.isAuthenticated = true;
          const timeStamp = new Date();
          const expirationDate = new Date(
            timeStamp.getTime() + this.fetchedUser.expiresIn * 1000,
          );
          console.log('localStorage =>', localStorage.getItem('type'));
          localStorage.setItem('token', this.fetchedUser.token);
          localStorage.setItem('expiresIn', expirationDate.toISOString());
          localStorage.setItem('userId', this.fetchedUser.id);
          localStorage.setItem('type', this.fetchedUser.type);
          this.authStatusListener.next(true);
        }
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
    this.authStatusListener.next(false);
  }
  autoConfigAuthUser() {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    const loggedUser = {
      token,
      expiresIn: new Date(localStorage.getItem('expiresIn')),
      id: localStorage.getItem('userId'),
      type: localStorage.getItem('type'),
    };
    if (!loggedUser) {
      return;
    }
    const timestamp = new Date();
    const expirationDate = loggedUser.expiresIn.getTime() - timestamp.getTime();
    if (expirationDate > 0) {
      this.fetchedUser.token = loggedUser.token;
      this.isAuthenticated = true;
      this.getTokenTimeout(expirationDate / 1000);
      this.authStatusListener.next(true);
    }
  }
}
