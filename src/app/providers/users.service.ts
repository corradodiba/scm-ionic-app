import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import User from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersApiUrl = `${environment.apiUrl}/${environment.usersPath}`;

  constructor(private httpClient: HttpClient) {}
  
  allStudent(): Promise<User[]> {
    return this.httpClient.get<User[]>(this.usersApiUrl).toPromise();
  }

  getStudentById(id: string): Promise<User> {
    return this.httpClient.get<User>(`${this.usersApiUrl}/${id}`).toPromise();
  }
}
