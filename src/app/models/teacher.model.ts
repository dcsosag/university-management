// src/app/models/teacher.model.ts

import { Course } from './course.model';  // Asegúrate de importar el modelo de Course

export interface Teacher {
  id: number;          // ID único del profesor
  name: string;        // Nombre completo del profesor
  email: string;       // Correo electrónico del profesor
  department: string;  // Departamento o área académica del profesor
  courses: Course[];   // Lista de asignaturas que el profesor imparte (relación con Course)
}
