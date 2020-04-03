import { Component, OnInit } from '@angular/core';
import { ModalController }   from '@ionic/angular';
import { AlertController }   from '@ionic/angular';
import { CrudService }       from './../../servicios/crud.service';
@Component({
	selector    : 'app-nuevanc',
	templateUrl : './nuevanc.page.html',
	styleUrls   : ['./nuevanc.page.scss'],
})

export class NuevancPage implements OnInit {
	noconformidad : any;
	Newnoconformidades : any;
	noconformidades : any;
	noConformidadExcell       : any;
	Busqueda : string;
	nuevoEquipo : string;
	// EL ERROR ESTABA AQUI CON DESCRIPCIÓN CON TILDE
//	nuevaDescripción : string;
	RN : string;
	nuevoCriterio : string;
	nuevoRiesgo : string;
	nuevaSolucion : string;
	nuevaCantidad : number;

	constructor(
		private modalController  : ModalController, 
		private crudService      : CrudService, 
		public  alertController  : AlertController) { }

	ngOnInit() {
		

		/*this.crudService.read_Newnoconformidades().subscribe(data => {
			this.noconformidad = data.map(e => {
			  return {
				Equipo        : e.payload.doc.data()['Name'],
				NoConformidad : e.payload.doc.data()['Name1'],
				Area          : e.payload.doc.data()['Name2']
			  };
			})
		});*/
	}
	/*async openModal1() {
		const modal = await this.modalController.create({
			component : SecondPage
		});

		return await modal.present();
	}*/

	CreateRecord2() {
		let record2 = {};
		
		record2['Ub']    = this.Busqueda;
		record2['Eq']     = this.nuevoEquipo;
	// ACA TAMBIÉN HABÍA ERROR CON LA TILDE
//		record2['Descripción'] = this.nuevaDescripción;
		record2['Referencia']    = this.RN;
		record2['Criterio']     = this.nuevoCriterio;
		record2['Riesgo'] = this.nuevoRiesgo;
		record2['Solucion'] = this.nuevaSolucion;
		record2['Cantidad'] = this.nuevaCantidad;
		
		this.crudService.create_NewSNewnoconformidades(record2).then(resp => {
			this.Busqueda    = "";
			  this.nuevoEquipo     = "";
			  // Y AQUÍ TAMBIÉN QUE NO SE TE OLVIDE
//			this.nuevaDescripción = "";
			this.RN   = "";
			this.nuevoCriterio = "";
			this.nuevoRiesgo = "";
			this.nuevaSolucion = "";
			this.nuevaCantidad = undefined;
			  
			this.presentAlert("¡Bien hecho!","No conformidad creada");
		})
		.catch(error => {
			this.presentAlert("¡Error!", "revise los campos " + error);
		});
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
}

