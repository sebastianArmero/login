import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm = {
    login: '',
    password: ''
  };

  permiso = false;
  nombreCompleto = '';
  errorMessage: string = '';
  constructor(private api: AuthService, private router: Router) {}

  login() {
    this.api.loginUser(this.loginForm).subscribe({
      next: (response) => {
        if (response.codigo === 200) {
          this.nombreCompleto = `${response.valor.login} ${response.valor.segundonombre} ${response.valor.primerapellido} ${response.valor.segundoapellido}`;

          for (let rol of response.valor.listadoroles) {
            if (
              ['ESTUDIANTE', 'DOCENTE', 'SUPER_ADMIN_PQRSFD', 'USUARIO_EXTERNO', 'FUNCIONARIO'].includes(rol.vrolTipo) &&
              rol.vrolEstado === '1'
            ) {
              localStorage.setItem('tokenSesion', JSON.stringify(response.valor));
              this.router.navigate(['/']);
              this.permiso = true;
              break;
            }
          }
        } else {
          this.mostrarError(response.mensaje || 'Error en la autenticación.');
        }

        if (!this.permiso) {
          this.mostrarError('El usuario no tiene permisos para entrar a la aplicación');
        }
      },
      error: (error: HttpErrorResponse) => {
        let mensajeError = 'Error en la autenticación. Verifique sus datos.';
        if (error.status === 400 && error.error?.mensaje) {
          mensajeError = error.error.mensaje;
        }
        this.mostrarError(mensajeError);
      }
    });
  }

  mostrarError(msg: string) {
    alert(msg); // Puedes usar un toast, modal o snackbar si lo prefieres
  }
}
