import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprobantesegreso',
  templateUrl: './comprobantesegreso.component.html',
  styleUrls: ['./comprobantesegreso.component.scss']
})
export class ComprobantesegresoComponent {

  nombres: any;
  apellidos: any;

  constructor(private router:Router){};

  ngOnInit(): void{
    this.nombres = sessionStorage.getItem('nombres');
    this.apellidos = sessionStorage.getItem('apellidos');
  }
}
