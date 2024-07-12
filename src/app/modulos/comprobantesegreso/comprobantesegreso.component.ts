import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { ComprobantesService } from 'src/app/servicios/comprobantes.service';
import { CuentasService } from 'src/app/servicios/cuentas.service';
import { ProveedorService } from 'src/app/servicios/proveedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comprobantesegreso',
  templateUrl: './comprobantesegreso.component.html',
  styleUrls: ['./comprobantesegreso.component.scss']
})
export class ComprobantesegresoComponent {

  nombres: any;
  apellidos: any;
  id:any;
  dato: any;
  dato2:any;
  dato3:any;
  comprobante:any;
  cuentas: any;
  cuentas2: any;
  proveedor:any;
  selectedCuenta: any;
  selectedCuenta2: any;
  razon_social:any;
  selectedCodigo: any;
  selectedCodigo2: any;
  selectedProveedor:any;
  showFormulario= false;
  showFormulario2= false;
  showFormulariopro= false;
  add = false;
  totalDebito = 0;
  totalCredito = 0;
  diferencia2 = 0;
  consecutivo:any;

  obj_comprobante = {
    fo_proveedor: 0,
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
  validar_diferencia = true;
  validar_fecha = true;

  constructor(private router: Router, private scuentas: CuentasService, private sproveedor: ProveedorService, private scomprobante: ComprobantesService) {}

  ngOnInit(): void {
    this.nombres = sessionStorage.getItem('nombres');
    this.apellidos = sessionStorage.getItem('apellidos');
    this.id = sessionStorage.getItem('id');
    this.dato = '';
    this.dato2 = '';
    this.dato3 = '';
  }

  //---------------Función de calcular totales----------------------------------------------------------------------------------------------
  calcularTotales(): void {
    this.totalDebito = this.obj_comprobante.debito + this.obj_comprobante.debito2;
    this.totalCredito = this.obj_comprobante.credito + this.obj_comprobante.credito2;
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

  //---------------Función de escoger-------------------------------------------------------------------------------------------------------
  escoger(itemc: any): void {//Función escoger la cuenta
    this.selectedCuenta = itemc.nombre;
    this.selectedCodigo = itemc.codigo;
    this.obj_comprobante.fo_cuenta = itemc.id_cuenta;
    this.obj_comprobante.fo_codigo = itemc.id_cuenta;

    if(`event.keycode === 13`){
      this.showFormulario = false; // Para ocultar el formulario
      this.dato = this.selectedCodigo;
    }
  }

  escoger2(itemc2: any): void {//Función escoger la cuenta
    this.selectedCuenta2 = itemc2.nombre;
    this.selectedCodigo2 = itemc2.codigo;
    this.obj_comprobante.fo_cuenta2 = itemc2.id_cuenta;
    this.obj_comprobante.fo_codigo2 = itemc2.id_cuenta;

    if(`event.keycode === 13`){
      this.showFormulario2 = false; // Para ocultar el formulario
      this.dato3 = this.selectedCodigo2;
    }
  }

  escogerpro(itempro: any): void {//Función escoger el proveedor
    this.selectedProveedor = itempro.razon_social || itempro.nombre + " " + itempro.apellido;
    this.obj_comprobante.fo_proveedor = itempro.id_proveedor;

    if(`event.keycode === 13`){
      this.showFormulariopro = false; // Para ocultar el formulario
      this.dato2 = this.selectedProveedor;
    }
  }

  //--------------Función de limpiar--------------------------------------------------------------------------------------------------------
  limpiar(){//Función limpiar recibo de caja
    this.obj_comprobante = {
      fo_proveedor: 0,
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
    this.selectedProveedor = "";
    this.selectedCuenta = "";
    this.selectedCuenta2 = "";
  }
  
  //--------------Función de validar--------------------------------------------------------------------------------------------------------
  validar(){
      this.obj_comprobante.total_debito = this.totalDebito;
      this.obj_comprobante.total_credito = this.totalCredito;
      this.obj_comprobante.fo_usuario= this.id;

    //validar que cuenta no este vació
      if(this.obj_comprobante.fo_cuenta == 0){
        this.validar_cuenta=false;
      }else{
        this.validar_cuenta=true;
        console.log(this.validar_cuenta);//ok
      }
    //validar que codigo no este vació
      if(this.obj_comprobante.fo_codigo == 0){
        this.validar_codigo=false;
        console.log(this.validar_codigo);// false
      }else{
        this.validar_codigo=true;
        console.log(this.validar_codigo);
      }
    //validar que cuenta2 no este vació
      if(this.obj_comprobante.fo_cuenta2 == 0){
        this.validar_cuenta2=false;
      }else{
        this.validar_cuenta2=true;
        console.log(this.validar_cuenta2);//ok
      }
    //validar que codigo2 no este vació
      if(this.obj_comprobante.fo_codigo2 == 0){
        this.validar_codigo2=false;
        console.log(this.validar_codigo2); //false
      }else{
        this.validar_codigo2=true;
        console.log(this.validar_codigo2);
      }
    //validar que proveedor no este vació
      if(this.obj_comprobante.fo_proveedor == 0){
        this.validar_proveedor=false;
      }else{
        this.validar_proveedor=true;
        console.log(this.validar_proveedor);//ok
      }
    //validar que diferencia no este vació
      if(this.obj_comprobante.diferencia == 0){
        this.validar_diferencia=true;
        console.log(this.validar_diferencia);//ok
      }else{
        this.validar_diferencia=false;
        console.log(this.validar_diferencia);
      }

      console.log(this.obj_comprobante);

      if(this.validar_cuenta == true && this.validar_codigo == true && this.validar_cuenta2 == true && this.validar_codigo2 == true && this.validar_diferencia == true && this.validar_proveedor == true){
        this.guardar();
      }
  }

  //--------------Función de guardar--------------------------------------------------------------------------------------------------------
  guardar(): void {
    console.log('Datos del comprobante antes de guardar:', this.comprobante);

    this.scomprobante.insertar(this.obj_comprobante).subscribe((datos:any) => {
      if(datos['resultado'] == 'OK'){
      }
    })
    
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El comprobante ha sido creado con éxito",
      showConfirmButton: false,
      timer: 1500
    });

    this.limpiar()
  }
}
