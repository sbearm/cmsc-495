import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private apiService: ApiService) { }

  getProfile() : Observable<Profile>{
    return this.apiService.get('/profile');
  }

  updateProfile(profile: any) : Observable<any>{
    return this.apiService.post('/profileupdate', profile);
  }
}
