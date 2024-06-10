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
import { CrearproveedorComponent } from './terceros/crearproveedor/crearproveedor.component';
import { CrearusuarioComponent } from './terceros/crearusuario/crearusuario.component';
import { NoEncontroComponent } from './no-encontro/no-encontro.component';
import { validaruserGuard } from './guard/validaruser.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'ajustecontable', component: AjustecontableComponent, canActivate: [validaruserGuard]},
  {path: 'comprobanteegreso', component: ComprobantesegresoComponent, canActivate: [validaruserGuard]},
  {path: 'facturacompra', component: FacturacompraComponent, canActivate: [validaruserGuard]},
  {path: 'facturaventa', component: FacturaventaComponent, canActivate: [validaruserGuard]},
  {path: 'notacontable', component: NotacontableComponent, canActivate: [validaruserGuard]},
  {path: 'recibocaja', component: ReciboscajaComponent, canActivate: [validaruserGuard]},
  {path: 'saldoinicial', component: SaldosinicialesComponent, canActivate: [validaruserGuard]},
  {path: 'crearproducto', component: CrearproductoComponent, canActivate: [validaruserGuard]},
  {path: 'editarproducto', component: EditarproductoComponent, canActivate: [validaruserGuard]},
  {path: 'eliminarproducto', component: EliminarproductoComponent, canActivate: [validaruserGuard]},
  {path: 'buscarproducto', component: BuscarproductoComponent, canActivate: [validaruserGuard]},
  {path: 'buscarfactura', component: ConsultarfacturaComponent, canActivate: [validaruserGuard]},
  {path: 'editarfactura', component: EditarfacturaComponent, canActivate: [validaruserGuard]},
  {path: 'crearterceros', component: CreartercerosComponent, canActivate: [validaruserGuard]},
  {path: 'editarterceros', component: EditartercerosComponent, canActivate: [validaruserGuard]},
  {path: 'eliminarterceros', component: EliminartercerosComponent, canActivate: [validaruserGuard]},
  {path: 'balanceprueba', component: BalancepruebaComponent, canActivate: [validaruserGuard]},
  {path: 'estadoresultado', component: EstadoresultadosComponent, canActivate: [validaruserGuard]},
  {path: 'balancegeneral', component: BalancegeneralComponent, canActivate: [validaruserGuard]},
  {path: 'libroauxiliarcuenta', component: LibroauxiliarcuentaComponent, canActivate: [validaruserGuard]},
  {path: 'libroauxiliartercero', component: LibroauxiliarterceroComponent, canActivate: [validaruserGuard]},
  {path: 'crearproveedor', component: CrearproveedorComponent, canActivate: [validaruserGuard]},
  {path: 'crearusuario', component: CrearusuarioComponent, canActivate: [validaruserGuard]},
  {path: '**', component: NoEncontroComponent}
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
    LoginComponent,
    CrearproveedorComponent,
    CrearusuarioComponent,
    NoEncontroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
