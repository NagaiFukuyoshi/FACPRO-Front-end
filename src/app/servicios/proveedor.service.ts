import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  url = 'http://localhost/facpro/Backend/Controladores/proveedor.php';

  constructor(private http: HttpClient) { }

consulta(){
  return this.http.get(`${this.url}?control=consulta`);
}

eliminar(id_proveedor:number){
  return this.http.get(`${this.url}?control=consulta&id_proveedor=${id_proveedor}`);
}

insertar(params:any){
  return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params));
}

editar(id_proveedor:number, params:any){
  return this.http.post(`${this.url}?control=editar&id_proveedor=${id_proveedor}`, JSON.stringify(params));
}

filtro(dato:any){
  return this.http.get(`${this.url}?control=filtro&dato=${dato}`);
}

}
