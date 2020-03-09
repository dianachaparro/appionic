import { Component, OnInit } from '@angular/core';
import { ModalController }   from '@ionic/angular';
import { AlertController }   from '@ionic/angular';
import { CrudService }       from './../../servicios/crud.service';

@Component({
	selector    : 'app-second',
	templateUrl : './second.page.html',
	styleUrls   : ['./second.page.scss'],
})

export class SecondPage implements OnInit {

	studentName    : string;
  	studentAge     : number;
  	studentAddress : string;

	constructor(
	private modalController  : ModalController, 
	private crudService      : CrudService, 
	public  alertController  : AlertController) { }

	ngOnInit() {
  	}

	CreateRecord() {
		let record = {};
		
		record['Name']    = this.studentName;
		record['Age']     = this.studentAge;
		record['Address'] = this.studentAddress;
		
		this.crudService.create_NewStudent(record).then(resp => {
			this.studentName    = "";
		  	this.studentAge     = undefined;
			this.studentAddress = "";
			  
			this.presentAlert("¡Bien hecho!","Guardado correctamente");
		})
		.catch(error => {
			this.presentAlert("¡Error!", "Problema al guardar: " + error);
		});
	}

	async closeModal() {
		await this.modalController.dismiss();
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