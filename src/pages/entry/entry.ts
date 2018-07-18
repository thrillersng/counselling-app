import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppointmentsPage } from '../appointments/appointments';
import { SinglePage } from '../single/single';
import * as firebase from 'Firebase';

@Component({
  selector: 'page-entry',
  templateUrl: 'entry.html',
})
export class EntryPage {

  appointments = [];
ref = firebase.database().ref('chatrooms/');

single() {
  this.navCtrl.push(SinglePage);
}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ref.on('value', resp => {
      this.appointments = [];
      this.appointments = snapshotToArray(resp);
    });
    
  }
}
  export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};
  


