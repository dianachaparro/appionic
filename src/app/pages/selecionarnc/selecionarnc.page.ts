import { Component, OnInit } from '@angular/core';
import { CrudService }       from '../../servicios/crud.service';
import { AlertController }   from '@ionic/angular';
import { ModalController }   from '@ionic/angular';
//import { ConsoleReporter } from 'jasmine';

@Component({
	selector    : 'app-selecionarnc',
	templateUrl : './selecionarnc.page.html',
	styleUrls   : ['./selecionarnc.page.scss'],
})
export class SelecionarncPage implements OnInit {
	ubicacionUb: string;
	equipos                   : any;
	ubicacion                 : any;
	newnoconformidad          : any;
	noConformidadSeleccionada : any;
	noConformidadExcell       : any;
	ubicacionSeleccionada     : any;
	descripcion = "";
  	criterio    = "";
  	referencia  = "";
	riesgo      = "";
	Busqueda : string;
	

	constructor(
	private modalController  : ModalController,
	private crudService      : CrudService,
	public  alertController  : AlertController) { }
	

	ngOnInit() {
		this.limpiarObjeto();

		this.crudService.read_Equipos().subscribe(data => {
			this.equipos = data.map(e => {
				return {
					id     : e.payload.doc.id,
					isEdit : false,
					Equipo : e.payload.doc.data()['Eq']
			  	};
			})
		});
		

		this.crudService.read_Ubicacion().subscribe(data => {
			this.ubicacion = data.map(e => {
				return {
					id        : e.payload.doc.id,
					isEdit    : false,
					Ubicacion : e.payload.doc.data()['Ub']
			  	};
			})
		});

		this.crudService.read_Newnoconformidades().subscribe(data => {
			this.newnoconformidad = data.map(e => {
				return {
					id            : e.payload.doc.id,
					isEdit        : false,
					Equipo        : e.payload.doc.data()['Equipo'],
					NoConformidad : e.payload.doc.data()['No conformidad'],
					Descripcion   : e.payload.doc.data()['Descripción'],
					Criterio      : e.payload.doc.data()['Criterio'],
					Referencia    : e.payload.doc.data()['Referencia Normativa'],
					Riesgo        : e.payload.doc.data()['Riesgo eléctrico']
			  	};
			})
		});
	  }
	  CreateRecord1() {
		let record1 = {};

		record1['Ub'] = this.Busqueda; //Ub= campo nombrado en Firebase

		//record1['Ubicacion']    = this.ubicacion;
		this.crudService.create_Ubicacion(record1).then(resp => {
			this.Busqueda    = "";
		
			this.presentAlert("¡Bien hecho!","Guardado correctamente");
		})
		.catch(error => {
			this.presentAlert("¡Error!", "Problema al guardar: " + error);
		});
	}
	  /*CreateRecord1() {
		let record = {};
		
		record['Ub']    = this.ubicacionUb;
		this.crudService.create_NewUbicacion(record).then(resp => {
			this.ubicacionUb    = "";
		  	
			  
			this.presentAlert("¡Bien hecho!","Guardado correctamente");
		})
		.catch(error => {
			this.presentAlert("¡Error!", "Problema al guardar: " + error);
		});
	}*/

	
	CreateRecord() {
		this.crudService.create_NewSNoConformidadExcell(this.noConformidadExcell).then(resp => {
			this.limpiarObjeto();
			  
			this.presentAlert("¡Bien hecho!","Guardado correctamente");
		})
		.catch(error => {
			this.presentAlert("¡Error!", "Problema al guardar: " + error);
		});
	}

	onSelectChange() {
		// Solución momentanea
		if(this.ubicacionSeleccionada == undefined) {
			this.noConformidadExcell = {
				//NoConformidad: this.noConformidadSeleccionada.NoConformidad,
				//Equipo   : this.noConformidadSeleccionada.Equipo,
				Criterio    : this.noConformidadSeleccionada.Criterio,
				Descripcion : this.noConformidadSeleccionada.Descripcion,
				Referencia  : this.noConformidadSeleccionada.Referencia,
				Riesgo      : this.noConformidadSeleccionada.Riesgo,
				Ubicacion   : "Sin ubicación"
			}
		} else {
			this.noConformidadExcell = {
				//NoConformidad: this.noConformidadSeleccionada.NoConformidad,
				//Equipo   : this.noConformidadSeleccionada.Equipo,
				Criterio    : this.noConformidadSeleccionada.Criterio,
				Descripcion : this.noConformidadSeleccionada.Descripcion,
				Referencia  : this.noConformidadSeleccionada.Referencia,
				Riesgo      : this.noConformidadSeleccionada.Riesgo,
				Ubicacion   : this.ubicacionSeleccionada
			}
		}
	}

	// Mensaje de alerta
	async presentAlert(header : string, msj : string) {
		const alert = await this.alertController.create({
			header    : header,
		  	message   : msj,
		  	buttons   : ['OK']
		});
	
		await alert.present();
	}

	limpiarObjeto() {
		this.noConformidadExcell = {
			Criterio    : '',
			Descripcion : '',
			Referencia  : '',
			Riesgo      : ''
		}
		
		/*this.equipos          = '';
		this.ubicacion        = '';*/
		//this.newnoconformidad = '';
	}
}