import { Component, OnInit } from '@angular/core';
import { ModalController }   from '@ionic/angular';
import { AlertController }   from '@ionic/angular';
import { CrudService }       from '../../servicios/crud.service';

@Component({
	selector    : 'app-editar-no-conformidad',
	templateUrl : './editar-no-conformidad.page.html',
	styleUrls   : ['./editar-no-conformidad.page.scss'],
})

export class EditarNoConformidadPage implements OnInit {

	constructor(
	private modalController  : ModalController,
	private crudService      : CrudService,
	public  alertController  : AlertController) { }

	ngOnInit() {
  	}

	UpdateRecord(recordRow) {
		let record = {};
		
		record['Name']    = recordRow.EditName;
		record['Age']     = recordRow.EditAge;
		record['Address'] = recordRow.EditAddress;
		
		this.crudService.update_Student(recordRow.id, record).then(resp => {
			this.presentAlert("¡Bien hecho!","Modificado correctamente");
		})
		.catch(error => {
			this.presentAlert("¡Error!", "Problema al modificar: " + error);
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