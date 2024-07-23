import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CuentasService } from 'src/app/servicios/cuentas.service';
import { ProveedorService } from 'src/app/servicios/proveedor.service';
import { SaldoinicialService } from 'src/app/servicios/saldoinicial.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-saldosiniciales',
  templateUrl: './saldosiniciales.component.html',
  styleUrls: ['./saldosiniciales.component.scss']
})
export class SaldosinicialesComponent {

  nombres: any;
  apellidos: any;
  dato: any;
  id:any;
  pro:any;
  pro2:any;
  dato2:any;
  dato3:any;
  saldoinicial: any;
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
  showFormulariopro = false;
  showFormulariopro2 = false;
  add = false;
  totalDebito = 0;
  totalCredito = 0;
  diferencia2 = 0;
  consecutivo:any;
  form_saldo = true;

  obj_saldoinicial = {
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

  constructor(private router: Router, private scuentas: CuentasService, private sproveedor: ProveedorService, private ssaldo: SaldoinicialService) {}

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
    this.totalDebito = this.obj_saldoinicial.debito + this.obj_saldoinicial.debito2;
    this.totalCredito = this.obj_saldoinicial.credito + this.obj_saldoinicial.credito2;
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

  filtrarc2(dato2: any): void {//Función filtrar codigo y cuenta

    if(event instanceof KeyboardEvent && event.key === 'Enter'){
      this.showFormulario2 = true;

      this.scuentas.filtro(dato2).subscribe((resultado2: any) => {
        this.cuentas2 = resultado2;
      });
    }
  }

  filtrarpro(dato2: any): void {//Función filtrar clientes

    if(event instanceof KeyboardEvent && event.key === 'Enter'){
      this.showFormulariopro = true;

      this.sproveedor.filtro(dato2).subscribe((resultado2: any) => {
        this.proveedor = resultado2;
      });
    }
  }

  filtrarpro2(pro2: any): void {//Función filtrar clientes

    if(event instanceof KeyboardEvent && event.key === 'Enter'){
      this.showFormulariopro2 = true;

      this.sproveedor.filtro(pro2).subscribe((resultado4: any) => {
        this.proveedor = resultado4;
      });
    }
  }

  //---------------Función de validar-------------------------------------------------------------------------------------------------------
  validar(){
    this.obj_saldoinicial.total_debito = this.totalDebito;
    this.obj_saldoinicial.total_credito = this.totalCredito;
    this.obj_saldoinicial.fo_usuario= this.id;
  //validar que cuenta no este vació
    if(this.obj_saldoinicial.fo_cuenta == 0){
      this.validar_cuenta=false;
    }else{
      this.validar_cuenta=true;
    }
  //validar que codigo no este vació
    if(this.obj_saldoinicial.fo_codigo == 0){
      this.validar_codigo=false;
    }else{
      this.validar_codigo=true;
    }
  //validar que cuenta2 no este vació
    if(this.obj_saldoinicial.fo_cuenta2 == 0){
      this.validar_cuenta2=false;
    }else{
      this.validar_cuenta2=true;
    }
  //validar que codigo2 no este vació
    if(this.obj_saldoinicial.fo_codigo2 == 0){
      this.validar_codigo2=false;
    }else{
      this.validar_codigo2=true;
    }
  //validar que proveedor no este vació
    if(this.obj_saldoinicial.fo_proveedor == 0){
      this.validar_proveedor=false;
    }else{
      this.validar_proveedor=true;
    }
  //validar que proveedor2 no este vació
    if(this.obj_saldoinicial.fo_proveedor2 == 0){
      this.validar_proveedor2=false;
    }else{
      this.validar_proveedor=true;
    }
  //validar que diferencia no este vació
    if(this.obj_saldoinicial.diferencia == 0){
      this.validar_diferencia=true;
    }else{
      this.validar_diferencia=false;
    }
    if(this.validar_cuenta == true && this.validar_codigo == true && this.validar_cuenta2 == true && this.validar_codigo2 == true && this.validar_diferencia == true && this.validar_proveedor == true && this.validar_proveedor2 == true){
      this.guardar();
    }
  }

  //---------------Función de limpiar-------------------------------------------------------------------------------------------------------
  limpiar(){//Función limpiar recibo de caja
    this.obj_saldoinicial = {
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

  //---------------Función de guardar-------------------------------------------------------------------------------------------------------
  guardar(): void {

    this.ssaldo.insertar(this.obj_saldoinicial).subscribe((datos:any) => {
      if(datos['resultado'] == 'OK'){
      }
    })
    
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El ajuste contable ha sido creado con éxito",
      showConfirmButton: false,
      timer: 1500
    });

    this.form_saldo= false;
  }

  //---------------Función de escoger-------------------------------------------------------------------------------------------------------
  escoger(itemc: any): void {//Función escoger la cuenta
    this.selectedCuenta = itemc.nombre;
    this.selectedCodigo = itemc.codigo;
    this.obj_saldoinicial.fo_cuenta = itemc.id_cuenta;
    this.obj_saldoinicial.fo_codigo = itemc.id_cuenta;

    if(`event.keycode === 13`){
      this.showFormulario = false; // Para ocultar el formulario
      this.dato = this.selectedCodigo;
    }
  }

  escoger2(itemc2: any): void {//Función escoger la cuenta
    this.selectedCuenta2 = itemc2.nombre;
    this.selectedCodigo2 = itemc2.codigo;
    this.obj_saldoinicial.fo_cuenta2 = itemc2.id_cuenta;
    this.obj_saldoinicial.fo_codigo2 = itemc2.id_cuenta;

    if(`event.keycode === 13`){
      this.showFormulario2 = false; // Para ocultar el formulario
      this.dato2 = this.selectedCodigo2;
    }
  }

  escogerpro(itempro: any): void {//Función escoger el cliente
    this.selectedProveedor = itempro.razon_social || itempro.nombre + " " + itempro.apellido;
    this.obj_saldoinicial.fo_proveedor = itempro.id_proveedor;

    if(`event.keycode === 13`){
      this.showFormulariopro = false; // Para ocultar el formulario
      this.pro = this.selectedProveedor;
    }
  }

  escogerpro2(itempro2: any): void {//Función escoger el cliente
    this.selectedProveedor2 = itempro2.razon_social || itempro2.nombre + " " + itempro2.apellido;
    this.obj_saldoinicial.fo_proveedor2 = itempro2.id_proveedor;

    if(`event.keycode === 13`){
      this.showFormulariopro2 = false; // Para ocultar el formulario
      this.pro2 = this.selectedProveedor2;
    }
  }

    //----------------------Función generar PDF-------------------------------------------------------------------------------------------
  generarPDF(): void {
    const data = document.getElementById('formsaldo');
    if (data) {
      html2canvas(data, { scale: 2 }).then(canvas => {
        const imgWidth = 197; // Ancho de una hoja A4 en horizontal
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
        pdf.save('Saldo_inicial.pdf');
      });
    }

    this.limpiar();
    this.form_saldo = false;
  }
  
  //---------------Función para imprimir el saldo inicial------------------------------------------------------------------------------------
  imprimirRecibo(): void {
    const printContents = document.getElementById('formsaldo')!.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();

    this.limpiar();
    this.form_saldo = false;
  }
}
