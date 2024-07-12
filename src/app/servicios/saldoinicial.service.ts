import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaldoinicialService {

  url = 'http://localhost/facpro/Backend/Controladores/saldoinicial.php';

  constructor(private http: HttpClient) { }

  consulta() {
    return this.http.get(`${this.url}?control=consulta`);
  }

  eliminar(id_saldoinicial: number) {
      return this.http.get(`${this.url}?control=eliminar&id_saldoinicial=${id_saldoinicial}`);
  }
  
  insertar(params: any) {
      return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params), {
          headers: { 'Content-Type': 'application/json'}
      });
  }
  
  editar(id_saldoinicial: number, params: any) {
      return this.http.post(`${this.url}?control=editar&id_saldoinicial=${id_saldoinicial}`, JSON.stringify(params), {
          headers: { 'Content-Type': 'application/json' }
      });
  }
  
  filtro(dato: any) {
      return this.http.get(`${this.url}?control=filtro&dato=${dato}`);
  }
}
