import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facturacompra',
  templateUrl: './facturacompra.component.html',
  styleUrls: ['./facturacompra.component.scss']
})
export class FacturacompraComponent {

  nombres: any;
  apellidos: any;

  constructor(private router:Router){};

  ngOnInit(): void{
    this.nombres = sessionStorage.getItem('nombres');
    this.apellidos = sessionStorage.getItem('apellidos');
  }

}
