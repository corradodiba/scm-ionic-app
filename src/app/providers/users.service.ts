import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import User from '../models/User.model';

import { TypeUser } from '../models/TypeUser.type';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersApiUrl = `${environment.apiUrl}/${environment.usersPath}`;
  userByTypeUrl = `${this.usersApiUrl}${environment.usersTypeQuery}`;
  signupPath = `${environment.apiUrl}/${environment.signUpPath}`;

  constructor(private httpClient: HttpClient) {}

  getUsers(): Promise<User[]> {
    return this.httpClient.get<User[]>(this.usersApiUrl).toPromise();
  }

  getUserById(id: string): Promise<User> {
    return this.httpClient.get<User>(`${this.usersApiUrl}/${id}`).toPromise();
  }

  async getUsersByType(type: TypeUser) {
    return this.httpClient
      .get<User[]>(`${this.userByTypeUrl}${type}`)
      .toPromise();
  }

  async addUser(user: User) {
    return this.httpClient.post<User>(`${this.signupPath}`, user).toPromise();
  }

  async deleteUser(id: string) {
    return this.httpClient
      .delete<User>(`${this.usersApiUrl}/${id}`)
      .toPromise();
  }
}
