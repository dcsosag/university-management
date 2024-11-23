// src/app/models/student.model.ts

export interface Student {
    id: number;         // ID único del estudiante
    name: string;       // Nombre completo del estudiante
    email: string;      // Correo electrónico del estudiante
    courseId: number;   // ID de la asignatura en la que está inscrito
    professorId: number; // ID del profesor que imparte la asignatura
    group: number;      // Grupo de la asignatura
    grade1: number;     // Nota del primer corte
    grade2: number;     // Nota del segundo corte
    grade3: number;     // Nota del tercer corte
  }
  