import { Component, OnInit } from '@angular/core';
import { CrudService }       from '../../servicios/crud.service';
import * as XLSX from 'xlsx';
@Component({
	selector    : 'app-exp',
	templateUrl : './exp.page.html',
	styleUrls   : ['./exp.page.scss'],
})

export class ExpPage implements OnInit {
	users : any[];

	constructor(private crudService : CrudService) { }

	ngOnInit() {
		this.crudService.read_NoConformidadExcell().subscribe(data => {
			this.users = data.map(e => {
				return {
					Criterio    : e.payload.doc.data()['Criterio'],
					Descripcion : e.payload.doc.data()['Descripcion'],
					Referencia  : e.payload.doc.data()['Referencia'],
					Riesgo      : e.payload.doc.data()['Riesgo'],
					Ubicacion   : e.payload.doc.data()['Ubicacion'],
			  	};
			})
		});
	}

	exportToExcel() {

		const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.users);
	
		/* generate workbook and add the worksheet */
		const wb: XLSX.WorkBook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
	
		/* save to file */
		XLSX.writeFile(wb, 'Informe.xlsx');
	  }
}
