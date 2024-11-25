import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Relationship } from '../models/relationship.model';
import { Teacher } from '../models/teacher.model';
import { Course } from '../models/course.model';
import { Student } from '../models/student.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RelationshipService {
  private apiUrl = `${environment.apiUrl}/relationships`;

  constructor(private http: HttpClient) {}

  // Obtener todas las relaciones
  getRelationships(): Observable<Relationship[]> {
    return this.http.get<Relationship[]>(this.apiUrl);
  }

  // Obtener todas las asignaturas que imparte un profesor
  getCoursesByTeacher(teacherId: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/teacher/${teacherId}/courses`);
  }

  // Obtener todos los profesores que imparten una asignatura
  getTeachersByCourse(courseId: number): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.apiUrl}/course/${courseId}/teachers`);
  }

  // Obtener todos los estudiantes inscritos en una asignatura específica
  getStudentsByCourse(courseId: number): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/course/${courseId}/students`);
  }

  // Obtener todas las asignaturas que cursa un estudiante
  getCoursesByStudent(studentId: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/student/${studentId}/courses`);
  }

  // Registrar una relación entre un estudiante y una asignatura
  registerStudentInCourse(studentId: number, courseId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/student/${studentId}/course/${courseId}`, {});
  }

  // Registrar una relación entre un profesor y una asignatura (grupo y horario)
  assignCourseToTeacher(teacherId: number, courseId: number, group: number, schedule: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/teacher/${teacherId}/course/${courseId}`, { group, schedule });
  }

  // Eliminar una relación entre un estudiante y una asignatura
  unregisterStudentFromCourse(studentId: number, courseId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/student/${studentId}/course/${courseId}`);
  }

  // Eliminar una relación entre un profesor y una asignatura
  removeCourseFromTeacher(teacherId: number, courseId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/teacher/${teacherId}/course/${courseId}`);
  }
}
