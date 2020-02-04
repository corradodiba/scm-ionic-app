import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import User from '../models/User.model';

import { typeUser } from '../interfaces/typeUser.type';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersApiUrl = `${environment.apiUrl}/${environment.usersPath}`;

  constructor(private httpClient: HttpClient) {}

  getUsers(): Promise<User[]> {
    return this.httpClient.get<User[]>(this.usersApiUrl).toPromise();
  }

  getUserById(id: string): Promise<User> {
    return this.httpClient.get<User>(`${this.usersApiUrl}/${id}`).toPromise();
  }

  async getUsersByType(type: typeUser) {
    const user = await this.getUsers();
    return user.filter((fetchedUser: User) => fetchedUser.type === type);
  }
}
