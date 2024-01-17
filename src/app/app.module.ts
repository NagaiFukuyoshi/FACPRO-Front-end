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
import { CrearproductoComponent } from './crearproducto/crearproducto.component';
import { EditarproductoComponent } from './inventarios/editarproducto/editarproducto.component';
import { EliminarproductoComponent } from './inventarios/eliminarproducto/eliminarproducto.component';
import { BuscarproductoComponent } from './inventarios/buscarproducto/buscarproducto.component';
import { EditarfacturaComponent } from './editarfactura/editarfactura.component';
import { ConsultarfacturaComponent } from './consultarfactura/consultarfactura.component';
import { CreartercerosComponent } from './terceros/crearterceros/crearterceros.component';
import { EditartercerosComponent } from './terceros/editarterceros/editarterceros.component';
import { EliminartercerosComponent } from './terceros/eliminarterceros/eliminarterceros.component';
import { BalancepruebaComponent } from './informes/balanceprueba/balanceprueba.component';
import { EstadoresultadosComponent } from './informes/estadoresultados/estadoresultados.component';
import { BalancegeneralComponent } from './informes/balancegeneral/balancegeneral.component';
import { LibroauxiliarcuentaComponent } from './informes/libroauxiliarcuenta/libroauxiliarcuenta.component';
import { LibroauxiliarterceroComponent } from './informes/libroauxiliartercero/libroauxiliartercero.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'ajustecontable', component: AjustecontableComponent},
  {path: 'comprobanteegreso', component: ComprobantesegresoComponent},
  {path: 'facturacompra', component: FacturacompraComponent},
  {path: 'facturaventa', component: FacturaventaComponent},
  {path: 'notacontable', component: NotacontableComponent},
  {path: 'recibocaja', component: ReciboscajaComponent},
  {path: 'saldoinicial', component: SaldosinicialesComponent},
  {path: 'crearproducto', component: CrearproductoComponent},
  {path: 'editarproducto', component: EditarproductoComponent},
  {path: 'eliminarproducto', component: EliminarproductoComponent},
  {path: 'buscarproducto', component: BuscarproductoComponent},
  {path: 'buscarfactura', component: ConsultarfacturaComponent},
  {path: 'editarfactura', component: EditarfacturaComponent},
  {path: 'crearterceros', component: CreartercerosComponent},
  {path: 'editarterceros', component: EditartercerosComponent},
  {path: 'eliminarterceros', component: EliminartercerosComponent},
  {path: 'balanceprueba', component: BalancegeneralComponent},
  {path: 'estadoresultado', component: EstadoresultadosComponent},
  {path: 'balancegeneral', component: BalancegeneralComponent},
  {path: 'libroauxiliarcuenta', component: LibroauxiliarcuentaComponent},
  {path: 'libroauxiliartercero', component: LibroauxiliarterceroComponent}
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
    DashboardComponent,
    CrearproductoComponent,
    EditarproductoComponent,
    EliminarproductoComponent,
    BuscarproductoComponent,
    EditarfacturaComponent,
    ConsultarfacturaComponent,
    CreartercerosComponent,
    EditartercerosComponent,
    EliminartercerosComponent,
    BalancepruebaComponent,
    EstadoresultadosComponent,
    BalancegeneralComponent,
    LibroauxiliarcuentaComponent,
    LibroauxiliarterceroComponent,
    LoginComponent
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
