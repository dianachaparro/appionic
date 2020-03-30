import { Component, OnInit } from '@angular/core';
import { CrudService }       from '../../servicios/crud.service';
import * as XLSX from 'xlsx';
import { Camera } from '@ionic-native/camera/ngx';
import { AlertController }   from '@ionic/angular';
@Component({
	selector    : 'app-exp',
	templateUrl : './exp.page.html',
	styleUrls   : ['./exp.page.scss'],
})

export class ExpPage implements OnInit {
	users : any[];
	foto: any;

	constructor(private crudService : CrudService, private camera : Camera,
		public  alertController  : AlertController) { }

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
	capturarFoto(){
		this.camera.getPicture({
		  quality: 100,
		  destinationType:this.camera.DestinationType.DATA_URL,
		  encodingType: this.camera.EncodingType.JPEG,
		  mediaType: this.camera.MediaType.PICTURE,
		  allowEdit:false,
		  saveToPhotoAlbum: true,
		  sourceType: this.camera.PictureSourceType.CAMERA
		}).then(ImageData =>{
		  this.foto="data:image/jpeg;base64," + ImageData;
		  
		}
		)
		
	  }
// impresión a excel 
	exportToExcel() {

		const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.users);
	
		/* generate workbook and add the worksheet */
		const wb: XLSX.WorkBook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
	
		/* save to file */
		XLSX.writeFile(wb, 'Informe.xlsx');
		

		
	  }
	  CreateRecord() {
		const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.users);
	
		/* generate workbook and add the worksheet */
		const wb: XLSX.WorkBook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
	
		/* save to file */
		XLSX.writeFile(wb, 'Informe.xlsx');

		
		
			  
	  }
	}
	  


