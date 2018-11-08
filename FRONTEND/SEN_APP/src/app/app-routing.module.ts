import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'RegistrarDonante/:id', loadChildren: './registrar-donante/registrar-donante.module#RegistrarDonantePageModule' },
  { path: 'CantidadesSangreTipo', loadChildren: './cantidades-sangre-tipo/cantidades-sangre-tipo.module#CantidadesSangreTipoPageModule' },
  { path: 'RegistrarSangre', loadChildren: './registrar-sangre/registrar-sangre.module#RegistrarSangrePageModule' },
  { path: 'DonantesNivelReserva', loadChildren: './donantes-nivel-reserva/donantes-nivel-reserva.module#DonantesNivelReservaPageModule' },
  { path: 'DonantesTipoSangre/:id', loadChildren: './donantes-tipo-sangre/donantes-tipo-sangre.module#DonantesTipoSangrePageModule' },
  { path: 'RetirarUnidadesCaducadas', loadChildren: './retirar-unidades-caducadas/retirar-unidades-caducadas.module#RetirarUnidadesCaducadasPageModule' },
  { path: 'SalidaSangre', loadChildren: './salida-sangre/salida-sangre.module#SalidaSangrePageModule' },
  { path: 'Catalogos', loadChildren: './catalogos/catalogos.module#CatalogosPageModule' },
  { path: 'Almacen', loadChildren: './almacen/almacen.module#AlmacenPageModule' },
  { path: 'Unidad', loadChildren: './unidad/unidad.module#UnidadPageModule' },
  { path: 'FactorRh', loadChildren: './factor-rh/factor-rh.module#FactorRhPageModule' },
  { path: 'GrupoSanguineo', loadChildren: './grupo-sanguineo/grupo-sanguineo.module#GrupoSanguineoPageModule' },
  { path: 'GrupoSanguineoCU/:id', loadChildren: './grupo-sanguineo-cu/grupo-sanguineo-cu.module#GrupoSanguineoCUPageModule' },
  { path: 'FactorRhCU/:id', loadChildren: './factor-rh-cu/factor-rh-cu.module#FactorRhCUPageModule' },
  { path: 'UnidadesCU/:id', loadChildren: './unidades-cu/unidades-cu.module#UnidadesCUPageModule' },
  { path: 'AlmacenCU/:id', loadChildren: './almacen-cu/almacen-cu.module#AlmacenCUPageModule' },
  { path: 'TiposSangre', loadChildren: './tipos-sangre/tipos-sangre.module#TiposSangrePageModule' },
  { path: 'TipoSangreCU/:id', loadChildren: './tipo-sangre-cu/tipo-sangre-cu.module#TipoSangreCUPageModule' },
  { path: 'CantidadSangreTipo', loadChildren: './cantidad-sangre-tipo/cantidad-sangre-tipo.module#CantidadSangreTipoPageModule' },
  { path: 'IngresoSangre', loadChildren: './ingreso-sangre/ingreso-sangre.module#IngresoSangrePageModule' },
  { path: 'DonantesNivelReservaBajo', loadChildren: './donantes-nivel-reserva-bajo/donantes-nivel-reserva-bajo.module#DonantesNivelReservaBajoPageModule' },
  { path: 'donantes', loadChildren: './donantes/donantes.module#DonantesPageModule' },
  { path: 'congelador', loadChildren: './congelador/congelador.module#CongeladorPageModule' },
  { path: 'congeladorCU/:id', loadChildren: './congelador-cu/congelador-cu.module#CongeladorCUPageModule' },
  { path: 'ContenidosCongelador', loadChildren: './contenidos-congelador/contenidos-congelador.module#ContenidosCongeladorPageModule' },
  { path: 'ContenidosCongeladorCU/:id', loadChildren: './contenidos-congelador-cu/contenidos-congelador-cu.module#ContenidosCongeladorCUPageModule' },
  { path: 'rd-madre', loadChildren: './rd-madre/rd-madre.module#RdMadrePageModule' },
  { path: 'cu-madre/:id', loadChildren: './cu-madre/cu-madre.module#CuMadrePageModule' },
  { path: 'rd-ninio', loadChildren: './rd-ninio/rd-ninio.module#RdNinioPageModule' },
  { path: 'cu-ninio/:id', loadChildren: './cu-ninio/cu-ninio.module#CuNinioPageModule' },
  { path: 'rd-evaluacion', loadChildren: './rd-evaluacion/rd-evaluacion.module#RdEvaluacionPageModule' },
  { path: 'cu-evaluacion/:id', loadChildren: './cu-evaluacion/cu-evaluacion.module#CuEvaluacionPageModule' },
  { path: 'show-evaluacion-ninio/:id', loadChildren: './rd-evaluacion-ninio/rd-evaluacion-ninio.module#RdEvaluacionNinioPageModule' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
