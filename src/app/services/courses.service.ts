import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Object;

  constructor(private http: HttpClient) {
   }

   loadCourses() {
    const params = new HttpParams()
    .set('page', 1)
    .set('pageSize', 10);
    return this.http.get<Course[]>('https://localhost:44315/api/values', { params });
   }

   saveCourse(corse: Course) {

   }
}
