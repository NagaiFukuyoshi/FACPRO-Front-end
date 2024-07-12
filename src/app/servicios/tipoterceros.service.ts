import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipotercerosService {

  url = 'http://localhost/facpro/Backend/Controladores/tipoTercero.php';

  constructor(private http: HttpClient) { }

consulta(){
  return this.http.get(`${this.url}?control=consulta`);
}

eliminar(id_tipoTercero:number){
  return this.http.get(`${this.url}?control=consulta&id_tipoTercero=${id_tipoTercero}`);
}

insertar(params:any){
  return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params));
}

editar(id_tipoTercero:number, params:any){
  return this.http.post(`${this.url}?control=editar&id_tipoTercero=${id_tipoTercero}`, JSON.stringify(params));
}

filtro(dato:any){
  return this.http.get(`${this.url}?control=filtro&dato=${dato}`);
}

}
