import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  userType: string = 'student';

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.userType = this.authenticationService.currentUserValue.userType
    
  }

}
