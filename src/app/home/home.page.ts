import { Component, OnInit }       from '@angular/core';
import { CrudService }             from './../servicios/crud.service';
import { ModalController }         from '@ionic/angular';
import { SecondPage }              from '../modals/second/second.page';
import { EditarNoConformidadPage } from '../modals/editar-no-conformidad/editar-no-conformidad.page';
import { AlertController }         from '@ionic/angular';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { RegistroPage } from '../modals/registro/registro.page';

@Component({
	selector    : 'app-home',
  	templateUrl : 'home.page.html',
  	styleUrls   : ['home.page.scss'],
})

export class HomePage implements OnInit {
	students : any;
	public isAdmin = false;

	constructor(
	private crudService      : CrudService, 
	private modalController  : ModalController,
	public  alertController  : AlertController) {}

	ngOnInit() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				console.log(user)
			  firebase
				.firestore()
				.doc(`/Usuarios/${user.uid}`)
				.get()
				.then(userProfileSnapshot => {
				  this.isAdmin = userProfileSnapshot.data().IsAdmin;

				  console.log(this.isAdmin);
				});
			}
		  });

		this.crudService.read_Students().subscribe(data => {
			this.students = data.map(e => {
				return {
					id      : e.payload.doc.id,
					isEdit  : false,
					Name    : e.payload.doc.data()['Name'],
					Age     : e.payload.doc.data()['Age'],
					Address : e.payload.doc.data()['Address']
			  	};
			})
		});
	}

	RemoveRecord(rowID) {
		this.crudService.delete_Student(rowID).then(resp => {

			this.presentAlert("¡Bien hecho!","Eliminado correctamente");
		})
		.catch(error => {
			this.presentAlert("¡Error!", "Problema al eliminar: " + error);
		});
	}
	
	// Creación de nuevo expediente

	async openModal() {
		const modal = await this.modalController.create({
			component : SecondPage
		});

		return await modal.present();
	}

	// Registro de nuevos usuarios

	/*async openRegistro() {
		const modal = await this.modalController.create({
			component : RegistroPage
		});

		return await modal.present();
	}*/

	async openModalWithData(record) {
    	record.EditName    = record.Name;
    	record.EditAge     = record.Age;
    	record.EditAddress = record.Address;

		const modal = await this.modalController.create({
			component : EditarNoConformidadPage,
			componentProps : {
				conformidadSeleccionada : record
			}
		});

		modal.onWillDismiss();

		return await modal.present();
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