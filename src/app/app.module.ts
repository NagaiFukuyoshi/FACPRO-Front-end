import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './estructura/header/header.component';
import { NavComponent } from './estructura/nav/nav.component';
import { PrincipalComponent } from './modulos/principal.component';
import { ReciboscajaComponent } from './modulos/reciboscaja/reciboscaja.component';
import { ComprobantesegresoComponent } from './modulos/comprobantesegreso/comprobantesegreso.component';
import { FacturacompraComponent } from './modulos/facturacompra/facturacompra.component';
import { FacturaventaComponent } from './modulos/facturaventa/facturaventa.component';
import { NotacontableComponent } from './modulos/notacontable/notacontable.component';
import { AjustecontableComponent } from './modulos/ajustecontable/ajustecontable.component';
import { SaldosinicialesComponent } from './modulos/saldosiniciales/saldosiniciales.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'ajustecontable', component: AjustecontableComponent},
  {path: 'comprobanteegreso', component: ComprobantesegresoComponent},
  {path: 'facturacompra', component: FacturacompraComponent},
  {path: 'facturaventa', component: FacturaventaComponent},
  {path: 'notacontable', component: NotacontableComponent},
  {path: 'recibocaja', component: ReciboscajaComponent},
  {path: 'saldoinicial', component: SaldosinicialesComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    PrincipalComponent,
    ReciboscajaComponent,
    ComprobantesegresoComponent,
    FacturacompraComponent,
    FacturaventaComponent,
    NotacontableComponent,
    AjustecontableComponent,
    SaldosinicialesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
