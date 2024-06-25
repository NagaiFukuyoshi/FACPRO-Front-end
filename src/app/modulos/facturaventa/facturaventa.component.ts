import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-facturaventa',
  templateUrl: './facturaventa.component.html',
  styleUrls: ['./facturaventa.component.scss']
})
export class FacturaventaComponent {

  nombres: any;
  apellidos: any;
  dato: any;
  dato2:any;
  recibo: any;
  producto: any;
  cliente:any;
  selectedNombre: any;
  selectedCodigo: any;
  selectedCliente: any;
  showFormulario= false;
  showFormulariocli= false;
  add = false;

  constructor(private router: Router, private sproducto: ProductoService, private scliente: ClienteService) {}

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
  
  filtrarcli(dato2: any): void {//Función filtrar clientes

    if(event instanceof KeyboardEvent && event.key === 'Enter'){
      this.showFormulariocli = true;

      this.scliente.filtro(dato2).subscribe((resultado2: any) => {
        this.cliente = resultado2;
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

  escogercli(itemcli: any): void {//Función escoger el cliente
    this.selectedCliente = itemcli.nombre + " " + itemcli.apellido;

    if(`event.keycode === 13`){
      this.showFormulariocli = false; // Para ocultar el formulario
      this.dato2 = this.selectedCliente;
    }
  }
}
