import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { ProveedorService } from 'src/app/servicios/proveedor.service';

@Component({
  selector: 'app-eliminarterceros',
  templateUrl: './eliminarterceros.component.html',
  styleUrls: ['./eliminarterceros.component.scss']
})
export class EliminartercerosComponent implements OnInit {

  constructor(private scliente: ClienteService, private sproveedor: ProveedorService) {}

  dato: any;
  proveedor: any[] = [];
  cliente: any[] = [];
  tercero: any[] = []; // Array combinado

  ngOnInit(): void {
    this.consulta();
    this.consultac();
  }

  //---------------Función de consulta------------------------------------------------------------------------------------------------------
  consulta(): void {
    this.sproveedor.consulta().subscribe((resultado: any) => {
      this.proveedor = resultado;
      this.combinarResultados(); // Combinar después de obtener proveedores
    });
  }

  consultac(): void {
    this.scliente.consulta().subscribe((resultado2: any) => {
      this.cliente = resultado2;
      this.combinarResultados(); // Combinar después de obtener clientes
    });
  }

  combinarResultados(): void {
    this.tercero = [...this.proveedor, ...this.cliente]; // Combinar proveedores y clientes
  }

  //---------------Función de filtrar------------------------------------------------------------------------------------------------------
  filtrar(dato: any): void {
    const proveedoresFiltrados = this.sproveedor.filtro(dato).subscribe((resultado3: any) => {
      this.proveedor = resultado3;
      this.combinarResultados(); // Combinar después de filtrar proveedores
    });

    const clientesFiltrados = this.scliente.filtro(dato).subscribe((resultado4: any) => {
      this.cliente = resultado4;
      this.combinarResultados(); // Combinar después de filtrar clientes
    });
  }
}
