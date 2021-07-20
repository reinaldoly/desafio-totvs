import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feriado } from '../models/feriado';

@Injectable({
  providedIn: 'root'
})
export class FeriadoService {
  baseUrl = 'https://brasilapi.com.br/api/feriados/v1';

  constructor(private http: HttpClient) { }

  getFeriados(ano: string): Observable<Feriado[]> {
    return this.http.get<Feriado[]>(`${this.baseUrl}/${ano}`);
  }
}
