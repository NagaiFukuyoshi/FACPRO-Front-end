import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprobantesService {

  url = 'http://localhost/facpro/Backend/Controladores/comprobantes.php';

  constructor(private http: HttpClient) { }

  consulta() {
    return this.http.get(`${this.url}?control=consulta`);
  }

  eliminar(id_comprobante: number) {
      return this.http.get(`${this.url}?control=eliminar&id_comprobante=${id_comprobante}`);
  }
  
  insertar(params: any) {
      return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params), {
          headers: { 'Content-Type': 'application/json' }
      });
  }
  
  editar(id_comprobante: number, params: any) {
      return this.http.post(`${this.url}?control=editar&id_comprobante=${id_comprobante}`, JSON.stringify(params), {
          headers: { 'Content-Type': 'application/json' }
      });
  }
  
  filtro(dato: any) {
      return this.http.get(`${this.url}?control=filtro&dato=${dato}`);
  }
}
