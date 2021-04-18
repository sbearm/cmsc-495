import { Component, OnInit } from '@angular/core';
import { RegisteredClass } from '../../models/registered-class.model';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  constructor() { }

  registeredClasses: RegisteredClass[];

  ngOnInit(): void {
    this.registeredClasses = [
      {
        name: 'English 101',
        beginDate: new Date('03/01/2021'),
        endDate: new Date('05/01/2021'),
        currentGrade: 'N/A'
      },
      {
        name: 'English 201',
        beginDate: new Date('03/01/2021'),
        endDate: new Date('05/01/2021'),
        currentGrade: 'A'
      }
    ];
  }

}
