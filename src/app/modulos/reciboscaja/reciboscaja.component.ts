import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { CuentasService } from 'src/app/servicios/cuentas.service';
import { RecibosService } from 'src/app/servicios/recibos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reciboscaja',
  templateUrl: './reciboscaja.component.html',
  styleUrls: ['./reciboscaja.component.scss']
})
export class ReciboscajaComponent implements OnInit {
  [x: string]: any;

  nombres: any;
  apellidos: any;
  id:any;
  dato: any;
  dato2:any;
  dato3:any;
  recibo: any;
  cuentas: any;
  cuentas2:any;
  cliente:any;
  selectedCuenta: any;
  selectedCodigo: any;
  selectedCuenta2: any;
  selectedCodigo2: any;
  selectedCliente:any;
  showFormulario= false;
  showFormulario2= false;
  showFormulariocli= false;
  add = false;
  totalDebito = 0;
  totalCredito = 0;
  diferencia2 = 0;
  consecutivo:any;

  obj_recibo = {
    fo_cliente: 0,
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
  validar_cliente = true;
  validar_diferencia = true;
  validar_fecha = true;

  ngOnInit(): void {
    this.nombres = sessionStorage.getItem('nombres');
    this.apellidos = sessionStorage.getItem('apellidos');
    this.id = sessionStorage.getItem('id');
    this.dato = '';
    this.dato2 = '';
    this.dato3 = '';
  }

  constructor(private router: Router, private srecibo: RecibosService, private scuentas: CuentasService, private scliente: ClienteService) {}

  //---------------Función de calcular totales----------------------------------------------------------------------------------------------
  calcularTotales(): void {
    this.totalDebito = this.obj_recibo.debito + this.obj_recibo.debito2;
    this.totalCredito = this.obj_recibo.credito + this.obj_recibo.credito2;
    this.diferencia2 = this.totalDebito - this.totalCredito;
  }

  //---------------Función de filtrar-------------------------------------------------------------------------------------------------------
  filtrarc(dato: any): void {//Función filtrar codigo y cuenta

    if(event instanceof KeyboardEvent && event.key === 'Enter'){
      this.showFormulario = true;

      this.scuentas.filtro(dato).subscribe((resultado: any) => {
        this.cuentas = resultado;
      });
    }
  }

  filtrarc2(dato3: any): void {//Función filtrar codigo y cuenta

    if(event instanceof KeyboardEvent && event.key === 'Enter'){
      this.showFormulario2 = true;

      this.scuentas.filtro(dato3).subscribe((resultado2: any) => {
        this.cuentas2 = resultado2;
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

  //--------------Función de limpiar--------------------------------------------------------------------------------------------------------
  limpiar(){//Función limpiar recibo de caja
    this.obj_recibo = {
      fo_cliente: 0,
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
    this.totalDebito = 0;
    this.totalCredito = 0;
    this.selectedCliente = "";
    this.selectedCuenta = "";
    this.selectedCuenta2 = "";
  }

  //--------------Función de validar--------------------------------------------------------------------------------------------------------
  validar(){
      this.obj_recibo.total_debito = this.totalDebito;
      this.obj_recibo.total_credito = this.totalCredito;
      this.obj_recibo.fo_usuario= this.id;

    //validar que cuenta no este vació
      if(this.obj_recibo.fo_cuenta == 0){
        this.validar_cuenta=false;
      }else{
        this.validar_cuenta=true;
        console.log(this.validar_cuenta);//ok
      }
    //validar que codigo no este vació
      if(this.obj_recibo.fo_codigo == 0){
        this.validar_codigo=false;
        console.log(this.validar_codigo);// false
      }else{
        this.validar_codigo=true;
        console.log(this.validar_codigo);
      }
    //validar que cuenta2 no este vació
      if(this.obj_recibo.fo_cuenta2 == 0){
        this.validar_cuenta2=false;
      }else{
        this.validar_cuenta2=true;
        console.log(this.validar_cuenta2);//ok
      }
    //validar que codigo2 no este vació
      if(this.obj_recibo.fo_codigo2 == 0){
        this.validar_codigo2=false;
        console.log(this.validar_codigo2); //false
      }else{
        this.validar_codigo2=true;
        console.log(this.validar_codigo2);
      }
    //validar que cliente no este vació
      if(this.obj_recibo.fo_cliente == 0){
        this.validar_cliente=false;
      }else{
        this.validar_cliente=true;
        console.log(this.validar_cliente);//ok
      }
    //validar que diferencia no este vació
      if(this.obj_recibo.diferencia == 0){
        this.validar_diferencia=true;
        console.log(this.validar_diferencia);//ok
      }else{
        this.validar_diferencia=false;
        console.log(this.validar_diferencia);
      }

      console.log(this.obj_recibo);

      if(this.validar_cuenta == true && this.validar_codigo == true && this.validar_cuenta2 == true && this.validar_codigo2 == true && this.validar_diferencia == true && this.validar_cliente == true){
        this.guardar();
        /*console.log(this.validar_cuenta);
        console.log(this.validar_codigo);
        console.log(this.validar_cuenta2);
        console.log(this.validar_codigo2);
        console.log(this.validar_diferencia);
        console.log(this.validar_cliente);*/
      }
  }

  //--------------Función de guardar--------------------------------------------------------------------------------------------------------
  guardar(): void {
    console.log('Datos del recibo antes de guardar:', this.recibo);

    this.srecibo.insertar(this.obj_recibo).subscribe((datos:any) => {
      if(datos['resultado'] == 'OK'){
      }
    })
    
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El Recibo ha sido creado con éxito",
      showConfirmButton: false,
      timer: 1500
    });

    this.limpiar()
  }

  //---------------Función de escoger-------------------------------------------------------------------------------------------------------
  escoger(itemc: any): void {//Función escoger la cuenta
    this.selectedCuenta = itemc.nombre;
    this.selectedCodigo = itemc.codigo;
    this.obj_recibo.fo_cuenta = itemc.id_cuenta;
    this.obj_recibo.fo_codigo = itemc.id_cuenta;

    if(`event.keycode === 13`){
      this.showFormulario = false; // Para ocultar el formulario
      this.dato = this.selectedCodigo;
    }
  }

  escoger2(itemc2: any): void {//Función escoger la cuenta
    this.selectedCuenta2 = itemc2.nombre;
    this.selectedCodigo2 = itemc2.codigo;
    this.obj_recibo.fo_cuenta2 = itemc2.id_cuenta;
    this.obj_recibo.fo_codigo2 = itemc2.id_cuenta;

    if(`event.keycode === 13`){
      this.showFormulario2 = false; // Para ocultar el formulario
      this.dato3 = this.selectedCodigo2;
    }
  }

  escogercli(itemcli: any): void {//Función escoger el cliente
    this.selectedCliente = itemcli.nombre + " " + itemcli.apellido;
    this.obj_recibo.fo_cliente = itemcli.id_cliente;

    if(`event.keycode === 13`){
      this.showFormulariocli = false; // Para ocultar el formulario
      this.dato2 = this.selectedCliente;
    }
  }
}


