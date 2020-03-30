import { Injectable }       from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
	providedIn: 'root'
})

export class CrudService {

  	constructor(private firestore: AngularFirestore) { }
      //create_coleccion en firebase (variable) { return this.firestore.collection('variable_parametro').add(variable); }
	  create_Ubicacion(record1) {
    	return this.firestore.collection('Ubicacion').add(record1);
	  }
	  create_NewStudent(record) {
    	return this.firestore.collection('Students').add(record);
	  }

	create_NewUbicacion(record) {
    	return this.firestore.collection('Ubicacion').add(record);
	  }
	  
	create_NewSNoConformidadExcell(record) {
    	return this.firestore.collection('NoConformidadExcell').add(record);
  	}

	read_Students() {
		return this.firestore.collection('Students').snapshotChanges();
	}

	read_Equipos() {
		return this.firestore.collection('Equipos').snapshotChanges();
	}

	read_Ubicacion() {
		return this.firestore.collection('Ubicacion').snapshotChanges();
	}

	read_NoConformidadExcell() {
		return this.firestore.collection('NoConformidadExcell').snapshotChanges();
	}

	read_Newnoconformidades() {
		return this.firestore.collection('Newnoconformidades').snapshotChanges();
	}
	  
	update_Student(recordID, record){
		return this.firestore.doc('Students/' + recordID).update(record);
	}
	 
	delete_Student(record_id) {
		return this.firestore.doc('Students/' + record_id).delete();
	}
}