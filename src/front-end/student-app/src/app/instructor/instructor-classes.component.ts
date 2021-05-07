import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { InstructorService } from '../core/services/instructor.service';
import { TeacherClass } from './models/teacher-class.model';

@Component({
  selector: 'app-instructor-classes',
  templateUrl: './instructor-classes.component.html',
})
export class InstructorClassesComponent implements OnInit {
  constructor(
    private instructorService: InstructorService,
    private message: NzMessageService
  ) {}

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
    if (newGrade === undefined) {
      this.message.create('error', `Choose a letter`);
    } else {
      this.instructorService.updateGrade(enrollmentID, newGrade).subscribe(
        (succ) => {
          this.refreshClasses();
          this.closeDialog();
          this.message.create('success', `Grade Updated`);
        },
        (error) => {
          this.message.create('error', `Grade Updated`);
          console.log(error);
        }
      );
    }
  }
}
