import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-buscarproducto',
  templateUrl: './buscarproducto.component.html',
  styleUrls: ['./buscarproducto.component.scss']
})
export class BuscarproductoComponent implements OnInit {

  producto: any;
  prod: any;
  dato: any;
  pro: any;

  constructor(private sprod: ProductoService) {}

  ngOnInit(): void {
    this.consulta();
  }

  //----------------------Función consulta-----------------------------------------------------------------------------------------------
  consulta(): void {
    this.sprod.consulta().subscribe((resultado: any) => {
      this.producto = resultado;
    });
  }

  //----------------------Función filtrar------------------------------------------------------------------------------------------------
  filtrar(dato: any): void {
    this.sprod.filtro(dato).subscribe((resultado2: any) => {
      this.pro = resultado2;
    });
  }

  //----------------------Función generar PDF-------------------------------------------------------------------------------------------
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
        pdf.setFontSize(18);
        pdf.text('Lista de productos', 80, 10);
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString();
        const formattedTime = currentDate.toLocaleTimeString();
        pdf.setFontSize(12);
        pdf.text(`Fecha de generación: ${formattedDate} ${formattedTime}`, 10, 20);
        pdf.save('productos.pdf');
      });
    }
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
