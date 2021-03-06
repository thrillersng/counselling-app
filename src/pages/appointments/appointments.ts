import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AppointmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html',
})
export class AppointmentsPage {

 


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  data = { nickname:"" };

  enterNickname() {
    this.navCtrl.setRoot(AppointmentsPage, {
      nickname: this.data.nickname
    });
  }
  joinRoom(key) {
    this.navCtrl.setRoot(AppointmentsPage, {
      key:key,
      nickname:this.navParams.get("nickname")
    });
  }
  
  appointments() {
    this.navCtrl.push(AppointmentsPage);
  }

}


