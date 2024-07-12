import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RecibosService {

    url = 'http://localhost/facpro/Backend/Controladores/recibos.php';

    constructor(private http: HttpClient) { }

    consulta() {
        return this.http.get(`${this.url}?control=consulta`);
    }

    eliminar(id_recibo: number) {
        return this.http.get(`${this.url}?control=eliminar&id_recibo=${id_recibo}`);
    }

    insertar(params: any) {
        return this.http.post(`${this.url}?control=insertar`, JSON.stringify(params), {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    editar(id_recibo: number, params: any) {
        return this.http.post(`${this.url}?control=editar&id_recibo=${id_recibo}`, JSON.stringify(params), {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    filtro(dato: any) {
        return this.http.get(`${this.url}?control=filtro&dato=${dato}`);
    }
}

