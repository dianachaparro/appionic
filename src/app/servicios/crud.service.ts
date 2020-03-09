import { Injectable }       from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
	providedIn: 'root'
})

export class CrudService {

  	constructor(private firestore: AngularFirestore) { }

  	create_NewStudent(record) {
    	return this.firestore.collection('Students').add(record);
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