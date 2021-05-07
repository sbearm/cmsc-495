import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  userType: string = 'student';

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.userType = this.authenticationService.currentUserValue.userType
    
  }

  logout() : void {
    this.authenticationService.logout()
    this.router.navigateByUrl("/login");
  }

}
