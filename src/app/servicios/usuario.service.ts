import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost/facpro/Backend/Controladores/usuario.php';

  constructor(private http: HttpClient) { }

consulta(){
  return this.http.get(`${this.url}?control=consulta`);
}

eliminar(id_usuario:number){
  return this.http.get(`${this.url}?control=consulta&id_usuario=${id_usuario}`);
}

insertar(params:any){
  return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params));
}

editar(id_usuario:number, params:any){
  return this.http.post(`${this.url}?control=editar&id_usuario=${id_usuario}`, JSON.stringify(params));
}

filtro(dato:any){
  return this.http.get(`${this.url}?control=filtro$fato=${dato}`);
}
}
