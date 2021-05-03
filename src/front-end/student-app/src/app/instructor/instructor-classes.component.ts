import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../core/services/instructor.service';
import { TeacherClass } from './models/teacher-class.model';

@Component({
  selector: 'app-instructor-classes',
  templateUrl: './instructor-classes.component.html'
})
export class InstructorClassesComponent implements OnInit {

  constructor(private instructorService: InstructorService) { }

  classes: TeacherClass[];

  ngOnInit(): void {
    this.instructorService.getClasses().subscribe(data => {
      this.classes = data;

      console.log(this.classes);
    })
  }

}
