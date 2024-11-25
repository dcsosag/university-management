import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para trabajar con formularios
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule si necesitas interacciones con una API

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  teachers = [
    { id_p: 1, nom_p: 'Carlos Pérez', dir_p: 'Avenida 10', tel_p: '112233445', profesion: 'Matemáticas' },
    { id_p: 2, nom_p: 'Laura González', dir_p: 'Calle 12', tel_p: '223344556', profesion: 'Física' }
  ];

  newTeacher = {
    id_p: 0,
    nom_p: '',
    dir_p: '',
    tel_p: '',
    profesion: ''
  };

  editingIndex: number | null = null; // Índice del profesor en edición

  // Agregar o actualizar profesor
  saveTeacher() {
    if (
      this.newTeacher.id_p &&
      this.newTeacher.nom_p &&
      this.newTeacher.dir_p &&
      this.newTeacher.tel_p &&
      this.newTeacher.profesion
    ) {
      if (this.editingIndex !== null) {
        // Actualizar profesor existente
        this.teachers[this.editingIndex] = { ...this.newTeacher };
        this.editingIndex = null;
      } else {
        // Agregar nuevo profesor
        this.teachers.push({ ...this.newTeacher });
      }
      this.resetForm();
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }

  // Editar profesor
  editTeacher(index: number) {
    this.newTeacher = { ...this.teachers[index] };
    this.editingIndex = index;
  }

  // Eliminar profesor
  deleteTeacher(index: number) {
    this.teachers.splice(index, 1);
    if (this.editingIndex === index) {
      this.resetForm();
    }
  }

  // Resetear el formulario
  resetForm() {
    this.newTeacher = { id_p: 0, nom_p: '', dir_p: '', tel_p: '', profesion: '' };
    this.editingIndex = null;
  }
}
