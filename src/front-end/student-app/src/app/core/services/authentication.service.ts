import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  constructor(private apiService: ApiService) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(credentials: any): Observable<User> {
    // if (credentials['Type'] === 'Student') {
    //   let newUser: User = {
    //     id: '10',
    //     email: 'test@gmail.com',
    //     role: 'Student',
    //     token: '123456789',
    //   };
    //   localStorage.setItem("currentUser", JSON.stringify(newUser));
    //   this.currentUserSubject.next(newUser);
    //   return this.currentUser;
    // }
    // } else if (credentials['Type'] === 'Teacher') {
    //   console.log('teacher');
    //   return null;
    // }

    return this.apiService.post("/login", credentials).pipe(
      map((user) => {
        localStorage.setItem("currentUser", JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
