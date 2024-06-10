import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reciboscaja',
  templateUrl: './reciboscaja.component.html',
  styleUrls: ['./reciboscaja.component.scss']
})
export class ReciboscajaComponent {

  nombres: any;
  apellidos: any;

  constructor(private router:Router){};

  ngOnInit(): void{
    this.nombres = sessionStorage.getItem('nombres');
    this.apellidos = sessionStorage.getItem('apellidos');
  }
}
