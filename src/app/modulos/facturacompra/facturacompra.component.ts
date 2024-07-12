import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComprasService } from 'src/app/servicios/compras.service';
import { MetodoPagoService } from 'src/app/servicios/metodo-pago.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ProveedorService } from 'src/app/servicios/proveedor.service';
import { RetencionesService } from 'src/app/servicios/retenciones.service';
import Swal from 'sweetalert2';

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
  compra_total:any;
  iva:any;
  id:any;
  metodo:any;
  retencion:any;
  total:any;
  subtotal:any;
  total_factura:any;
  compras: any;
  retefuente:any;
  reteporc:any;
  producto: any;
  proveedor:any;
  selectedNombre: any;
  selectedCodigo: any;
  selectedProveedor: any;
  selectedDescripcion: any;
  showFormulario= false;
  showFormulariocli= false;
  add = false;


  obj_compra = {
    fecha: "",
    fo_proveedor:0,
    fo_producto:0,
    precio_compra:0,
    cantidad:0,
    subtotal:0,
    IVA:0,
    retefuente:0,
    total_factura:0,
    total:0,
    fo_usuario:0,
    fo_codigo:0,
    fo_descripcion:0,
    fo_retencion:0,
    fo_metodo_pago:0,
    descripcion: ""
  }

  validar_proveedor = true;
  validar_codigo = true;
  validar_precio = true;
  validar_cantidad = true;
  validar_metodo_pago = true;
  validar_fecha = true;

  constructor(private router: Router, private sproducto: ProductoService, private sproveedor: ProveedorService, private smetodo: MetodoPagoService, private sretencion: RetencionesService, private scompra: ComprasService) {}

  ngOnInit(): void {
    this.consulta();
    this.consultar();
    this.nombres = sessionStorage.getItem('nombres');
    this.apellidos = sessionStorage.getItem('apellidos');
    this.id = sessionStorage.getItem('id');
    this.dato = '';
    this.dato2 = '';
  }

  //---------------Función de calcular totales-------------------------------------------------------------------------------------------
  calcularTotales(): void {

    if(this.obj_compra.fo_retencion == 5){
      this.reteporc = 0.025;
    } else if(this.obj_compra.fo_retencion == 6){
      this.reteporc = 0.035;
    } else{
      this.reteporc = 0;
    }

    this.compra_total = this.obj_compra.cantidad * this.obj_compra.precio_compra;
    this.iva = this.compra_total * 0.19;
    this.total = this.compra_total + this.iva;
    this.retefuente = this.compra_total * this.reteporc;
    this.total_factura = this.total - this.retefuente;
  }

  //--------------Función de consulta----------------------------------------------------------------------------------------------
  consulta(): void {
    this.smetodo.consulta().subscribe((resultado: any) => {
      this.metodo = resultado;
    });
  }

  consultar(): void {
    this.sretencion.consulta().subscribe((resultado2: any) => {
      this.retencion = resultado2;
    });
  }

  //--------------Función de validar--------------------------------------------------------------------------------------------------------
  validar(){
    this.obj_compra.fo_usuario= this.id;
    this.obj_compra.IVA = this.iva;
    this.obj_compra.subtotal = this.compra_total;
    this.obj_compra.total = this.total;
    this.obj_compra.retefuente = this.retefuente;
    this.obj_compra.total_factura = this.total_factura;
  //validar que proveedor no este vació
    if(this.obj_compra.fo_proveedor == 0){
      this.validar_proveedor=false;
    }else{
      this.validar_proveedor=true;
    }
  //validar que codigo no este vació
    if(this.obj_compra.fo_codigo == 0){
      this.validar_codigo=false;
    }else{
      this.validar_codigo=true;
    }
  //validar que precio no este vació
    if(this.obj_compra.precio_compra == 0){
      this.validar_precio=false;
    }else{
      this.validar_precio=true;
    }
  //validar que cantidad no este vació
    if(this.obj_compra.cantidad == 0){
      this.validar_cantidad=false;
    }else{
      this.validar_cantidad=true;
    }
  //validar que metodo de pago no este vació
    if(this.obj_compra.fo_metodo_pago == 0){
      this.validar_metodo_pago=false;
    }else{
      this.validar_metodo_pago=true;
    }
    if(this.validar_proveedor == true && this.validar_codigo == true && this.validar_precio == true && this.validar_cantidad == true && this.validar_metodo_pago == true){
      this.guardar();
    }
  }

  //--------------Función de limpiar--------------------------------------------------------------------------------------------------------
  limpiar(){//Función limpiar recibo de caja
    this.obj_compra = {
      fecha: "",
      fo_proveedor:0,
      fo_producto:0,
      precio_compra:0,
      cantidad:0,
      subtotal:0,
      IVA:0,
      retefuente:0,
      total_factura:0,
      total:0,
      fo_usuario:0,
      fo_codigo:0,
      fo_descripcion:0,
      fo_retencion:0,
      fo_metodo_pago:0,
      descripcion: ""
    }

    this.dato = "";
    this.dato2 = "";
    this.selectedNombre = "";
    this.selectedDescripcion = "";
    this.iva = 0;
    this.total = 0;
    this.total_factura = 0;
    this.subtotal = 0;
    this.retefuente = 0;
    this.compra_total = 0;

  }

  //--------------Función de filtrar------------------------------------------------------------------------------------------------------
  filtrarp(dato: any): void {//Función filtrar codigo y cuenta

    if(event instanceof KeyboardEvent && event.key === 'Enter'){
      this.showFormulario = true;

      this.sproducto.filtro(dato).subscribe((resultado: any) => {
        this.producto = resultado;
      });
    }
  }
  
  filtrarpro(dato2: any): void {//Función filtrar proveedor

    if(event instanceof KeyboardEvent && event.key === 'Enter'){
      this.showFormulariocli = true;

      this.sproveedor.filtro(dato2).subscribe((resultado2: any) => {
        this.proveedor = resultado2;
      });
    }
  }

  //--------------Función de guardar--------------------------------------------------------------------------------------------------------
  guardar(): void {

    this.scompra.insertar(this.obj_compra).subscribe((datos:any) => {
      if(datos['resultado'] == 'OK'){
      }
    })
    
    Swal.fire({
      position: "center",
      icon: "success",
      title: "La compra ha sido creado con éxito",
      showConfirmButton: false,
      timer: 1500
    });

    this.limpiar()
  }

  //--------------Función de escoger-----------------------------------------------------------------------------------------------------
  escoger(itemp: any): void {//Función escoger el producto
    this.selectedNombre = itemp.nombre;
    this.selectedCodigo = itemp.codigo;
    this.selectedDescripcion = itemp.descripcion;
    this.obj_compra.fo_codigo = itemp.id_producto;
    this.obj_compra.fo_producto = itemp.id_producto;
    this.obj_compra.fo_descripcion = itemp.id_producto;

    if(`event.keycode === 13`){
      this.showFormulario = false; // Para ocultar el formulario
      this.dato = this.selectedCodigo;
    }
  }

  escogerpro(itempro: any): void {//Función escoger el proveedor
    this.selectedProveedor = itempro.razon_social || itempro.nombre + " " + itempro.apellido;
    this.obj_compra.fo_proveedor = itempro.id_proveedor;

    if(`event.keycode === 13`){
      this.showFormulariocli = false; // Para ocultar el formulario
      this.dato2 = this.selectedProveedor;
    }
  }
}
