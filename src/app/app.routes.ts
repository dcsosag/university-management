import { Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { CoursesComponent } from './components/courses/courses.component';
import { RelationshipsComponent } from './components/relationships/relationships.component';



export const routes: Routes = [
  { path: '', redirectTo: 'relationships', pathMatch: 'full' },
  { path: 'students', component: StudentsComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'relationships', component: RelationshipsComponent },
];
