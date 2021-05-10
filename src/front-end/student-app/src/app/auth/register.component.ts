import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  validateForm!: FormGroup;

  registerError: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      userType: ['student'],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    let creds = this.validateForm.value;

    let submit = {
      emailaddress: creds.email,
      password: creds.password,
      userType: creds.userType,
      firstname: creds.firstname,
      lastname: creds.lastname,
    };

    this.authenticationService.register(submit).subscribe(
      (succ) => {
        this.router.navigateByUrl('/login');
      },
      (err) => {
        this.registerError = err;
        console.log(err);
      }
    );
  }
}
