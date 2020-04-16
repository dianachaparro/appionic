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
	//nuevaDescripcion : string;
	RN : string;
	nuevoCriterio : string;
	nuevoRiesgo : string;
	nuevaSolucion : string;
	nuevaCantidad : number;
	nuevaNC : String;

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
		
		//record2['Ub']    = this.Busqueda;
		//record2['Eq']     = this.nuevoEquipo;
		//record2['Descripcion'] = this.nuevaDescripcion;
		record2['Referencia']    = this.RN;
		record2['Criterio']     = this.nuevoCriterio;
		record2['Riesgo'] = this.nuevoRiesgo;
		//record2['Solucion'] = this.nuevaSolucion;
		//record2['Cantidad'] = this.nuevaCantidad;
		record2['No conformidad'] = this.nuevaNC;
		
		this.crudService.create_NewSNewnoconformidades(record2).then(resp => {
			//this.Busqueda    = "";
		  	//this.nuevoEquipo     = "";
			//this.nuevaDescripcion = "";
			this.RN   = "";
			this.nuevoCriterio = "";
			this.nuevoRiesgo = "";
			//this.nuevaSolucion = "";
			//this.nuevaCantidad = undefined;
			this.nuevaNC = "" ;
			  
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

