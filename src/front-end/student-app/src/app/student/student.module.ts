import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class StudentModule { }
