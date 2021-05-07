import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { StudentService } from '../core/services/student.service';
import { Class, ClassDetail } from './models/class.model';

@Component({
  selector: 'app-student-classes',
  templateUrl: './student-classes.component.html',
  styleUrls: ['./student-classes.component.css']
})
export class StudentClassesComponent implements OnInit {

  constructor(private studentService: StudentService, private message: NzMessageService) { }

  classes: Class[] = [];

  currentClass: ClassDetail;

  showClassDialog: boolean;

  ngOnInit(): void {
    this.refreshClasses();
  }

  toggleDialog(courseId: number) : void {
    this.studentService.getClassDetail(courseId).subscribe(data => {
      this.currentClass = data;
    })
    this.showClassDialog = !this.showClassDialog;
  }

  closeDialog() : void {
    this.showClassDialog = !this.showClassDialog;
  }

  refreshClasses() : void {
    this.studentService.getClasses().subscribe(data => {
      this.classes = data;
      console.log(this.classes);
    },
    (err) => {
      console.log(err);
    });
  }

  register(courseId: number) : void {
    this.studentService.registerClass(courseId).subscribe(succ => {
      this.refreshClasses();
    },(err) =>{
      this.message.create('error', `Error Registering`);
      console.log(err);
    })
  }
}
