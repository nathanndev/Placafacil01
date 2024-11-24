import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacaService {

  private baseUrl: string = 'https://wdapi2.com.br/consulta/'; // Base da URL

  constructor(private http: HttpClient) { }

  // Método para consultar a placa
  consultarPlaca(placa: string, token: string): Observable<any> {
    const url = `${this.baseUrl}${placa}/${token}`; // Monta a URL completa
    return this.http.get<any>(url); // Realiza a requisição GET
  }
}
