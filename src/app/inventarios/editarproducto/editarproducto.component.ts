import { Component } from '@angular/core';
import { IvaService } from 'src/app/servicios/iva.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.component.html',
  styleUrls: ['./editarproducto.component.scss']
})
export class EditarproductoComponent {
  
  producto: any;
  prod: any;
  dato: any;
  pro: any;
  id_producto:any;
  iva:any;

  obj_producto = {
    nombre:"",
    modelo:"",
    marca:"",
    descripcion:"",
    precio_venta:0,
    precio_venta2:0,
    precio_venta3:0,
    fo_iva:0,
    precio_compra:0,
    cantidad: 0,
    codigo: 0,
  }

  validar_nombre=true;
  validar_precioventa=true;
  validar_foIva=true;
  edit = false;

  constructor(private sprod: ProductoService, private siva: IvaService,) {}

  ngOnInit(): void {
    this.consulta();
    this.consulta2();
  }

  //----------------------Función consulta-----------------------------------------------------------------------------------------------
  consulta(): void {
    this.sprod.consulta().subscribe((resultado: any) => {
      this.producto = resultado;
    });
  }

  //----------------------Función filtro--------------------------------------------------------------------------------------------------
  filtrar(dato: any): void {
    this.sprod.filtro(dato).subscribe((resultado2: any) => {
      this.pro = resultado2;
    });
  }
  
  //----------------------Función cargar datos---------------------------------------------------------------------------------------------
  cargar_datos(producto: any, id: number) {
    this.obj_producto = {
      nombre: producto.nombre,
      modelo: producto.modelo,
      marca: producto.marca,
      descripcion: producto.descripcion,
      precio_venta: producto.precio_venta,
      precio_venta2: producto.precio_venta2,
      precio_venta3: producto.precio_venta3,
      fo_iva: producto.fo_iva,
      precio_compra: producto.precio_compra,
      cantidad: producto.cantidad,
      codigo: producto.codigo,
    };
  
    this.id_producto = id;
    this.edit = true;
  
    // Añadimos logs para depuración
    console.log('ID del producto:', id);
    console.log('Datos del producto:', producto);
    console.log('Objeto producto:', this.obj_producto);
  }

  //----------------------Función generar PDF---------------------------------------------------------------------------------------------
  generarPDF(): void {
    const data = document.getElementById('tabla_producto');
    if (data) {
      html2canvas(data).then(canvas => {
        const imgWidth = 208;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const position = 23;
        pdf.addImage(contentDataURL, 'PNG', 1, position, imgWidth, imgHeight);
        //Título
        pdf.setFontSize(18);
        pdf.text('Lista de productos', 80, 10);
        //Fecha y hora
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString();
        const formattedTime = currentDate.toLocaleTimeString();
        pdf.setFontSize(12);
        pdf.text(`Fecha de generación: ${formattedDate} ${formattedTime}`, 10, 20);
        pdf.save('productos.pdf');
      });
    }
  }
  
  //----------------------Funciones de crear producto--------------------------------------------------------------------------------------
  //----------------------Función de consulta----------------------------------------------------------------------------------------------
  consulta2(): void {
    this.siva.consulta().subscribe((resultado: any) => {
      this.iva = resultado;
    });
  }
  
  //----------------------Función validar campos-------------------------------------------------------------------------------------------
  validar(){
    //validar que nombres no este vació
    if(this.producto.nombre == ""){
      this.validar_nombre=false;
    }else{
      this.validar_nombre=true;
    }
    //validar que precio de venta no este vació
    if(this.producto.precio_venta == 0){
      this.validar_precioventa=false;
    }else{
      this.validar_precioventa=true;
    }
    //validar que IVA no este vació
    if(this.producto.fo_iva == 0){
      this.validar_foIva=false;
    }else{
      this.validar_foIva=true;
    }
    
    //validar que todos loc campos estén llenos
    if(this.validar_nombre == true && this.validar_precioventa == true && this.validar_foIva == true ){
      this.editar();
    }
  }

  editar(){
    this.sprod.editar(this.id_producto, this.obj_producto).subscribe((datos:any)=>{
      if(datos['resultado'] == 'ok'){
        this.consulta();
        Swal.fire({
          title: "Producto guardado!",
          text: "El producto ha sido guardado",
          icon: "success"
        });
      } else {
        Swal.fire({
          title: "Error",
          text: datos['mensaje'],  // Muestra mensaje de error
          icon: "error"
        });
      }
    });
    this.limpiar();
    this.edit=false;
  }

  //----------------------Función para limpiar los campos----------------------------------------------------------------------------------
  limpiar(){
    this.producto = {
      nombre:"",
      modelo:"",
      marca:"",
      descripcion:"",
      precio_venta:0,
      precio_venta2:0,
      precio_venta3:0,
      fo_iva:0,
      precio_compra:0,
      cantidad: 0,
      codigo: 0,
    }
  }

  //----------------------Función cancelar editable----------------------------------------------------------------------------------------
  cancelar(){
    this.edit = false;
  }

  //----------------------Función generar Excel-----------------------------------------------------------------------------------------
  generarExcel(): void {
    const tableData: any[][] = [
      ['Productos'], // Título
      [`Fecha de generación: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`], // Fecha y hora
      [], // Línea en blanco para separación
      ['Código', 'Producto', 'Descripción', 'Cantidad inv'] // Encabezados de la tabla
    ];

    // Añadir datos de la tabla
    const tableRows = document.querySelectorAll('#tabla_producto tr');
    tableRows.forEach(row => {
      const rowData = Array.from(row.querySelectorAll('td')).map(td => td.textContent);
      tableData.push(rowData);
    });

    const worksheet: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'Productos');
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    saveAs(data, `${fileName}_${new Date().getTime()}.xlsx`);
  }
}

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

