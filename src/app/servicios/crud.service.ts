import { Injectable }       from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
	providedIn: 'root'
})

export class CrudService {

  constructor(private firestore: AngularFirestore) { }

	read_Students() {
		return this.firestore.collection('Students').snapshotChanges();
  	}
}