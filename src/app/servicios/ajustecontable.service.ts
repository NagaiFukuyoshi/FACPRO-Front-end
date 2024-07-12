import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AjustecontableService {

  url = 'http://localhost/facpro/Backend/Controladores/ajustecontable.php';

  constructor(private http: HttpClient) { }

  consulta() {
    return this.http.get(`${this.url}?control=consulta`);
  }

  eliminar(id_ajuste: number) {
      return this.http.get(`${this.url}?control=eliminar&id_ajuste=${id_ajuste}`);
  }
  
  insertar(params: any) {
      return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params), {
          headers: { 'Content-Type': 'application/json'}
      });
  }
  
  editar(id_ajuste: number, params: any) {
      return this.http.post(`${this.url}?control=editar&id_ajuste=${id_ajuste}`, JSON.stringify(params), {
          headers: { 'Content-Type': 'application/json' }
      });
  }
  
  filtro(dato: any) {
      return this.http.get(`${this.url}?control=filtro&dato=${dato}`);
  }
}
