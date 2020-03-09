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
];

@NgModule({
  	imports: [
    	RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  	],
	  
	exports: [RouterModule]
})

export class AppRoutingModule { }