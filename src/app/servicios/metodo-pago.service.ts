import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetodoPagoService {

  url = 'http://localhost/facpro/Backend/Controladores/metodo_pago.php';

  constructor(private http: HttpClient) { }

  consulta(){
    return this.http.get(`${this.url}?control=consulta`);
  }
  
  eliminar(id_metodo_pago:number){
    return this.http.get(`${this.url}?control=consulta&id_metodo_pago=${id_metodo_pago}`);
  }
  
  insertar(params:any){
    return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params));
  }
  
  editar(id_metodo_pago:number, params:any){
    return this.http.post(`${this.url}?control=editar&id_metodo_pago=${id_metodo_pago}`, JSON.stringify(params));
  }
  
  filtro(dato:any){
    return this.http.get(`${this.url}?control=filtro&dato=${dato}`);
  }
}
