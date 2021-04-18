import { Component, OnInit } from '@angular/core';
import { Class } from './models/class.model';

@Component({
  selector: 'app-student-classes',
  templateUrl: './student-classes.component.html',
  styleUrls: ['./student-classes.component.css']
})
export class StudentClassesComponent implements OnInit {

  constructor() { }

  classes: Class[];

  showClassDialog: boolean;

  ngOnInit(): void {
    this.classes = [
      {
        id: 1,
        name: 'CMSC 495 Current Trends and Projects in Computer Science',
        time: 'Test',
        semester: 'Spring 2021',
        beginning: new Date('03/01/2021'),
        end: new Date('05/01/2021')
      },
      {
        id: 2,
        name: 'CMSC 495 Current Trends and Projects in Computer Science',
        time: 'Test',
        semester: 'Spring 2021',
        beginning: new Date('03/01/2021'),
        end: new Date('05/01/2021')
      },
      {
        id: 3,
        name: 'CMSC 495 Current Trends and Projects in Computer Science',
        time: 'Test',
        semester: 'Spring 2021',
        beginning: new Date('03/01/2021'),
        end: new Date('05/01/2021')
      }
    ];
  }

  toggleDialog() : void {
    this.showClassDialog = !this.showClassDialog;
  }

}
