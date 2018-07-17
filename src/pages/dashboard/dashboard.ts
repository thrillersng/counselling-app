import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SessionsPage } from '../sessions/sessions';
import { SettingsPage } from '../settings/settings';
import { HelpPage } from '../help/help';
import { HomePage } from '../home/home';
import { NotificationPage } from '../notification/notification';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  goToSessions() {
    this.navCtrl.setRoot(SessionsPage);
  }
  goToHome() {
    this.navCtrl.setRoot(HomePage);
  }
  goToSettings() {
    this.navCtrl.setRoot(SettingsPage);
  }
  goToHelp() {
    this.navCtrl.setRoot(HelpPage);
  }
  goToNotification() {
    this.navCtrl.setRoot(NotificationPage);
  }

}
