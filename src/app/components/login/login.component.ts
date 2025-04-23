// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm = { login: '', password: '' };
  errorMessage = '';

  constructor(private api: AuthService, private router: Router) {}

  login(): void {
    this.api.loginUser(this.loginForm).subscribe({
      next: response => {
        if (response.token) {
          localStorage.setItem('tokenSesion', response.token);
          this.router.navigate(['/dias-inhabiles']);
        } else {
          this.errorMessage = response.message || 'Error en la autenticación';
        }
      },
      error: () => this.errorMessage = 'Error en la autenticación. Verifique sus datos.'
    });
  }
}
