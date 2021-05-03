import { Injectable, SkipSelf } from '@angular/core';
import { Observable } from 'rxjs';
import { TeacherClass } from 'src/app/instructor/models/teacher-class.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(@SkipSelf() private apiService: ApiService) { }

  getClasses() : Observable<TeacherClass[]> {
    return this.apiService.get('/teacher');
  }

  updateGrade(enrollmentId: number, grade: string) : Observable<any> {
    return this.apiService.post('/postgrade', {'finalGrade': grade, 'enrollmentID': enrollmentId});
  }
}
