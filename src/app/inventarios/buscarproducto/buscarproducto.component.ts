import { Component } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-buscarproducto',
  templateUrl: './buscarproducto.component.html',
  styleUrls: ['./buscarproducto.component.scss']
})
export class BuscarproductoComponent {

  producto: any;
  prod:any;

  constructor(private sprod:ProductoService){}

  ngOnInit(): void{
    this.consulta();
  }

  consulta(){
    this.sprod.consulta().subscribe((resultado:any)=>{
      this.producto = resultado;
    })
  }
}
