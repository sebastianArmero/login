import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.baseUrl}/auth/login`; // Nuevo endpoint de login

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  loginUser(credentials: { login: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, credentials, this.httpOptions);
  }
}
