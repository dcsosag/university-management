// src/app/models/course.model.ts

import { Teacher } from './teacher.model';  // Asegúrate de importar el modelo de Teacher

export interface Course {
  id: number;          // ID único de la asignatura
  name: string;        // Nombre de la asignatura
  code: string;        // Código de la asignatura
  description: string; // Descripción de la asignatura
  teachers: Teacher[]; // Lista de profesores que imparten esta asignatura (relación con Teacher)
}
