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
  prod: any;
  dato: any;
  pro: any;

  constructor(private sprod: ProductoService) {}

  ngOnInit(): void {
    this.consulta();
  }

  consulta(): void {
    this.sprod.consulta().subscribe((resultado: any) => {
      this.producto = resultado;
    });
  }

  filtrar(dato: any): void {
    this.sprod.filtro(dato).subscribe((resultado2: any) => {
      this.pro = resultado2;
      console.log(this.pro);
    });
  }

  eliminar(id_producto:any): void{
    
    Swal.fire({
      title: "¿Estas seguro?",
      text: "¡Este proceso no es reversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar producto",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
          this.sprod.eliminar(id_producto).subscribe((dato3:any) =>{
          
            if(dato3['resultado'] == 'OK'){
              this.consulta();
            }
          })

        Swal.fire({
          title: "¡Producto eliminado!",
          text: "El producto ha sido eliminado",
          icon: "success"
        });
      }
    });
  }
}
