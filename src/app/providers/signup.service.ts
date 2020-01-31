import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  signUpApiUrl = `${environment.apiUrl}/${environment.signUpPath}`;

  constructor(private httpClient: HttpClient) {}
  registration(body: User): Promise<User> {
    return this.httpClient.post<User>(this.signUpApiUrl, body).toPromise();
  }
}
