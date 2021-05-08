import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { StudentClassesComponent } from './student-classes.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    canActivate: [AuthGuard],
    data: { permittedRoles: ["student"] }
  },
  {
    path: 'classes',
    component: StudentClassesComponent,
    canActivate: [AuthGuard],
    data: { permittedRoles: ["student"] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
