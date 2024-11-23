import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';  // Correcta la ruta
import { Course } from '../../models/course.model';  // Correcta la ruta

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',  
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];  // Array para almacenar las asignaturas

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    // Llamar al servicio para obtener todas las asignaturas al cargar el componente
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }
}

