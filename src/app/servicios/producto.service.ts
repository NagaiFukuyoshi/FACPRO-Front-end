import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost/facpro/Backend/Controladores/producto.php';

  constructor(private http: HttpClient) { }

  consulta(): Observable<any> {
    return this.http.get(`${this.url}?control=consulta`);
  }

  eliminar(id_producto: number): Observable<any> {
    return this.http.get(`${this.url}?control=eliminar&id_producto=${id_producto}`);
  }
  
  insertar(params: any): Observable<any> {
    return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params), {
        headers: { 'Content-Type': 'application/json' }
    });
  }
  
  editar(id_producto: number, params: any): Observable<any> {
    return this.http.post(`${this.url}?control=editar&id_producto=${id_producto}`, JSON.stringify(params), {
        headers: { 'Content-Type': 'application/json' }
    });
  }
  
  filtro(dato: any): Observable<any> {
    return this.http.get(`${this.url}?control=filtro&dato=${dato}`);
  }
}



