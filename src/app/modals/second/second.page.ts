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
	//studentName, studentAge, studentAddress son los nombre que le coloque 
	// en HTML en los <ion-input type="text" name="studentName"></ion-input>
	studentName    : string;
	studentNamer    : string;
  	studentAge     : number;
	studentAddress : string;
	studentAddress1 : string;
	studentContact : number;
	studentContact1 : number;


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
		record['Address1']    = this.studentAddress1;
		record['Contact']     = this.studentContact;
		record['Contact1'] = this.studentContact1;
		record['Namer'] = this.studentNamer;
		
		this.crudService.create_NewStudent(record).then(resp => {
			this.studentName    = "";
		  	this.studentAge     = undefined;
			this.studentAddress = "";
			this.studentAddress1   = "";
			this.studentContact = undefined;
			this.studentContact1 = undefined;
			this.studentNamer = "";
			  
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