import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-buscarproducto',
  templateUrl: './buscarproducto.component.html',
  styleUrls: ['./buscarproducto.component.scss']
})
export class BuscarproductoComponent implements OnInit {

  producto: any;
  prod: any;
  dato: any;
  pro: any;

  constructor(private sprod: ProductoService) {}

  ngOnInit(): void {
    this.consulta();
  }

  //----------------------Función consulta-------------------------------------------------------------------------------------------------
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

