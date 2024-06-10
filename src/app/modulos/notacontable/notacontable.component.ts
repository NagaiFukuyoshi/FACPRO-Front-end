import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notacontable',
  templateUrl: './notacontable.component.html',
  styleUrls: ['./notacontable.component.scss']
})
export class NotacontableComponent {

  nombres: any;
  apellidos: any;

  constructor(private router:Router){};

  ngOnInit(): void{
    this.nombres = sessionStorage.getItem('nombres');
    this.apellidos = sessionStorage.getItem('apellidos');
  }
}
