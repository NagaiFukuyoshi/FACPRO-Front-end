import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  url = 'http://localhost/facpro/Backend/Controladores/pais.php';

  constructor(private http: HttpClient) { }

consulta(){
  return this.http.get(`${this.url}?control=consulta`);
}

eliminar(id_pais:number){
  return this.http.get(`${this.url}?control=consulta&id_pais=${id_pais}`);
}

insertar(params:any){
  return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params));
}

editar(id_pais:number, params:any){
  return this.http.post(`${this.url}?control=editar&id_pais=${id_pais}`, JSON.stringify(params));
}

filtro(dato:any){
  return this.http.get(`${this.url}?control=filtro&dato=${dato}`);
}

}
