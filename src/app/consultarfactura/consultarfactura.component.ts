import { Component } from '@angular/core';
import { ClienteService } from '../servicios/cliente.service';
import { ProveedorService } from '../servicios/proveedor.service';
import { TipoFacturaService } from '../servicios/tipo-factura.service';
import { ComprasService } from '../servicios/compras.service';
import { VentasService } from '../servicios/ventas.service';

@Component({
  selector: 'app-consultarfactura',
  templateUrl: './consultarfactura.component.html',
  styleUrls: ['./consultarfactura.component.scss']
})

export class ConsultarfacturaComponent {

  cliente:any;
  tercero:any;
  fecha:any;
  fecha_inicial:any;
  fecha_final:any;
  proveedor:any;
  compras:any;
  ventas:any;
  tipoFactura:any;
  tipo_factura: number | undefined;

  constructor(private scliente: ClienteService, private sproveedor: ProveedorService, private sfactura: TipoFacturaService, private scompra: ComprasService, private sventa: VentasService) {}

  ngOnInit(): void {
    this.consulta();
    this.consultap();
    this.consultafac();
    this.consultac();
    this.consultav();
  }

  //----------------------Función consulta-------------------------------------------------------------------------------------------------
  consulta(): void {
    this.scliente.consulta().subscribe((resultado: any) => {
      this.cliente = resultado;
    });
  }

  consultap(): void {
    this.sproveedor.consulta().subscribe((resultado2: any) => {
      this.proveedor = resultado2;
    });
  }

  consultafac(): void {
    this.sfactura.consulta().subscribe((resultado3: any) => {
      this.tipoFactura = resultado3;
      console.log(this.tipo_factura);
    });
  }

  consultac(): void {
    this.scompra.consulta().subscribe((resultado4: any) => {
      this.compras = resultado4;
    });
  }

  consultav(): void {
    this.sfactura.consulta().subscribe((resultado5: any) => {
      this.ventas = resultado5;
    });
  }

  //----------------------Función filtro--------------------------------------------------------------------------------------------------
  filtrarc(tercero: any): void {
    this.scompra.filtro(tercero).subscribe((resultados: any) => {
      this.compras = resultados;
    });
  }
  
  filtrarv(tercero: any): void {
    this.sventa.filtro(tercero).subscribe((resultados: any) => {
      this.ventas = resultados;
    });
  }
  
  filtro(): void {
    /*if(this.fecha >= this.fecha_inicial && this.fecha <= this.fecha_final) {
    }*/

    if (this.tipo_factura === 1) {
      this.filtrarc(this.tercero);
      console.log("se ejecutó la función filtrar compras");
    } else if (this.tipo_factura === 2) {
      this.filtrarv(this.tercero);
      console.log("se ejecutó la función filtrar ventas");
    }
  }
  
}
