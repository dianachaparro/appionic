import { Component, OnInit } from '@angular/core';
import { CrudService }       from './../servicios/crud.service';
import { ModalController }   from '@ionic/angular';
import { SecondPage }        from '../modals/second/second.page';

@Component({
	selector    : 'app-home',
  	templateUrl : 'home.page.html',
  	styleUrls   : ['home.page.scss'],
})

export class HomePage implements OnInit {
	students : any;
	  
	constructor(
	private crudService      : CrudService, 
	private modalController  : ModalController) {}

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

	RemoveRecord(rowID) {
		this.crudService.delete_Student(rowID);
	}
	 
	UpdateRecord(recordRow) {
		let record = {};
		
		record['Name']    = recordRow.EditName;
		record['Age']     = recordRow.EditAge;
		record['Address'] = recordRow.EditAddress;
		
		this.crudService.update_Student(recordRow.id, record);

		recordRow.isEdit = false;
	}

	async openModal() {
		const modal = await this.modalController.create({
			component : SecondPage
		});

		return await modal.present();
	}
}
