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

  cerrar(){
    sessionStorage.setItem("id", "");
    sessionStorage.setItem("nombres", "");
    sessionStorage.setItem("apellidos", "");
    sessionStorage.setItem("correo", "");
    sessionStorage.setItem("usuario", "");
    this.router.navigate(['']);
  }

}
