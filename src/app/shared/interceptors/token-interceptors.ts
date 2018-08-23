import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log("Inside the Interceptors");
    const token = localStorage.getItem('access-token');
    // console.log("token:",token);
    // add a custom header
    const customReq = req.clone({
      headers: req.headers.set('x-access-token', token)
    });
    return next.handle(customReq);
  }
}
