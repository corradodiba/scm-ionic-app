import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import Course from '../models/Course.model';
import { Subject } from '../models/Subject.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  coursesApiUrl = `${environment.apiUrl}/${environment.coursesPath}`;

  constructor(private httpClient: HttpClient) {}

  getAll(): Promise<Course[]> {
    return this.httpClient.get<Course[]>(this.coursesApiUrl).toPromise();
  }

  getById(id: string): Promise<Course> {
    return this.httpClient
      .get<Course>(`${this.coursesApiUrl}/${id}`)
      .toPromise();
  }
  add(body: Course): Promise<Course> {
    return this.httpClient
      .post<Course>(`${this.coursesApiUrl}`, body)
      .toPromise();
  }
  update(id: string, body: Course): Promise<Course> {
    return this.httpClient
      .put<Course>(`${this.coursesApiUrl}/${id}`, body)
      .toPromise();
  }
  delete(id: string): Promise<Course> {
    console.log(`${this.coursesApiUrl}/${id}`);

    return this.httpClient
      .delete<Course>(`${this.coursesApiUrl}/${id}`)
      .toPromise();
  }
  addSubjects(id: string, body: Subject): Promise<Subject> {
    return this.httpClient
      .post<Subject>(
        `${this.coursesApiUrl}/${id}/${environment.subjectPath}`,
        body,
      )
      .toPromise();
  }
}
