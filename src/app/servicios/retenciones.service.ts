import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RetencionesService {

  url = 'http://localhost/facpro/Backend/Controladores/retenciones.php';

  constructor(private http: HttpClient) { }

  consulta(){
    return this.http.get(`${this.url}?control=consulta`);
  }
  
  eliminar(id_retencion:number){
    return this.http.get(`${this.url}?control=consulta&id_retencion=${id_retencion}`);
  }
  
  insertar(params:any){
    return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params));
  }
  
  editar(id_retencion:number, params:any){
    return this.http.post(`${this.url}?control=editar&id_retencion=${id_retencion}`, JSON.stringify(params));
  }
  
  filtro(dato:any){
    return this.http.get(`${this.url}?control=filtro&dato=${dato}`);
  }
}
