import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface DiaInhabil {
  diinId: number;
  diinFecha: string;
  diinFechacambio: string;
  diinRegistradopor: string;
  diinProcesoauditoria: string;
  diinEstado: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DiasInhabilesService {
  private apiUrl = `${environment.baseUrl}/diasInhabiles/api`;

  constructor(private http: HttpClient) {}

  // private getHeaders() {
  //   const token = localStorage.getItem('tokenSesion') || '';
  //   return {
  //     headers: new HttpHeaders({
  //       'Authorization': `Bearer ${token}`
  //     })
  //   };
  // }

  /** Listado de todos los días inhábiles */
  listarDias(): Observable<DiaInhabil[]> {
    // fíjate en el path: /showAll (no showALL, ni ALL mayúsculas)
    return this.http.get<DiaInhabil[]>(`${this.apiUrl}/showAll`);
  }

  /** Actualiza sólo el estado */
  actualizarEstado(id: number, nuevoEstado: boolean): Observable<DiaInhabil> {
    return this.http.put<DiaInhabil>(
      `${this.apiUrl}/updateEstado/${id}`,
      { diinEstado: nuevoEstado }
    );
  }
}
