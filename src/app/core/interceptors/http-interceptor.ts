import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@features/auth/services/auth-service';

import { environment } from '../../../environments/environment';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).getToken();

  if (token) {
    return next(
      req.clone({
        url: `${environment.apiUrl}${req.url}`,
        setHeaders: { Authorization: `Bearer ${token}` },
      }),
    );
  } else {
    return next(req.clone({ url: `${environment.apiUrl}${req.url}` }));
  }
};
