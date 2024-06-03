import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  url = 'http://localhost/facpro/Backend/Controladores/ciudad.php';

  constructor(private http: HttpClient) { }

consulta(){
  return this.http.get(`${this.url}?control=consulta`);
}

eliminar(id_ciudad:number){
  return this.http.get(`${this.url}?control=consulta&id_ciudad=${id_ciudad}`);
}

insertar(params:any){
  return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params));
}

editar(id_ciudad:number, params:any){
  return this.http.post(`${this.url}?control=editar&id_ciudad=${id_ciudad}`, JSON.stringify(params));
}

filtro(dato:any){
  return this.http.get(`${this.url}?control=filtro$fato=${dato}`);
}

}
