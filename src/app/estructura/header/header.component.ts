import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router:Router){}

  nombres: any;
  apellidos: any;
  rol: any;

  ngOnInit(): void {
    this.nombres = sessionStorage.getItem('nombres');
    this.apellidos = sessionStorage.getItem('apellidos');
    this.rol = sessionStorage.getItem('rol');
  }

  cerrar(){
    sessionStorage.setItem("id", "");
    sessionStorage.setItem("nombres", "");
    sessionStorage.setItem("apellidos", "");
    sessionStorage.setItem("correo", "");
    sessionStorage.setItem("usuario", "");
    sessionStorage.setItem("rol", "");
    this.router.navigate(['']);
  }

}
