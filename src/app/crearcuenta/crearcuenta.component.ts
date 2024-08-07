import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { UsuarioService } from '../servicios/usuario.service';
import { RolService } from '../servicios/rol.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.component.html',
  styleUrls: ['./crearcuenta.component.scss']
})
export class CrearcuentaComponent {

  rol:any;

  usuario = {
    fo_rol:0,
    nombres:"",
    apellidos:"",
    correo:"",
    password:"",
    usuario:""
  }

  validar_nombres=true;
  validar_apellidos=true;
  validar_correo=true;
  validar_password=true;
  validar_usuario=true;

  ngOnInit(): void{
    this.limpiar();
    this.consulta();
  }


  constructor(private susuario:UsuarioService, private srol: RolService, private router:Router){}

  //----------------------Función validar campos------------------------------------------------------------------------------------------
  validar(){
    //validar que nombres no este vació
    if(this.usuario.nombres == ""){
      this.validar_nombres=false;
    }else{
      this.validar_nombres=true;
    }
    //validar que apellidos no este vació
    if(this.usuario.apellidos == ""){
      this.validar_apellidos=false;
    }else{
      this.validar_apellidos=true;
    }
    //validar que correo no este vació
    if(this.usuario.correo == ""){
      this.validar_correo=false;
    }else{
      this.validar_correo=true;
    }
    //validar que password no este vació
    if(this.usuario.password == ""){
      this.validar_password=false;
    }else{
      this.validar_password=true;
    }
    //validar que usuario no este vació
    if(this.usuario.usuario == ""){
      this.validar_usuario=false;
    }else{
      this.validar_usuario=true;
    }
    //validar que todos loc campos estén llenos
    if(this.validar_nombres == true && this.validar_apellidos == true && this.validar_correo == true && this.validar_password == true && this.validar_usuario == true){
      this.guardar();
    }
    }

  //----------------------Función para limpiar los campos---------------------------------------------------------------------------------
  limpiar(){
    this.usuario = {
      fo_rol:0,
      nombres:"",
      apellidos:"",
      correo:"",
      password:"",
      usuario:""
    }
  }
  
  //----------------------Función para guardar la información en la base de datos----------------------------------------------------------
  guardar(){
    this.susuario.insertar(this.usuario).subscribe((datos:any) => {
      if(datos['resultado'] == 'OK'){
      }
    })
    
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El Usuario ha sido creado con éxito",
      showConfirmButton: false,
      timer: 1500
    });
    this.limpiar()
    this.router.navigate(['/dashboard']);
  }

  //----------------------Función de consulta----------------------------------------------------------------------------------------------
  consulta(): void {
    this.srol.consulta().subscribe((resultado: any) => {
      this.rol = resultado;
    });
  }

}
