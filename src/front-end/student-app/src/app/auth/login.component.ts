import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  loginError: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    if (this.authenticationService.currentUserValue != null) {
      this.router.navigate(['/home']);
    }
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      name: ['Sam'],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    let form = this.validateForm.value;

    let creds = {'emailaddress': form.email, 'password': form.password };

    this.authenticationService.login(creds).subscribe(
      (succ) => {
        localStorage.setItem("currentUser", JSON.stringify(succ));
        this.authenticationService.setCurrentUserSubject(succ);
        this.router.navigate(['/home']);
      },
      (err) => {
        this.loginError = err;
        console.log(err);
      }
    );
  }

  quickLogin(): void {
    let form = this.validateForm.value;

    let creds = {'emailaddress': form.email, 'password': form.password };

    this.authenticationService.register(creds).subscribe(
      (succ) => {
        this.router.navigate(['/home']);
      },
      (err) => {}
    );
  }

  
}
