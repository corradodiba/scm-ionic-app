import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../models/Subject.model';

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  subjectsApiUrl = `${environment.apiUrl}/${environment.subjectPath}`;

  constructor(private httpClient: HttpClient) {}

  getAll(): Promise<Subject[]> {
    return this.httpClient.get<Subject[]>(this.subjectsApiUrl).toPromise();
  }

  getById(id: string): Promise<Subject> {
    return this.httpClient
      .get<Subject>(`${this.subjectsApiUrl}/${id}`)
      .toPromise();
  }
  add(body: Subject): Promise<Subject> {
    return this.httpClient
      .post<Subject>(`${this.subjectsApiUrl}`, body)
      .toPromise();
  }
  update(id: string, body: Subject): Promise<Subject> {
    return this.httpClient
      .put<Subject>(`${this.subjectsApiUrl}/${id}`, body)
      .toPromise();
  }
  delete(id: string): Promise<Subject> {
    console.log(`${this.subjectsApiUrl}/${id}`);

    return this.httpClient
      .delete<Subject>(`${this.subjectsApiUrl}/${id}`)
      .toPromise();
  }
}
