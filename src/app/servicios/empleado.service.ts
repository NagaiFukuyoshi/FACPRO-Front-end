import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url = 'http://localhost/facpro/Backend/Controladores/empleado.php';

  constructor(private http: HttpClient) { }

consulta(){
  return this.http.get(`${this.url}?control=consulta`);
}

eliminar(id_empleado:number){
  return this.http.get(`${this.url}?control=consulta&id_empleado=${id_empleado}`);
}

insertar(params:any){
  return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params));
}

editar(id_empleado:number, params:any){
  return this.http.post(`${this.url}?control=editar&id_empleado=${id_empleado}`, JSON.stringify(params));
}

filtro(dato:any){
  return this.http.get(`${this.url}?control=filtro&dato=${dato}`);
}

}
