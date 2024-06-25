import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { CuentasService } from 'src/app/servicios/cuentas.service';
import { ProveedorService } from 'src/app/servicios/proveedor.service';

@Component({
  selector: 'app-comprobantesegreso',
  templateUrl: './comprobantesegreso.component.html',
  styleUrls: ['./comprobantesegreso.component.scss']
})
export class ComprobantesegresoComponent {

  nombres: any;
  apellidos: any;
  dato: any;
  dato2:any;
  recibo: any;
  cuentas: any;
  proveedor:any;
  selectedCuenta: any;
  razon_social:any;
  selectedCodigo: any;
  selectedProveedor:any;
  showFormulario= false;
  showFormulariopro= false;
  add = false;

  constructor(private router: Router, private scuentas: CuentasService, private sproveedor: ProveedorService) {}

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

  filtrarpro(dato2: any): void {//Función filtrar clientes

    if(event instanceof KeyboardEvent && event.key === 'Enter'){
      this.showFormulariopro = true;

      this.sproveedor.filtro(dato2).subscribe((resultado2: any) => {
        this.proveedor = resultado2;
        console.log(this.dato2);
        console.log(this.proveedor);
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

  escogerpro(itempro: any): void {//Función escoger el cliente
    this.selectedProveedor = itempro.nombre + " " + itempro.apellido;
    this.razon_social = itempro.razon_social;

    if(`event.keycode === 13`){
      this.showFormulariopro = false; // Para ocultar el formulario
      this.dato2 = this.selectedProveedor;
    }
  }
}
