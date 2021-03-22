import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  jsonHeadersConfig = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(`${environment.api_url}${path}`, { 'headers': this.jsonHeadersConfig} )
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http
      .put(`${environment.api_url}${path}`, JSON.stringify(body), { 'headers': this.jsonHeadersConfig})
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: any): Observable<any> {
    return this.http
      .post(`${environment.api_url}${path}`, body, { 'headers': this.jsonHeadersConfig})
      .pipe(catchError(this.formatErrors));
  }

  postFormData(path: string, data: FormData): Observable<any> {
    let config = {
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json'
    };
    return this.http
      .post(`${environment.api_url}${path}`, data)
      .pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http
      .delete(`${environment.api_url}${path}`, { 'headers': this.jsonHeadersConfig})
      .pipe(catchError(this.formatErrors));
  }
}
