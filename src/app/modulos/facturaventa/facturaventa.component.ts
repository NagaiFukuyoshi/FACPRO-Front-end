import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facturaventa',
  templateUrl: './facturaventa.component.html',
  styleUrls: ['./facturaventa.component.scss']
})
export class FacturaventaComponent {

  nombres: any;
  apellidos: any;

  constructor(private router:Router){};

  ngOnInit(): void{
    this.nombres = sessionStorage.getItem('nombres');
    this.apellidos = sessionStorage.getItem('apellidos');
  }
}
