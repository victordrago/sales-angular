import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  let authReq = req;
  if (token) {
    authReq = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }
  // Fuerza JSON en errores del back
  authReq = authReq.clone({ setHeaders: { Accept: 'application/json' } });

  return next(authReq).pipe(
    catchError((err: HttpErrorResponse) => {
      const apiError = err?.error?.error ?? null;
      if (err.status === 401) {
        localStorage.removeItem('token');
      }
      return throwError(() => apiError ?? err);
    })
  );
};
