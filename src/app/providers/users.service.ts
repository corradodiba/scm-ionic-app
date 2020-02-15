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

  getUsersByType(type: TypeUser): Promise<User[]> {
    return this.httpClient
      .get<User[]>(`${this.userByTypeUrl}${type}`)
      .toPromise();
  }

  addUser(user: User): Promise<User> {
    return this.httpClient.post<User>(`${this.signupPath}`, user).toPromise();
  }

  deleteUser(id: string): Promise<User> {
    return this.httpClient
      .delete<User>(`${this.usersApiUrl}/${id}`)
      .toPromise();
  }

  updateUser(id: string, user: User): Promise<User> {
    for (let field in user)
      if (!(user as any)[field]) delete (user as any)[field];
    return this.httpClient
      .put<User>(`${this.usersApiUrl}/${id}`, user)
      .toPromise();
  }
}
