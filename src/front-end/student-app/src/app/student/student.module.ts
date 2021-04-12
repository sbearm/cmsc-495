import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { StudentClassesComponent } from './student-classes.component';


@NgModule({
  declarations: [StudentComponent, StudentClassesComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class StudentModule { }
