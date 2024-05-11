import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './modulos/principal.component';
import { AjustecontableComponent } from './modulos/ajustecontable/ajustecontable.component';
import { ComprobantesegresoComponent } from './modulos/comprobantesegreso/comprobantesegreso.component';
import { FacturacompraComponent } from './modulos/facturacompra/facturacompra.component';
import { FacturaventaComponent } from './modulos/facturaventa/facturaventa.component';
import { NotacontableComponent } from './modulos/notacontable/notacontable.component';
import { ReciboscajaComponent } from './modulos/reciboscaja/reciboscaja.component';
import { SaldosinicialesComponent } from './modulos/saldosiniciales/saldosiniciales.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
