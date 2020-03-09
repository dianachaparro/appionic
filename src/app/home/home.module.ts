import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { IonicModule }             from '@ionic/angular';
import { FormsModule }             from '@angular/forms';
import { RouterModule }            from '@angular/router';
import { HomePage }                from './home.page';
import { SecondPage }              from '../modals/second/second.page';
import { EditarNoConformidadPage } from '../modals/editar-no-conformidad/editar-no-conformidad.page';

@NgModule({
	imports: [
    	CommonModule,
    	FormsModule,
    	IonicModule,
		
		RouterModule.forChild([
      	{
        	path      : '',
        	component : HomePage
      	}
    	])
  	],

	declarations    : [HomePage, SecondPage, EditarNoConformidadPage],
	entryComponents : [SecondPage, EditarNoConformidadPage]
})

export class HomePageModule {}
