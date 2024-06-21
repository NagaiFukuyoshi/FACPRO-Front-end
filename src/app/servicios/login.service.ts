import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost/facpro/Backend/Controladores/login.php';

  constructor(private http: HttpClient) { }

consulta(correo:any, password:any){
  return this.http.get(`${this.url}?correo=${correo}&password=${password}`);
}
}
