import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { InstructorComponent } from './instructor.component';
import { InstructorClassesComponent } from './instructor-classes.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [InstructorComponent, InstructorClassesComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    InstructorRoutingModule
  ]
})
export class InstructorModule { }
