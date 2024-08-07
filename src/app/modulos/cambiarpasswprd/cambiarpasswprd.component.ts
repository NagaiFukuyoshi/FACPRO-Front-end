import { Component } from '@angular/core';
import { RolService } from 'src/app/servicios/rol.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cambiarpasswprd',
  templateUrl: './cambiarpasswprd.component.html',
  styleUrls: ['./cambiarpasswprd.component.scss']
})
export class CambiarpasswprdComponent {

  validar_correo = false;
  validar_contrasena = false;
  newpassword = false;
  correo:any;
  rol: any;
  email = sessionStorage.getItem("correo");
  password2: any;
  id_usuario: number | null = null;
  info = false;

  usuario = {
    fo_rol:0,
    nombres:"",
    apellidos:"",
    correo:"",
    password:"",
    usuario:""
  }

  ngOnInit(): void{
    const id = sessionStorage.getItem('id');
    this.id_usuario = id ? Number(id) : null;
    const email = sessionStorage.getItem("correo");
    this.consulta();
  }

  constructor(private susuario:UsuarioService, private srol: RolService){}

  //----------------------Función de consulta----------------------------------------------------------------------------------------------
  consulta() {
    this.susuario.consulta().subscribe((resultado: any) => {
      const usuario = resultado.find((user: any) => {
        return Number(user.id_usuario) === this.id_usuario;
      }); // Asegurar que ambos IDs sean números
      if (usuario) {
        this.cargar_datos(usuario, this.id_usuario!);
      } else {
      }
    });
  }

  consultarol() {
    this.srol.consulta().subscribe((resultado: any) => {
      this.rol = resultado;
    });
  }

  //----------------------Función cargar datos---------------------------------------------------------------------------------------------
  cargar_datos(usuario: any, id: number) {
    this.usuario = { ...usuario };
    this.id_usuario = id;
  }

  //----------------------Función de verificar correo electrónico--------------------------------------------------------------------------
  validarcorreo(): void{
    if(this.correo == this.email){
      this.newpassword = true;
    }else{
      this.validar_correo = true;
    }
  }

  //----------------------Función passwprd iguales-----------------------------------------------------------------------------------------
  passwordiguales(): void{
    if(this.usuario.password== this.password2){
      this.validar_contrasena = false;
      this.cargar_datos(this.usuario, this.id_usuario!);
      this.editar();
    } else{
      this.validar_contrasena = true;
    }
  }

  //----------------------Función editar---------------------------------------------------------------------------------------------------
  editar() {
    if (this.id_usuario !== null) {
      console.log('Enviando datos para editar:', this.usuario);
      this.susuario.editar(this.id_usuario, this.usuario).subscribe(
        (datos: any) => {
          console.log('Respuesta de la edición:', datos);
          if (datos['resultado'] === 'ok') {
            this.consulta();
            this.newpassword = false;
            this.correo = '';
            Swal.fire({
              title: "La nueva contraseña ha sido guardada!",
              text: "La nueva contraseña ha sido guardada",
              icon: "success"
            });
          } else {
            Swal.fire({
              title: "Error",
              text: datos['mensaje'],
              icon: "error"
            });
          }
        },
        error => {
          console.error('Error en la solicitud de edición:', error);
          Swal.fire({
            title: "Error",
            text: "Ha ocurrido un error al guardar la contraseña",
            icon: "error"
          });
        }
      );
    } else {
      Swal.fire({
        title: "Error",
        text: "ID de usuario no válido",
        icon: "error"
      });
    }
  }
  

}
