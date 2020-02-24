import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ngx-socket-io';

import { environment } from 'src/environments/environment';

import AuthData from '../models/AuthData.model';
import Token from '../models/Token.model';
import { AuthorizationType } from '../models/AuthorizationType.models';

const apiUrl = `${environment.apiUrl}`;
const signupPath = `${apiUrl}/${environment.signUpPath}`;
const loginPath = `${apiUrl}/${environment.loginPath}`;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private authStatusListener = new Subject<boolean>();
  private token: string | Token = '';
  private tokenTimeout: any;
  private tokenDetails: Token;
  private userId: string;
  constructor(
    private socket: Socket,
    private http: HttpClient,
    private router: Router,
  ) {}

  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getUserId() {
    return this.userId;
  }

  isAuth() {
    return this.isAuthenticated;
  }

  registration(authData: AuthData) {
    try {
      //Api call with body
      this.http.post(signupPath, authData).subscribe(() => {
        //after beign signed up, it logs you in and goes back to the homepage
        this.access(authData);
        this.router.navigate(['/home']);
      });
    } catch (err) {
      this.authStatusListener.next(false);
    }
  }
  access(authData: AuthData) {
    //Api call with body
    this.http.post(loginPath, authData).subscribe((response: Token) => {
      //token stored
      this.token = response.token;
      //user is authenticated
      this.authStatusListener.next(true);
      if (this.token) {
        //storing timeout of the token
        this.getTokenTimeout(response.expiresIn);
        this.isAuthenticated = true;
        this.userId = response.id;
        this.authStatusListener.next(true);

        const { type, expiresIn } = response;
        this.storeAuthData({
          token: this.token,
          expiresIn,
          id: this.userId,
          type,
        });
        //if session already exists cast it to number, else set it to zero
        const numberSession = localStorage.getItem('session')
          ? Number(localStorage.getItem('session'))
          : 0;
        //sets the session as the number just found and cast it to string
        localStorage.setItem('session', (numberSession + 1).toString());
        this.router.navigate(['/home']);
      }
    });
  }

  logoutUser() {
    this.socket.connect();
    this.socket.emit('auth', localStorage.getItem('id'));
    //user is not logged in anymore
    this.isAuthenticated = false;
    //removing data
    this.token = null;
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('id');
    localStorage.removeItem('type');
    clearTimeout(this.tokenTimeout);
    this.authStatusListener.next(false);
  }

  getAuthStatus(): Token {
    const token = localStorage.getItem('token');
    const expiresIn = localStorage.getItem('expiresIn');
    const id = localStorage.getItem('id');
    const type = localStorage.getItem('type');

    if (token && expiresIn) {
      return {
        token,
        expiresIn: Number(expiresIn),
        id,
        type: type as AuthorizationType,
      };
    }
  }

  autoConfigAuthUser() {
    this.tokenDetails = this.getAuthStatus();
    if (!this.tokenDetails) {
      return;
    }
    const timestamp = new Date();
    const expirationDate = this.tokenDetails.expiresIn - timestamp.getTime();
    if (expirationDate > 0) {
      this.token = this.tokenDetails.token;
      this.isAuthenticated = true;
      this.getTokenTimeout(expirationDate / 1000);
      this.authStatusListener.next(true);
    }
  }

  storeAuthData(data: Token) {
    const timeStamp = new Date();
    const expireIn = timeStamp.getTime() + data.expiresIn * 5000;
    localStorage.setItem('token', data.token);
    localStorage.setItem('expiresIn', expireIn.toString());
    localStorage.setItem('id', data.id);
    localStorage.setItem('type', data.type);
  }

  getTokenTimeout(expiresIn: number) {
    this.tokenTimeout = setTimeout(() => {
      this.logoutUser();
    }, expiresIn * 1000);
  }
}
