// src/app/services/course.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses'; // URL base para las asignaturas

  constructor(private http: HttpClient) {}

  // Obtener todas las asignaturas
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  // Obtener una asignatura por ID
  getCourseById(cod_a: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${cod_a}`);
  }

  // Crear una nueva asignatura
  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course);
  }

  // Actualizar una asignatura
  updateCourse(cod_a: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${cod_a}`, course);
  }

  // Eliminar una asignatura
  deleteCourse(cod_a: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${cod_a}`);
  }
}

