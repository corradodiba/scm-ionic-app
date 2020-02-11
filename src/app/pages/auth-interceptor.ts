import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from '../providers/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authRequest = req.clone({
      headers: req.headers.set(
        'Authorization',
        (this.authService.getToken() as string) || '',
      ),
    });
    return next.handle(authRequest);
  }
}
