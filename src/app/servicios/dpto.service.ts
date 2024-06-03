import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DptoService {

  url = 'http://localhost/facpro/Backend/Controladores/dpto.php';

  constructor(private http: HttpClient) { }

consulta(){
  return this.http.get(`${this.url}?control=consulta`);
}

eliminar(id_dpto:number){
  return this.http.get(`${this.url}?control=consulta&id_dpto=${id_dpto}`);
}

insertar(params:any){
  return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params));
}

editar(id_dpto:number, params:any){
  return this.http.post(`${this.url}?control=editar&id_dpto=${id_dpto}`, JSON.stringify(params));
}

filtro(dato:any){
  return this.http.get(`${this.url}?control=filtro$fato=${dato}`);
}

}
