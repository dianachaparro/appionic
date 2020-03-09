import { Component, OnInit } from '@angular/core';
import { CrudService }       from './../servicios/crud.service';

// Modal
import { ModalController } from '@ionic/angular';
import { SecondPage }      from '../modals/second/second.page';

@Component({
	selector    : 'app-home',
  	templateUrl : 'home.page.html',
  	styleUrls   : ['home.page.scss'],
})

export class HomePage implements OnInit {
	students : any;
	  
	constructor(private crudService: CrudService, private modalController : ModalController) {}

	ngOnInit() {
		this.crudService.read_Students().subscribe(data => {
			this.students = data.map(e => {
				return {
					id      : e.payload.doc.id,
					isEdit  : false,
					Name    : e.payload.doc.data()['Name'],
					Age     : e.payload.doc.data()['Age'],
					Address : e.payload.doc.data()['Address'],
			  	};
			})
		});
	}

	async openModal() {
		const modal = await this.modalController.create({
			component : SecondPage
		});

		return await modal.present();
	}
}
