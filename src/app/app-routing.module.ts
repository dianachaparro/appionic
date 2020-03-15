import { NgModule }                                from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
  	{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  	{
    	path: 'login',
    	loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  	},
  {
    path: 'second',
    loadChildren: () => import('./modals/second/second.module').then( m => m.SecondPageModule)
  },
  {
    path: 'editar-no-conformidad',
    loadChildren: () => import('./modals/editar-no-conformidad/editar-no-conformidad.module').then( m => m.EditarNoConformidadPageModule)
  },
  {
    path: 'exp',
    loadChildren: () => import('./pages/exp/exp.module').then( m => m.ExpPageModule)
  },
  {
    path: 'selecionarnc',
    loadChildren: () => import('./pages/selecionarnc/selecionarnc.module').then( m => m.SelecionarncPageModule)
  },
  {
    path: 'nuevanc',
    loadChildren: () => import('./pages/nuevanc/nuevanc.module').then( m => m.NuevancPageModule)
  },
];

@NgModule({
  	imports: [
    	RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  	],
	  
	exports: [RouterModule]
})

export class AppRoutingModule { }
