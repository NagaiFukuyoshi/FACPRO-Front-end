import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IvaService {

  url = 'http://localhost/facpro/Backend/Controladores/iva.php';

  constructor(private http: HttpClient) { }

  consulta(){
    return this.http.get(`${this.url}?control=consulta`);
  }
  
  eliminar(id_iva:number){
    return this.http.get(`${this.url}?control=consulta&id_iva=${id_iva}`);
  }
  
  insertar(params:any){
    return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params));
  }
  
  editar(id_iva:number, params:any){
    return this.http.post(`${this.url}?control=editar&id_iva=${id_iva}`, JSON.stringify(params));
  }
  
  filtro(dato:any){
    return this.http.get(`${this.url}?control=filtro&dato=${dato}`);
  }
}
