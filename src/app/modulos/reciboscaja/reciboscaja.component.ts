import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { CuentasService } from 'src/app/servicios/cuentas.service';
import { RecibosService } from 'src/app/servicios/recibos.service';

@Component({
  selector: 'app-reciboscaja',
  templateUrl: './reciboscaja.component.html',
  styleUrls: ['./reciboscaja.component.scss']
})
export class ReciboscajaComponent implements OnInit {
  [x: string]: any;

  nombres: any;
  apellidos: any;
  dato: any;
  dato2:any;
  recibo: any;
  cuentas: any;
  cliente:any;
  selectedCuenta: any;
  selectedCodigo: any;
  selectedCliente:any;
  showFormulario= false;
  showFormulariocli= false;
  add = false;

  constructor(private router: Router, private srecibo: RecibosService, private scuentas: CuentasService, private scliente: ClienteService) {}

  ngOnInit(): void {
    this.nombres = sessionStorage.getItem('nombres');
    this.apellidos = sessionStorage.getItem('apellidos');
    this.dato = '';
    this.dato2 = '';
  }


  //metodos de filtrar
  filtrarc(dato: any): void {//Función filtrar codigo y cuenta

    if(event instanceof KeyboardEvent && event.key === 'Enter'){
      this.showFormulario = true;

      this.scuentas.filtro(dato).subscribe((resultado: any) => {
        this.cuentas = resultado;
      });
    }
  }

  filtrarcli(dato2: any): void {//Función filtrar clientes

    if(event instanceof KeyboardEvent && event.key === 'Enter'){
      this.showFormulariocli = true;

      this.scliente.filtro(dato2).subscribe((resultado2: any) => {
        this.cliente = resultado2;
        console.log(this.dato2);
        console.log(this.cliente);
      });
    }
  }


  //métodos de escoger
  escoger(itemc: any): void {//Función escoger la cuenta
    this.selectedCuenta = itemc.nombre;
    this.selectedCodigo = itemc.codigo;

    if(`event.keycode === 13`){
      this.showFormulario = false; // Para ocultar el formulario
      this.dato = this.selectedCodigo;
    }
  }

  escogercli(itemcli: any): void {//Función escoger el cliente
    this.selectedCliente = itemcli.nombre + " " + itemcli.apellido;

    if(`event.keycode === 13`){
      this.showFormulariocli = false; // Para ocultar el formulario
      this.dato2 = this.selectedCliente;
    }
  }
}


