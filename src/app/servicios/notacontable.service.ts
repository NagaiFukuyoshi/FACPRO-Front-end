import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotacontableService {

  url = 'http://localhost/facpro/Backend/Controladores/notacontable.php';

  constructor(private http: HttpClient) { }

  consulta() {
    return this.http.get(`${this.url}?control=consulta`);
  }

  eliminar(id_nota: number) {
      return this.http.get(`${this.url}?control=eliminar&id_nota=${id_nota}`);
  }
  
  insertar(params: any) {
      return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params), {
          headers: { 'Content-Type': 'application/json'}
      });
  }
  
  editar(id_nota: number, params: any) {
      return this.http.post(`${this.url}?control=editar&id_nota=${id_nota}`, JSON.stringify(params), {
          headers: { 'Content-Type': 'application/json' }
      });
  }
  
  filtro(dato: any) {
      return this.http.get(`${this.url}?control=filtro&dato=${dato}`);
  }
}
