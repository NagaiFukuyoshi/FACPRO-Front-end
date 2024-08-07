import { Component, OnInit } from '@angular/core';
import { RolService } from 'src/app/servicios/rol.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarterceros',
  templateUrl: './editarterceros.component.html',
  styleUrls: ['./editarterceros.component.scss']
})
export class EditartercerosComponent implements OnInit {

  rol: any;
  id_usuario: number | null = null;

  usuario: any = {
    fo_rol: 0,
    nombres: "",
    apellidos: "",
    correo: "",
    password: "",
    usuario: ""
  };

  validar_nombres = true;
  validar_apellidos = true;
  validar_correo = true;
  validar_password = true;
  validar_usuario = true;

  constructor(private susuario: UsuarioService, private srol: RolService) {}

  ngOnInit(): void {
    const id = sessionStorage.getItem('id');
    this.id_usuario = id ? Number(id) : null; // Convertir el ID a número
    this.consulta();
    this.consultauser();
  }

  //----------------------Función validar campos-------------------------------------------------------------------------------------------
  validar() {
    this.validar_nombres = !!this.usuario.nombres;
    this.validar_apellidos = !!this.usuario.apellidos;
    this.validar_correo = !!this.usuario.correo;
    this.validar_password = !!this.usuario.password;
    this.validar_usuario = !!this.usuario.usuario;

    if (this.validar_nombres && this.validar_apellidos && this.validar_correo && this.validar_password && this.validar_usuario) {
      this.guardar();
    }
  }

  //----------------------Función cargar datos---------------------------------------------------------------------------------------------
  cargar_datos(usuario: any, id: number) {
    this.usuario = { ...usuario };
    this.id_usuario = id;
  }

  //----------------------Función para limpiar los campos----------------------------------------------------------------------------------
  limpiar() {
    this.usuario = {
      fo_rol: 0,
      nombres: "",
      apellidos: "",
      correo: "",
      password: "",
      usuario: ""
    };
  }

  //----------------------Función guardar--------------------------------------------------------------------------------------------------
  guardar() {
    this.susuario.insertar(this.usuario).subscribe((datos: any) => {
      if (datos['resultado'] === 'OK') {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El Usuario ha sido creado con éxito",
          showConfirmButton: false,
          timer: 1500
        });
        this.limpiar();
      }
    });
  }

  //----------------------Función de consultas----------------------------------------------------------------------------------------------
  consulta() {
    this.srol.consulta().subscribe((resultado: any) => {
      this.rol = resultado;
    });
  }

  consultauser() {
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

  //----------------------Función editar---------------------------------------------------------------------------------------------------
  editar() {
    if (this.id_usuario !== null) {  // Verifica que id_usuario no sea null
      console.log('Enviando datos para editar:', this.usuario);
      this.susuario.editar(this.id_usuario, this.usuario).subscribe(
        (datos: any) => {
          console.log('Respuesta de la edición:', datos);
          if (datos['resultado'] === 'ok') {
            this.consulta(); // Asegúrate de que esta función actualice la vista correctamente
            Swal.fire({
              title: "Usuario guardado!",
              text: "El usuario ha sido guardado",
              icon: "success"
            });
          } else {
            Swal.fire({
              title: "Error",
              text: datos['mensaje'],  // Muestra mensaje de error
              icon: "error"
            });
          }
        },
        error => {
          console.error('Error en la solicitud de edición:', error);
          Swal.fire({
            title: "Error",
            text: "Ha ocurrido un error al guardar el usuario",
            icon: "error"
          });
        }
      );
      this.limpiar();
    } else {
      Swal.fire({
        title: "Error",
        text: "ID de usuario no válido",
        icon: "error"
      });
    }
  }
}
