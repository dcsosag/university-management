import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para trabajar con formularios
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule si necesitas interacciones con una API

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students = [
    { cod_e: 1, nom_e: 'Juan Pérez', dir_e: 'Calle 123', tel_e: '123456789', fech_nac: '2000-01-01' },
    { cod_e: 2, nom_e: 'María García', dir_e: 'Carrera 45', tel_e: '987654321', fech_nac: '1998-05-15' }
  ];

  newStudent = {
    cod_e: 0,
    nom_e: '',
    dir_e: '',
    tel_e: '',
    fech_nac: ''
  };

  editingIndex: number | null = null; // Índice del estudiante en edición

  // Agregar o actualizar estudiante
  saveStudent() {
    if (
      this.newStudent.cod_e &&
      this.newStudent.nom_e &&
      this.newStudent.dir_e &&
      this.newStudent.tel_e &&
      this.newStudent.fech_nac
    ) {
      if (this.editingIndex !== null) {
        // Actualizar estudiante existente
        this.students[this.editingIndex] = { ...this.newStudent };
        this.editingIndex = null;
      } else {
        // Agregar nuevo estudiante
        this.students.push({ ...this.newStudent });
      }
      this.resetForm();
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }

  // Editar estudiante
  editStudent(index: number) {
    this.newStudent = { ...this.students[index] };
    this.editingIndex = index;
  }

  // Eliminar estudiante
  deleteStudent(index: number) {
    this.students.splice(index, 1);
    if (this.editingIndex === index) {
      this.resetForm();
    }
  }

  // Resetear el formulario
  resetForm() {
    this.newStudent = { cod_e: 0, nom_e: '', dir_e: '', tel_e: '', fech_nac: '' };
    this.editingIndex = null;
  }
}
