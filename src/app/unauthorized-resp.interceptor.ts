import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs'
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth-service.service';


@Injectable()
export class UnauthorizedResponseInterceptor implements HttpInterceptor {
  
constructor(public dialog:MatDialog) {}

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('UnauthorizedResponseInterceptor');

    return next.handle(request).pipe((tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
            this.dialog.open(LoginComponent);
        }
      }
    })));
  }
}