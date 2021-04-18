import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  testData: any;

  ngOnInit(): void {

    // this.apiService.get('/student').subscribe(data => {
    //   this.testData = data;
    // });

  }

}
