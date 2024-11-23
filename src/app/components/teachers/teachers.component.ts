import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service'; // Importa el servicio correctamente
import { Teacher } from '../../models/teacher.model'; // Importa el modelo correctamente

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers: Teacher[] = []; // Define la propiedad teachers como un array de Teacher

  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void {
    // Llamar al servicio para obtener todos los profesores al cargar el componente
    this.teacherService.getTeachers().subscribe((teachers) => {
      this.teachers = teachers;
    });
  }
}
