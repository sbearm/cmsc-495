import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthenticationService } from '../core/services/authentication.service';
import { ProfileService } from '../core/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private authenticationService: AuthenticationService,
    private message: NzMessageService
  ) {
    this.profileService.getProfile().subscribe((data) => {
      this.profileForm = this.fb.group({
        emailaddress: [null],
        firstname: [null],
        lastname: [null],
        homeaddress: [null],
        city: [null],
        state: [null],
        zipcode: [null],
      });
    });
  }

  profileForm: FormGroup;

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((data) => {
      this.profileForm = this.fb.group({
        emailaddress: [data.emailaddress],
        firstname: [data.firstname],
        lastname: [data.lastname],
        homeaddress: [data.homeaddress],
        city: [data.city],
        state: [data.state],
        zipcode: [data.zipcode],
      });
    });
  }

  submitForm() : void {
    let submit = this.profileForm.value;
    this.profileService.updateProfile(submit).subscribe(succ => {
      this.message.create('succes', `Updated Profile`);
    }, (err) => {
      this.message.create('error', `Error Updating Profile`);
    });
  }
}
