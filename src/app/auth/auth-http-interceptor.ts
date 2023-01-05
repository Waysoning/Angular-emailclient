import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpEventType,
} from '@angular/common/http';
import { Observable, tap, filter } from 'rxjs';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Modify the request
    const modifiedReq = req.clone({
      withCredentials: true,
    });
    return next.handle(modifiedReq).pipe(
      filter((val) => val.type === HttpEventType.Sent),
      tap(() => {
        console.log('Request was sent to server.');
      })
    );
  }
}
