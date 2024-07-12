import { Component } from '@angular/core';
import { IvaService } from '../servicios/iva.service';
import { ProductoService } from '../servicios/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.scss']
})
export class CrearproductoComponent {

  iva:any;

  producto = {
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

  ngOnInit(): void{
    this.consulta();
  }

  constructor(private siva: IvaService, private sproducto: ProductoService){}

  //----------------------Función de consulta---------------------------------------------------------------------------------------------
    consulta(): void {
      this.siva.consulta().subscribe((resultado: any) => {
        this.iva = resultado;
      });
    }
  
  //función validar campos
    validar(){
      //validar que nombres no este vació
      if(this.producto.nombre == ""){
        this.validar_nombre=false;
        console.log(this.validar_nombre);//
      }else{
        this.validar_nombre=true;
        console.log(this.validar_nombre);
      }
      //validar que precio de venta no este vació
      if(this.producto.precio_venta == 0){
        this.validar_precioventa=false;
        console.log(this.validar_precioventa);//
      }else{
        this.validar_precioventa=true;
        console.log(this.validar_precioventa);
      }
      //validar que IVA no este vació
      if(this.producto.fo_iva == 0){
        this.validar_foIva=false;
        console.log(this.validar_foIva);//
      }else{
        this.validar_foIva=true;
        console.log(this.validar_foIva);
      }
      
      //validar que todos loc campos estén llenos
      if(this.validar_nombre == true && this.validar_precioventa == true && this.validar_foIva == true ){
        this.guardar();
        console.log(this.producto);

      }
    }

  //Función para limpiar los campos
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

  //Función para guardar la información en la base de datos
  guardar(): void {
    console.log('Datos del comprobante antes de guardar:', this.producto);

    this.sproducto.insertar(this.producto).subscribe((datos:any) => {
      if(datos['resultado'] == 'OK'){
      }
    })
  
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El producto ha sido creado con éxito",
      showConfirmButton: false,
      timer: 1500
    });

    this.limpiar()
  }
}
