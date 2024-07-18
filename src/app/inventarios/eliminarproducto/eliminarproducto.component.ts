import { Component } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminarproducto',
  templateUrl: './eliminarproducto.component.html',
  styleUrls: ['./eliminarproducto.component.scss']
})
export class EliminarproductoComponent {
  producto: any;
  dato: any;
  pro: any;

  constructor(private sprod: ProductoService) {}

  ngOnInit(): void {
    this.consulta();
  }

  // Función de consulta
  consulta(): void {
    this.sprod.consulta().subscribe((resultado: any) => {
      this.producto = resultado;
    });
  }

  // Función de filtrar
  filtrar(dato: any): void {
    this.sprod.filtro(dato).subscribe((resultado2: any) => {
      this.pro = resultado2;
    });
  }

  // Función de eliminar
  eliminar(id: number) {
    console.log('ID a eliminar:', id);
    Swal.fire({
      title: "¿Estás seguro que quieres eliminar el producto?",
      text: "Este proceso no podrá ser revertido!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.sprod.eliminar(id).subscribe((dato3: any) => {
          if (dato3['resultado'] === 'ok') {  // Cambiado a 'ok' según tu backend
            this.consulta();
            Swal.fire({
              title: "Producto eliminado!",
              text: "El producto ha sido eliminado",
              icon: "success"
            });
          } else {
            Swal.fire({
              title: "Error",
              text: dato3['mensaje'],  // Muestra mensaje de error
              icon: "error"
            });
          }
        });
      }
    });
  }
}

