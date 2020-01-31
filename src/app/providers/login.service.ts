import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginApiUrl = `${environment.apiUrl}/${environment.loginPath}`;
  constructor(private httpClient: HttpClient) {}

  access(body: { email: string; password: string }): Promise<User> {
    return this.httpClient.post<User>(this.loginApiUrl, body).toPromise();
  }
}
