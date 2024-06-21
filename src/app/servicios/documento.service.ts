import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  url = 'http://localhost/facpro/Backend/Controladores/documento.php';

  constructor(private http: HttpClient) { }

consulta(){
  return this.http.get(`${this.url}?control=consulta`);
}

eliminar(id_documento:number){
  return this.http.get(`${this.url}?control=consulta&id_documento=${id_documento}`);
}

insertar(params:any){
  return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params));
}

editar(id_documento:number, params:any){
  return this.http.post(`${this.url}?control=editar&id_documento=${id_documento}`, JSON.stringify(params));
}

filtro(dato:any){
  return this.http.get(`${this.url}?control=filtro&dato=${dato}`);
}

}
