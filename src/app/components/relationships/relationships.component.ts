import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Para hacer las solicitudes HTTP
import { Student } from '../../models/student.model';
import { Teacher } from '../../models/teacher.model';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-relationship',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.css']
})
export class RelationshipsComponent implements OnInit {
  students: Student[] = [];
  teachers: Teacher[] = [];
  courses: Course[] = [];
  relationships: any[] = []; // Este arreglo contendrá las relaciones entre estudiantes, profesores y cursos
  
  // Variables para almacenar las entradas de la relación
  selectedStudent: Student | null = null;
  selectedTeacher: Teacher | null = null;
  selectedCourse: Course | null = null;
  group: number = 0;
  schedule: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }

  // Método para cargar los datos de estudiantes, profesores y cursos
  loadData(): void {
    // Obtener los estudiantes
    this.http.get<Student[]>('/api/students').subscribe((data) => {
      this.students = data;
    });

    // Obtener los profesores
    this.http.get<Teacher[]>('/api/teachers').subscribe((data) => {
      this.teachers = data;
    });

    // Obtener los cursos
    this.http.get<Course[]>('/api/courses').subscribe((data) => {
      this.courses = data;
    });

    // Obtener las relaciones existentes (por ejemplo, de estudiantes y profesores que dictan cursos)
    this.http.get<any[]>('/api/relationships').subscribe((data) => {
      this.relationships = data;
    });
  }

  // Método para agregar una relación entre estudiante, profesor y asignatura
  addRelationship(): void {
    const relationship = {
      studentId: this.selectedStudent?.cod_e,
      teacherId: this.selectedTeacher?.id_p,
      courseId: this.selectedCourse?.cod_a,
      group: this.group,
      schedule: this.schedule
    };

    // Realizar la petición HTTP para agregar la relación
    this.http.post('/api/relationships', relationship).subscribe(() => {
      this.loadData(); // Recargar datos para reflejar la nueva relación
    });
  }

  // Método para eliminar una relación
  deleteRelationship(id: number): void {
    this.http.delete(`/api/relationships/${id}`).subscribe(() => {
      this.loadData(); // Recargar datos para reflejar la eliminación
    });
  }

  // Método para actualizar una relación (grupo o horario)
  updateRelationship(id: number): void {
    const updatedRelationship = {
      group: this.group,
      schedule: this.schedule
    };

    this.http.put(`/api/relationships/${id}`, updatedRelationship).subscribe(() => {
      this.loadData(); // Recargar datos para reflejar la actualización
    });
  }
}
