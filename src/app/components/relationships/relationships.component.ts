import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RelationshipService } from '../../services/relationship.service';
import { Course } from '../../models/course.model';
import { Teacher } from '../../models/teacher.model';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-relationship',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.css'],
})
export class RelationshipComponent implements OnInit {
  courses$: Observable<Course[]> = of([]);
  teachers$: Observable<Teacher[]> = of([]);
  students$: Observable<Student[]> = of([]);

  constructor(private relationshipService: RelationshipService) {}

  ngOnInit(): void {
    this.loadAllData(); // Cargar todos los datos al inicializar el componente
  }

  loadAllData(): void {
    this.courses$ = this.relationshipService.getCoursesByTeacher(1); // Puedes reemplazar 1 por el ID del profesor
    this.teachers$ = this.relationshipService.getTeachersByCourse(1); // Aquí el ID de la asignatura
    this.students$ = this.relationshipService.getStudentsByCourse(1,1); // ID de asignatura
  }

  // Métodos para filtrar datos
  loadCoursesByTeacher(id_p: number): void {
    this.courses$ = this.relationshipService.getCoursesByTeacher(id_p);
  }

  loadTeachersByCourse(cod_a: number): void {
    this.teachers$ = this.relationshipService.getTeachersByCourse(cod_a);
  }

  loadStudentsByCourse(cod_a: number, grupo: number): void {
    this.students$ = this.relationshipService.getStudentsByCourse(cod_a, grupo);
  }
}
