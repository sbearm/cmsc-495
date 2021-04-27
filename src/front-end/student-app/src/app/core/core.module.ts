import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { AuthenticationService } from './services/authentication.service';
import { StudentService } from './services/student.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[ApiService, AuthenticationService, StudentService]
})
export class CoreModule { }
