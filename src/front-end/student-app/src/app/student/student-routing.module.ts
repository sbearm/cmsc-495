import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentClassesComponent } from './student-classes.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
  },
  {
    path: 'classes',
    component: StudentClassesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
