import { Component } from '@angular/core';
import { CiudadService } from 'src/app/servicios/ciudad.service';
import { DocumentoService } from 'src/app/servicios/documento.service';
import { ProveedorService } from 'src/app/servicios/proveedor.service';
import { TipotercerosService } from 'src/app/servicios/tipoterceros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crearproveedor',
  templateUrl: './crearproveedor.component.html',
  styleUrls: ['./crearproveedor.component.scss']
})
export class CrearproveedorComponent {

  documento:any;
  tercero:any;
  ciudad:any;
  showFormularioc = false;
  selectedCiudad:any;
  dato2:any;

  proveedor = {
    fo_tipoTercero:0,
    fo_documento:0,
    num_documento:0,
    nombre:"",
    apellido: "",
    direccion:"",
    fo_ciudad:0,
    email: "",
    telefono: 0,
    razon_social:""
  }

//validaciones
  validar_tipoTercero = true;
  validar_documento = true;
  validar_numDocumento = true;
  validar_direccion = true;
  validar_ciudad = true;
  validar_email = true;
  validar_telefono = true;

  constructor(private sdocumento: DocumentoService, private stercero: TipotercerosService, private sciudad: CiudadService, private sproveedor: ProveedorService) {}

  ngOnInit(): void {
    this.consulta();
    this.consultat();
  }

  //----------------------Función de consulta----------------------------------------------------------------------------------------------
  consulta(): void {
    this.sdocumento.consulta().subscribe((resultado: any) => {
      this.documento = resultado;
    });
  }

  consultat(): void {
    this.stercero.consulta().subscribe((resultado: any) => {
      this.tercero = resultado;
    });
  }

  //----------------------Función de filtrar-----------------------------------------------------------------------------------------------
  filtrarc(dato2: any): void {//Función filtrar ciudad

    if(event instanceof KeyboardEvent && event.key === 'Enter'){
      this.showFormularioc = true;

      this.sciudad.filtro(dato2).subscribe((resultado2: any) => {
        this.ciudad = resultado2;
      });
    }
  }

  //-----------------------Función de escoger---------------------------------------------------------------------------------------------- 
    escogerc(itemc: any): void {//Función escoger el cliente
      this.selectedCiudad = itemc.nombre;
      this.proveedor.fo_ciudad = itemc.id_ciudad;
  
      if(`event.keycode === 13`){
        this.showFormularioc = false; // Para ocultar el formulario
        this.dato2 = this.selectedCiudad;
      }
    }

  //----------------------Función de limpiar-----------------------------------------------------------------------------------------------
    limpiar(){
      this.proveedor = {
        fo_documento:0,
        fo_tipoTercero:0,
        num_documento:0,
        nombre:"",
        apellido: "",
        direccion:"",
        fo_ciudad:0,
        email: "",
        telefono: 0,
        razon_social:""
      }
    }

  //-----------------------Función de validar----------------------------------------------------------------------------------------------
    validar(){
    //validar que tipo de tercero no este vació
      if(this.proveedor.fo_tipoTercero == 0){
        this.validar_tipoTercero=false;
      }else{
        this.validar_tipoTercero=true;
      }
    //validar que tipo de documento no este vació
      if(this.proveedor.fo_documento == 0){
        this.validar_documento=false;
      }else{
        this.validar_documento=true;
      }
    //validar que número de documento no este vació
      if(this.proveedor.num_documento == 0){
        this.validar_numDocumento=false;
      }else{
        this.validar_numDocumento=true;
      }
    //validar que dirección no este vació
      if(this.proveedor.direccion == ""){
        this.validar_direccion=false;
      }else{
        this.validar_direccion=true;
      }
    //validar que ciudad no este vació
      if(this.proveedor.fo_ciudad == 0){
        this.validar_ciudad=false;
      }else{
        this.validar_ciudad=true;
      }
    //validar que email no este vació
      if(this.proveedor.email == ""){
        this.validar_email=false;
      }else{
        this.validar_email=true;
      }
    //validar que teléfono no este vació
      if(this.proveedor.telefono == 0){
        this.validar_telefono=false;
      }else{
        this.validar_telefono=true;
      }

      if(this.validar_ciudad == true && this.validar_direccion == true && this.validar_documento == true && this.validar_email == true && this.validar_numDocumento == true && this.validar_telefono == true && this.validar_tipoTercero == true){
        this.guardar();
      }
    }

  //-----------------------Función de guardar----------------------------------------------------------------------------------------------
  guardar(): void {
    
    this.sproveedor.insertar(this.proveedor).subscribe(
      (datos: any) => {

        Swal.fire({
          position: "center",
          icon: "success",
          title: "El Proveedor ha sido creado con éxito",
          showConfirmButton: false,
          timer: 1500
        });

        this.limpiar();
      }
    );
  }
  }