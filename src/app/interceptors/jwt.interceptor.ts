import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 1️⃣ Obtener el token del localStorage
    const token = localStorage.getItem('tokenSesion');

    // 2️⃣ Si existe, clonar la petición y añadir header Authorization
    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      // 3️⃣ Enviar la petición clonada
      return next.handle(authReq);
    }

    // Si no hay token, enviar la petición original
    return next.handle(req);
  }
}
