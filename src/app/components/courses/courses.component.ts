import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para trabajar con formularios
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule si necesitas interacciones con una API

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = [
    { cod_a: 'CS101', nom_a: 'Matemáticas I', int_h: 5, creditos: 4 },
    { cod_a: 'CS102', nom_a: 'Física I', int_h: 4, creditos: 3 }
  ];

  newCourse = {
    cod_a: '',
    nom_a: '',
    int_h: 0,
    creditos: 0
  };

  editingIndex: number | null = null; // Índice del curso en edición

  // Agregar o actualizar curso
  saveCourse() {
    if (
      this.newCourse.cod_a &&
      this.newCourse.nom_a &&
      this.newCourse.int_h > 0 &&
      this.newCourse.creditos > 0
    ) {
      if (this.editingIndex !== null) {
        // Actualizar curso existente
        this.courses[this.editingIndex] = { ...this.newCourse };
        this.editingIndex = null;
      } else {
        // Agregar nuevo curso
        this.courses.push({ ...this.newCourse });
      }
      this.resetForm();
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }

  // Editar curso
  editCourse(index: number) {
    this.newCourse = { ...this.courses[index] };
    this.editingIndex = index;
  }

  // Eliminar curso
  deleteCourse(index: number) {
    this.courses.splice(index, 1);
    if (this.editingIndex === index) {
      this.resetForm();
    }
  }

  // Resetear el formulario
  resetForm() {
    this.newCourse = { cod_a: '', nom_a: '', int_h: 0, creditos: 0 };
    this.editingIndex = null;
  }
}

