import { Component } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  correo: any;
  password: any;
  error = false;
  usuario:any;
  user = {

  }

  constructor(private slogin: LoginService, private router:Router){}

  ngOnInit(): void{
    sessionStorage.setItem("id", "");
    sessionStorage.setItem("nombres", "");
    sessionStorage.setItem("apellidos", "");
    sessionStorage.setItem("correo", "");
    sessionStorage.setItem("usuario", "");
  }

  consulta(tecla: any){
    if(tecla == 13 || tecla == ""){
      this.slogin.consulta(this.correo, this.password).subscribe((resultado:any)=>{
        this.usuario = resultado;
          //console.log(this.usuario);
          
          if(this.usuario[0].validar == "valida"){
            sessionStorage.setItem("id", this.usuario[0]['id_usuario']);
            sessionStorage.setItem("nombres", this.usuario[0]['nombres']);
            sessionStorage.setItem("apellidos", this.usuario[0]['apellidos']);
            sessionStorage.setItem("correo", this.usuario[0]['correo']);
            sessionStorage.setItem("usuario", this.usuario[0]['usuario']);
            this.router.navigate(['principal']);
          } else{
            this.error = true;
          }
      })
    }
  }
}


