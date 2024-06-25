import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CuentasService } from 'src/app/servicios/cuentas.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ProveedorService } from 'src/app/servicios/proveedor.service';

@Component({
  selector: 'app-facturacompra',
  templateUrl: './facturacompra.component.html',
  styleUrls: ['./facturacompra.component.scss']
})
export class FacturacompraComponent {

  nombres: any;
  apellidos: any;
  dato: any;
  dato2:any;
  recibo: any;
  producto: any;
  proveedor:any;
  selectedNombre: any;
  selectedCodigo: any;
  selectedProveedor: any;
  showFormulario= false;
  showFormulariocli= false;
  add = false;

  constructor(private router: Router, private sproducto: ProductoService, private sproveedor: ProveedorService) {}

  ngOnInit(): void {
    this.nombres = sessionStorage.getItem('nombres');
    this.apellidos = sessionStorage.getItem('apellidos');
    this.dato = '';
    this.dato2 = '';
  }

  //------------------------------------métodos de filtrar----------------------------------------------------------------------------
  filtrarp(dato: any): void {//Función filtrar codigo y cuenta

    if(event instanceof KeyboardEvent && event.key === 'Enter'){
      this.showFormulario = true;

      this.sproducto.filtro(dato).subscribe((resultado: any) => {
        this.producto = resultado;
      });
    }
  }
  
  filtrarpro(dato2: any): void {//Función filtrar clientes

    if(event instanceof KeyboardEvent && event.key === 'Enter'){
      this.showFormulariocli = true;

      this.sproveedor.filtro(dato2).subscribe((resultado2: any) => {
        this.proveedor = resultado2;
      });
    }
  }


  //-------------------------------------métodos de escoger--------------------------------------------------------------------------
  escoger(itemp: any): void {//Función escoger la cuenta
    this.selectedNombre = itemp.nombre;
    this.selectedCodigo = itemp.codigo;

    if(`event.keycode === 13`){
      this.showFormulario = false; // Para ocultar el formulario
      this.dato = this.selectedCodigo;
    }
  }

  escogerpro(itempro: any): void {//Función escoger el cliente
    this.selectedProveedor = itempro.razon_social || itempro.nombre + " " + itempro.apellido;

    if(`event.keycode === 13`){
      this.showFormulariocli = false; // Para ocultar el formulario
      this.dato2 = this.selectedProveedor;
    }
  }
}
