import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { AuthenticationService } from "../core/services/authentication.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authenticationService.currentUserValue != null) {
      const clonedReq = req.clone({
        headers: req.headers.set('Authorization', this.authenticationService.currentUserValue.token)
    });
      return next.handle(clonedReq).pipe(
        tap(
          (succ) => {},
          (err) => {
            if (err.status == 401) {
              this.authenticationService.logout();
              this.router.navigateByUrl("/login");
            } else if (err.status == 403) {
              this.router.navigateByUrl("/forbidden");
            } else if (err.status == 404) {
              this.router.navigateByUrl("/");
            }
          }
        )
      );
    } else return next.handle(req.clone());
  }
}
