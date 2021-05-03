import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { InstructorClassesComponent } from './instructor-classes.component';
import { InstructorComponent } from './instructor.component';
import { InstructorModule } from './instructor.module';

const routes: Routes = [
  {
    path: '',
    component: InstructorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'classes',
    component: InstructorClassesComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
