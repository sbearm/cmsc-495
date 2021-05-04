import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../core/services/instructor.service';
import { TeacherClass } from './models/teacher-class.model';

@Component({
  selector: 'app-instructor-classes',
  templateUrl: './instructor-classes.component.html',
})
export class InstructorClassesComponent implements OnInit {
  constructor(private instructorService: InstructorService) {}

  classes: TeacherClass[];

  selectedClass: TeacherClass;

  showClassDialog: boolean;

  

  ngOnInit(): void {
    this.refreshClasses();
  }

  refreshClasses(): void {
    this.instructorService.getClasses().subscribe((data) => {
      this.classes = data;

    });
  }

  toggleDialog(courseId: number): void {
    this.selectedClass = this.classes.find((x) => x.courseID === courseId);

    this.showClassDialog = !this.showClassDialog;
  }

  closeDialog(): void {
    this.showClassDialog = !this.showClassDialog;
  }

  updateGrade(enrollmentID: number, newGrade: string): void {
    this.instructorService
      .updateGrade(enrollmentID, newGrade)
      .subscribe((data) => {
        this.refreshClasses();
        this.closeDialog();
      });
  }
}
