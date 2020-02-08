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
}
