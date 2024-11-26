import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { Teacher } from '../models/teacher.model';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class RelationshipService {
  private baseUrl = 'http://localhost:3000/api'; // Cambia esto a la URL de tu backend

  constructor(private http: HttpClient) {}

  // Obtener cursos asignados a un profesor
  getCoursesByTeacher(id_p: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/courses/teacher/${id_p}`);
  }

  // Obtener profesores asignados a una asignatura
  getTeachersByCourse(cod_a: number): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.baseUrl}/teachers/course/${cod_a}`);
  }

  // Obtener estudiantes inscritos en una asignatura y grupo específicos
  getStudentsByCourse(cod_a: number, grupo: number): Observable<Student[]> {
    return this.http.get<Student[]>(
      `${this.baseUrl}/students/course/${cod_a}/group/${grupo}`
    );
  }
}

