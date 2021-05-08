import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { StudentService } from './services/student.service';
import { InstructorService } from './services/instructor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[ApiService, StudentService, InstructorService]
})
export class CoreModule { }
