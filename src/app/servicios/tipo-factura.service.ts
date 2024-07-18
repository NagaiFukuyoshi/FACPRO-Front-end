import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoFacturaService {


  url = 'http://localhost/facpro/Backend/Controladores/tipo_factura.php';

  constructor(private http: HttpClient) { }

  consulta(){
    return this.http.get(`${this.url}?control=consulta`);
  }
  
  eliminar(id_tipo_factura:number){
    return this.http.get(`${this.url}?control=consulta&id_tipo_factura=${id_tipo_factura}`);
  }
  
  insertar(params:any){
    return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params));
  }
  
  editar(id_tipo_factura:number, params:any){
    return this.http.post(`${this.url}?control=editar&id_tipo_factura=${id_tipo_factura}`, JSON.stringify(params));
  }
  
  filtro(dato:any){
    return this.http.get(`${this.url}?control=filtro&dato=${dato}`);
  }
}
