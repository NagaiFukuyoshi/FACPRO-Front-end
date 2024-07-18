import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { MetodoPagoService } from 'src/app/servicios/metodo-pago.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { RetencionesService } from 'src/app/servicios/retenciones.service';
import { VentasService } from 'src/app/servicios/ventas.service';
import Swal from 'sweetalert2';

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
  venta_total:any;
  iva:any;
  id:any;
  metodo:any;
  retencion:any;
  total:any;
  subtotal:any;
  total_factura:any;
  ventas: any;
  retefuente:any;
  reteporc:any;
  producto: any;
  cliente:any;
  selectedNombre: any;
  selectedCodigo: any;
  selectedCliente: any;
  selectedDescripcion: any;
  showFormulario= false;
  showFormulariocli= false;
  add = false;


  obj_venta = {
    fecha: "",
    fo_cliente:0,
    fo_producto:0,
    precio_venta:0,
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
    descripcion: "",
    fo_tipo_factura:2
  }

  validar_proveedor = true;
  validar_codigo = true;
  validar_precio = true;
  validar_cantidad = true;
  validar_metodo_pago = true;
  validar_fecha = true;

  constructor(private router: Router, private sproducto: ProductoService, private scliente: ClienteService, private smetodo: MetodoPagoService, private sretencion: RetencionesService, private sventa: VentasService) {}

  ngOnInit(): void {
    this.consulta();
    this.consultar();
    this.nombres = sessionStorage.getItem('nombres');
    this.apellidos = sessionStorage.getItem('apellidos');
    this.id = sessionStorage.getItem('id');
    this.dato = '';
    this.dato2 = '';
  }

  //---------------Función de calcular totales----------------------------------------------------------------------------------------------
  calcularTotales(): void {
    if(this.obj_venta.fo_retencion == 5){
      this.reteporc = 0.025;
    } else if(this.obj_venta.fo_retencion == 6){
      this.reteporc = 0.035;
    } else{
      this.reteporc = 0;
    }

    this.venta_total = this.obj_venta.cantidad * this.obj_venta.precio_venta;
    this.iva = this.venta_total * 0.19;
    this.total = this.venta_total + this.iva;
    this.retefuente = this.venta_total * this.reteporc;
    this.total_factura = this.total - this.retefuente;
  }

  //--------------Función de validar--------------------------------------------------------------------------------------------------------
  validar(){
    this.obj_venta.fo_usuario= this.id;
    this.obj_venta.IVA = this.iva;
    this.obj_venta.subtotal = this.venta_total;
    this.obj_venta.total = this.total;
    this.obj_venta.retefuente = this.retefuente;
    this.obj_venta.total_factura = this.total_factura;

  //validar que proveedor no este vació
    if(this.obj_venta.fo_cliente == 0){
      this.validar_proveedor=false;
    }else{
      this.validar_proveedor=true;
    }
  //validar que codigo no este vació
    if(this.obj_venta.fo_codigo == 0){
      this.validar_codigo=false;
    }else{
      this.validar_codigo=true;
    }
  //validar que precio no este vació
    if(this.obj_venta.precio_venta == 0){
      this.validar_precio=false;
    }else{
      this.validar_precio=true;
    }
  //validar que cantidad no este vació
    if(this.obj_venta.cantidad == 0){
      this.validar_cantidad=false;
    }else{
      this.validar_cantidad=true;
    }
  //validar que metodo de pago no este vació
    if(this.obj_venta.fo_metodo_pago == 0){
      this.validar_metodo_pago=false;
    }else{
      this.validar_metodo_pago=true;
    }
    if(this.validar_proveedor == true && this.validar_codigo == true && this.validar_precio == true && this.validar_cantidad == true && this.validar_metodo_pago == true){
      this.guardar();
    }
  }

  //--------------Función de consulta-------------------------------------------------------------------------------------------------------
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

  //--------------Función de limpiar--------------------------------------------------------------------------------------------------------
  limpiar(){//Función limpiar recibo de caja
    this.obj_venta = {
      fecha: "",
      fo_cliente:0,
      fo_producto:0,
      precio_venta:0,
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
      descripcion: "",
      fo_tipo_factura:2
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
    this.venta_total = 0;

  }

  //--------------Función de guardar--------------------------------------------------------------------------------------------------------
  guardar(): void {

    this.sventa.insertar(this.obj_venta).subscribe((datos:any) => {
      if(datos['resultado'] == 'OK'){
      }
    })
    
    Swal.fire({
      position: "center",
      icon: "success",
      title: "La venta ha sido creado con éxito",
      showConfirmButton: false,
      timer: 1500
    });

    this.limpiar()
  }

  //--------------Función de filtrar--------------------------------------------------------------------------------------------------------
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

  //--------------Función de escoger--------------------------------------------------------------------------------------------------------
  escoger(itemp: any): void {//Función escoger el producto
    this.selectedNombre = itemp.nombre;
    this.selectedCodigo = itemp.codigo;
    this.selectedDescripcion = itemp.descripcion;
    this.obj_venta.fo_codigo = itemp.id_producto;
    this.obj_venta.fo_producto = itemp.id_producto;
    this.obj_venta.fo_descripcion = itemp.id_producto;

    if(`event.keycode === 13`){
      this.showFormulario = false; // Para ocultar el formulario
      this.dato = this.selectedCodigo;
    }
  }

  escogercli(itemcli: any): void {//Función escoger el cliente
    this.selectedCliente = itemcli.nombre + " " + itemcli.apellido;
    this.obj_venta.fo_cliente = itemcli.id_cliente;

    if(`event.keycode === 13`){
      this.showFormulariocli = false; // Para ocultar el formulario
      this.dato2 = this.selectedCliente;
    }
  }
}
