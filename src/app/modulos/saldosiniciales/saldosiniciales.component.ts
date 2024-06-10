import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saldosiniciales',
  templateUrl: './saldosiniciales.component.html',
  styleUrls: ['./saldosiniciales.component.scss']
})
export class SaldosinicialesComponent {

  nombres: any;
  apellidos: any;

  constructor(private router:Router){};

  ngOnInit(): void{
    this.nombres = sessionStorage.getItem('nombres');
    this.apellidos = sessionStorage.getItem('apellidos');
  }
}
