import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { anxiety } from '@igniteui/material-icons-extended';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { CuentasService } from 'src/app/servicios/cuentas.service';
import { NotacontableService } from 'src/app/servicios/notacontable.service';
import { ProveedorService } from 'src/app/servicios/proveedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-notacontable',
  templateUrl: './notacontable.component.html',
  styleUrls: ['./notacontable.component.scss']
})
export class NotacontableComponent {

  nombres: any;
  apellidos: any;
  dato: any;
  id:any;
  pro:any;
  pro2:any;
  dato2:any;
  dato3:any;
  notacontable: any;
  cuentas: any;
  cuentas2: any;
  proveedor2:any;
  proveedor:any;
  razon_social:any;
  razon_social2:any;
  selectedCuenta: any;
  selectedCodigo: any;
  selectedCuenta2: any;
  selectedCodigo2: any;
  selectedProveedor: any;
  selectedProveedor2: any;
  showFormulario= false;
  showFormulario2= false;
  showFormulariocli = false;
  showFormulariocli2 = false;
  add = false;
  totalDebito = 0;
  totalCredito = 0;
  diferencia2 = 0;
  consecutivo:any;

  obj_notacontable = {
    fo_proveedor: 0,
    fo_proveedor2: 0,
    fecha: "",
    fo_usuario: 0,
    fo_codigo: 0,
    fo_cuenta: 0,
    descripcion: "",
    debito: 0.000,
    credito: 0.000,
    fo_codigo2: 0,
    fo_cuenta2: 0,
    descripcion2: "",
    debito2: 0.000,
    credito2: 0.000,
    total_debito: 0.000,
    total_credito: 0.000,
    diferencia: 0
  }

  validar_cuenta = true;
  validar_codigo = true;
  validar_cuenta2 = true;
  validar_codigo2 = true;
  validar_proveedor = true;
  validar_proveedor2 = true;
  validar_diferencia = true;
  validar_fecha = true;

  constructor(private router: Router, private scuentas: CuentasService, private sproveedor: ProveedorService, private snota: NotacontableService) {}

  ngOnInit(): void {
    this.nombres = sessionStorage.getItem('nombres');
    this.apellidos = sessionStorage.getItem('apellidos');
    this.id = sessionStorage.getItem('id');
    this.dato = '';
    this.dato2 = '';
    this.dato3 = '';
  }

  //---------------Función de filtrar-----------------------------------------------------------------------------------------------
  filtrarc(dato: any): void {//Función filtrar codigo y cuenta

    if(event instanceof KeyboardEvent && event.key === 'Enter'){
      this.showFormulario = true;

      this.scuentas.filtro(dato).subscribe((resultado: any) => {
        this.cuentas = resultado;
      });
    }
  }

  filtrarc2(dato2: any): void {//Función filtrar codigo y cuenta

    if(event instanceof KeyboardEvent && event.key === 'Enter'){
      this.showFormulario2 = true;

      this.scuentas.filtro(dato2).subscribe((resultado2: any) => {
        this.cuentas2 = resultado2;
      });
    }
  }

  filtrarpro(pro: any): void {//Función filtrar clientes

    if(event instanceof KeyboardEvent && event.key === 'Enter'){
      this.showFormulariocli = true;

      this.sproveedor.filtro(pro).subscribe((resultado3: any) => {
        this.proveedor = resultado3;
      });
    }
  }

  filtrarpro2(pro2: any): void {//Función filtrar clientes

    if(event instanceof KeyboardEvent && event.key === 'Enter'){
      this.showFormulariocli2 = true;

      this.sproveedor.filtro(pro2).subscribe((resultado4: any) => {
        this.proveedor = resultado4;
      });
    }
  }

  //---------------Función de calcular totales----------------------------------------------------------------------------------------------
  calcularTotales(): void {
    this.totalDebito = this.obj_notacontable.debito + this.obj_notacontable.debito2;
    this.totalCredito = this.obj_notacontable.credito + this.obj_notacontable.credito2;
    this.diferencia2 = this.totalDebito - this.totalCredito;
  }

  //---------------Función de limpiar--------------------------------------------------------------------------------------------------------
  limpiar(){//Función limpiar recibo de caja
    this.obj_notacontable = {
      fo_proveedor: 0,
      fo_proveedor2: 0,
      fecha: "",
      fo_usuario: 0,
      fo_codigo: 0,
      fo_cuenta: 0,
      descripcion: "",
      debito: 0.000,
      credito: 0.000,
      fo_codigo2: 0,
      fo_cuenta2: 0,
      descripcion2: "",
      debito2: 0.000,
      credito2: 0.000,
      total_debito: 0.000,
      total_credito: 0.000,
      diferencia: 0
    }

    this.dato = "";
    this.dato2 = "";
    this.dato3 = "";
    this.pro = "";
    this.pro2 = "";
    this.totalDebito = 0;
    this.totalCredito = 0;
    this.selectedProveedor = "";
    this.selectedProveedor2 = "";
    this.selectedCuenta = "";
    this.selectedCuenta2 = "";
  }

