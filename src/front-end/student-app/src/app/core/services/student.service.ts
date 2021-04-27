import { Injectable, SkipSelf } from '@angular/core';
import { Observable } from 'rxjs';
import { Class, ClassDetail } from 'src/app/student/models/class.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(@SkipSelf() private apiService: ApiService) {}

  getClasses(): Observable<Class[]> {
    return this.apiService.get('/classes');
  }

  getClassDetail(courseId: number): Observable<ClassDetail> {
    return this.apiService.get('/coursedetail/' + courseId);
  }

  registerClass(courseId: number): Observable<any> {
    return this.apiService.post('/courseregistration', { courseID: courseId });
  }
}
