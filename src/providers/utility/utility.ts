//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

/*
  Generated class for the UtilityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilityProvider {

  constructor(public db: AngularFirestore) {
    console.log('Hello UtilityProvider Provider');
  }

  saveDoc(col, doc, item) {
  	return this.db.collection(col).doc(doc).set(item);
  }

  updateDoc(col, doc, item) {
  	return this.db.collection(col).doc(doc).update(item);
  }

}
