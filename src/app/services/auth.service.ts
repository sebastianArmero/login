import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl ='https://smartcampus.uniajc.edu.co:8444/rsu_login_client-0.0.1-SNAPSHOT/login/api/authentication'; // Apunta al backend intermedio

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: environment.tokenService // opcional, si lo usas
    })
  };

  constructor(private http: HttpClient) {}

  loginUser(credentials: { login: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, credentials, this.httpOptions);
  }
}
