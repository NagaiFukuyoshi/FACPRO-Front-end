import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  url = 'http://localhost/facpro/Backend/Controladores/ventas.php';

  constructor(private http: HttpClient) { }

consulta(){
  return this.http.get(`${this.url}?control=consulta`);
}

eliminar(id_ventas:number){
  return this.http.get(`${this.url}?control=consulta&id_ventas=${id_ventas}`);
}

insertar(params:any){
  return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params));
}

editar(id_ventas:number, params:any){
  return this.http.post(`${this.url}?control=editar&id_ventas=${id_ventas}`, JSON.stringify(params));
}

filtro(dato:any){
  return this.http.get(`${this.url}?control=filtro&dato=${dato}`);
}

}
