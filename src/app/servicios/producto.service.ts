import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost/facpro/Backend/Controladores/producto.php';

  constructor(private http: HttpClient) { }

consulta(){
  return this.http.get(`${this.url}?control=consulta`);
}

eliminar(id_producto:number){
  return this.http.get(`${this.url}?control=eliminar&id_producto=${id_producto}`);
}

insertar(params:any){
  return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params));
}

editar(id_producto:number, params:any){
  return this.http.post(`${this.url}?control=editar&id_producto=${id_producto}`, JSON.stringify(params));
}

filtro(dato:any){
  console.log(`${this.url}?control=filtro&dato=${dato}`);
  return this.http.get(`${this.url}?control=filtro&dato=${dato}`);
}
}


