import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = 'http://localhost/facpro/Backend/Controladores/cliente.php';

  constructor(private http: HttpClient) { }

consulta(){
  return this.http.get(`${this.url}?control=consulta`);
}

eliminar(id_cliente:number){
  return this.http.get(`${this.url}?control=consulta&id_cliente=${id_cliente}`);
}

insertar(params:any){
  return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params));
}

editar(id_cliente:number, params:any){
  return this.http.post(`${this.url}?control=editar&id_cliente=${id_cliente}`, JSON.stringify(params));
}

filtro(dato:any){
  return this.http.get(`${this.url}?control=filtro&dato=${dato}`);
}

}
