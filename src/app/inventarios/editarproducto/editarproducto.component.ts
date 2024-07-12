import { Component } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.component.html',
  styleUrls: ['./editarproducto.component.scss']
})
export class EditarproductoComponent {
  
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

  //----------------------Función filtro--------------------------------------------------------------------------------------------------
  filtrar(dato: any): void {
    this.sprod.filtro(dato).subscribe((resultado2: any) => {
      this.pro = resultado2;
    });
  }
}
