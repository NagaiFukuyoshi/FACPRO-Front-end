import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { CuentasService } from 'src/app/servicios/cuentas.service';
import { RecibosService } from 'src/app/servicios/recibos.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
  reciboNumero = 10;
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
  form_recibo =false;

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
      });
    }
  }

  //--------------Función de limpiar--------------------------------------------------------------------------------------------------------
  limpiar(): void {//Función limpiar recibo de caja
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
    this.diferencia2 = 0;
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
      }
    //validar que codigo no este vació
      if(this.obj_recibo.fo_codigo == 0){
        this.validar_codigo=false;
      }else{
        this.validar_codigo=true;
      }
    //validar que cuenta2 no este vació
      if(this.obj_recibo.fo_cuenta2 == 0){
        this.validar_cuenta2=false;
      }else{
        this.validar_cuenta2=true;
      }
    //validar que codigo2 no este vació
      if(this.obj_recibo.fo_codigo2 == 0){
        this.validar_codigo2=false;
      }else{
        this.validar_codigo2=true;
      }
    //validar que cliente no este vació
      if(this.obj_recibo.fo_cliente == 0){
        this.validar_cliente=false;
      }else{
        this.validar_cliente=true;
      }
    //validar que diferencia no este vació
      if(this.obj_recibo.diferencia == 0){
        this.validar_diferencia=true;
      }else{
        this.validar_diferencia=false;
      }

      if(this.validar_cuenta == true && this.validar_codigo == true && this.validar_cuenta2 == true && this.validar_codigo2 == true && this.validar_diferencia == true && this.validar_cliente == true){
        this.guardar();
      }
  }

  //--------------Función de guardar--------------------------------------------------------------------------------------------------------
  guardar(): void {

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

    this.form_recibo = true;
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

  //---------------Función generar PDF------------------------------------------------------------------------------------------------------
  generarPDF(): void {
    const data = document.getElementById('formrecibo');
    if (data) {
      html2canvas(data, { scale: 2 }).then(canvas => {
        const imgWidth = 297; // Ancho de una hoja A4 en horizontal
        const pageHeight = 210; // Altura de una hoja A4 en horizontal
        let imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
  
        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF('l', 'mm', 'a4'); // Cambiado a 'l' para orientación horizontal
  
        let position = 0;
  
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
  
        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
  
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString();
        const formattedTime = currentDate.toLocaleTimeString();
        pdf.setFontSize(12);
        pdf.text(`Fecha de generación: ${formattedDate} ${formattedTime}`, 10, pageHeight - 10);
        pdf.save('Recibo-caja.pdf');
      });
    }

    this.limpiar();
    this.form_recibo = false;
    this.reciboNumero = this.reciboNumero + 1;
  }
  
  //---------------Función para imprimir el recibo------------------------------------------------------------------------------------------
  imprimirRecibo(): void {
    const printContents = document.getElementById('formrecibo')!.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();

    this.limpiar();
    this.form_recibo = false;
    this.reciboNumero = this.reciboNumero + 1;
  }
}



