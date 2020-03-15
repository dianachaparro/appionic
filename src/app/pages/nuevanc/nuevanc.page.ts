import { Component, OnInit } from '@angular/core';
import { CrudService }       from '../../servicios/crud.service';

@Component({
	selector    : 'app-nuevanc',
	templateUrl : './nuevanc.page.html',
	styleUrls   : ['./nuevanc.page.scss'],
})

export class NuevancPage implements OnInit {
	noconformidad : any;

	constructor(private crudService : CrudService) { }

	ngOnInit() {
		this.crudService.read_Newnoconformidades().subscribe(data => {
			this.noconformidad = data.map(e => {
			  return {
				Equipo        : e.payload.doc.data()['Name'],
				NoConformidad : e.payload.doc.data()['Name1'],
				Area          : e.payload.doc.data()['Name2']
			  };
			})
		});
	}
}