import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchedUser } from '../models/FetchedUser.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginApiUrl = `${environment.apiUrl}/${environment.loginPath}`;
  constructor(private httpClient: HttpClient) {}

  access(body: { email: string; password: string }): Promise<FetchedUser> {
    return this.httpClient
      .post<FetchedUser>(this.loginApiUrl, body)
      .toPromise();
  }
}
