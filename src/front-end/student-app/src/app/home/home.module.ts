import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { TeacherHomeComponent } from './components/teacher-home/teacher-home.component';


@NgModule({
  declarations: [HomeComponent, StudentHomeComponent, TeacherHomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class HomeModule { }
