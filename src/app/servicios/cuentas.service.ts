import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CuentasService {

    url = 'http://localhost/facpro/Backend/Controladores/cuentas.php';

    constructor(private http: HttpClient) { }

consulta(){
    return this.http.get(`${this.url}?control=consulta`);
}

eliminar(id_cuenta:number){
    return this.http.get(`${this.url}?control=consulta&id_cuenta=${id_cuenta}`);
}

insertar(params:any){
    return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params));
}

editar(id_cuenta:number, params:any){
    return this.http.post(`${this.url}?control=editar&id_cuenta=${id_cuenta}`, JSON.stringify(params));
}

filtro(dato:any){
    return this.http.get(`${this.url}?control=filtro&dato=${dato}`);
}

}
