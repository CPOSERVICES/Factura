import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  //{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register-u', loadChildren: './pages/register-u/register-u.module#RegisterUPageModule' },
  { path: 'register-e', loadChildren: './pages/register-e/register-e.module#RegisterEPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'facturacion', loadChildren: './pages/facturacion/facturacion.module#FacturacionPageModule' },
  { path: 'facturas', loadChildren: './pages/facturas/facturas.module#FacturasPageModule' },
  { path: 'reportes', loadChildren: './pages/reportes/reportes.module#ReportesPageModule' },
  { path: 'reporte-f', loadChildren: './pages/reporte-f/reporte-f.module#ReporteFPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
