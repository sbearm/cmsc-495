import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  userType: string;

  constructor() { }

  ngOnInit(): void {
    this.userType = 'student'
  }

}