  //---------------Función de validar--------------------------------------------------------------------------------------------------------
  validar(){
    this.obj_notacontable.total_debito = this.totalDebito;
    this.obj_notacontable.total_credito = this.totalCredito;
    this.obj_notacontable.fo_usuario= this.id;
  //validar que cuenta no este vació
    if(this.obj_notacontable.fo_cuenta == 0){
      this.validar_cuenta=false;
    }else{
      this.validar_cuenta=true;
    }
  //validar que codigo no este vació
    if(this.obj_notacontable.fo_codigo == 0){
      this.validar_codigo=false;
    }else{
      this.validar_codigo=true;
    }
  //validar que cuenta2 no este vació
    if(this.obj_notacontable.fo_cuenta2 == 0){
      this.validar_cuenta2=false;
    }else{
      this.validar_cuenta2=true;
    }
  //validar que codigo2 no este vació
    if(this.obj_notacontable.fo_codigo2 == 0){
      this.validar_codigo2=false;
    }else{
      this.validar_codigo2=true;
    }
  //validar que proveedor no este vació
    if(this.obj_notacontable.fo_proveedor == 0){
      this.validar_proveedor=false;
    }else{
      this.validar_proveedor=true;
    }
  //validar que proveedor2 no este vació
    if(this.obj_notacontable.fo_proveedor2 == 0){
      this.validar_proveedor2=false;
    }else{
      this.validar_proveedor=true;
    }
  //validar que diferencia no este vació
    if(this.obj_notacontable.diferencia == 0){
      this.validar_diferencia=true;
    }else{
      this.validar_diferencia=false;
    }
    if(this.validar_cuenta == true && this.validar_codigo == true && this.validar_cuenta2 == true && this.validar_codigo2 == true && this.validar_diferencia == true && this.validar_proveedor == true && this.validar_proveedor2 == true){
      this.guardar();
    }
  }

  //---------------Función de guardar--------------------------------------------------------------------------------------------------------
  guardar(): void {

    this.snota.insertar(this.obj_notacontable).subscribe((datos:any) => {
      if(datos['resultado'] == 'OK'){
      }
    })
    
    Swal.fire({
      position: "center",
      icon: "success",
      title: "La nota contable ha sido creado con éxito",
      showConfirmButton: false,
      timer: 1500
    });

    this.limpiar()
  }

  //---------------Función de escoger-------------------------------------------------------------------------------------------
  escoger(itemc: any): void {//Función escoger la cuenta
    this.selectedCuenta = itemc.nombre;
    this.selectedCodigo = itemc.codigo;
    this.obj_notacontable.fo_cuenta = itemc.id_cuenta;
    this.obj_notacontable.fo_codigo = itemc.id_cuenta;

    if(`event.keycode === 13`){
      this.showFormulario = false; // Para ocultar el formulario
      this.dato = this.selectedCodigo;
    }
  }

  escoger2(itemc2: any): void {//Función escoger la cuenta
    this.selectedCuenta2 = itemc2.nombre;
    this.selectedCodigo2 = itemc2.codigo;
    this.obj_notacontable.fo_cuenta2 = itemc2.id_cuenta;
    this.obj_notacontable.fo_codigo2 = itemc2.id_cuenta;

    if(`event.keycode === 13`){
      this.showFormulario2 = false; // Para ocultar el formulario
      this.dato2 = this.selectedCodigo2;
    }
  }

  escogerpro(itempro: any): void {//Función escoger el cliente
    this.selectedProveedor = itempro.razon_social || itempro.nombre + " " + itempro.apellido;
    this.obj_notacontable.fo_proveedor = itempro.id_proveedor;

    if(`event.keycode === 13`){
      this.showFormulariocli = false; // Para ocultar el formulario
      this.pro = this.selectedProveedor;
    }
  }

  escogerpro2(itempro2: any): void {//Función escoger el cliente
    this.selectedProveedor2 = itempro2.razon_social || itempro2.nombre + " " + itempro2.apellido;
    this.obj_notacontable.fo_proveedor2 = itempro2.id_proveedor;

    if(`event.keycode === 13`){
      this.showFormulariocli2 = false; // Para ocultar el formulario
      this.pro2 = this.selectedProveedor2;
    }
  }
}
