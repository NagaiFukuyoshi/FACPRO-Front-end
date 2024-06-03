import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  url = 'http://localhost/facpro/Backend/Controladores/compras.php';

  constructor(private http: HttpClient) { }

consulta(){
  return this.http.get(`${this.url}?control=consulta`);
}

eliminar(id_compras:number){
  return this.http.get(`${this.url}?control=consulta&id_compras=${id_compras}`);
}

insertar(params:any){
  return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params));
}

editar(id_compras:number, params:any){
  return this.http.post(`${this.url}?control=editar&id_compras=${id_compras}`, JSON.stringify(params));
}

filtro(dato:any){
  return this.http.get(`${this.url}?control=filtro$fato=${dato}`);
}

}
