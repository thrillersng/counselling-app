import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { CounsellorPage } from '../pages/counsellor/counsellor';
import { ListPage } from '../pages/list/list';
import { SignUpPage } from '../pages/signup/signup';
import { LogInPage } from '../pages/login/login';
import { IntroPage } from '../pages/intro/intro';
import { SessionsPage } from '../pages/sessions/sessions';
import { AppointmentsPage } from '../pages/appointments/appointments';
import { ConfirmPage } from '../pages/confirm/confirm';
import { SinglePage } from '../pages/single/single';
import { ApprovedListPage } from '../pages/approvedlist/approvedlist';
import { DiaryPage } from '../pages/diary/diary';
import { EntryPage } from '../pages/entry/entry';
import { HelpPage } from '../pages/help/help';
import { SettingsPage } from '../pages/settings/settings';
import { NotificationPage } from '../pages/notification/notification'; 

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = IntroPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Dashboard', component: DashboardPage },
      { title: 'Counsellor', component: CounsellorPage },
      { title: 'List', component: ListPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Help', component: HelpPage },
      { title: 'Notification', component: NotificationPage },
      { title: 'SignUp', component: SignUpPage },
      { title: 'LogIn', component: LogInPage },
      { title: 'Sessions', component: SessionsPage },
      { title: 'Appointments', component: AppointmentsPage },
      { title: 'Confirm', component: ConfirmPage },
      { title: 'Single', component: SinglePage },
      { title: 'ApprovedList', component: ApprovedListPage },
      { title: 'Diary', component: DiaryPage },
      { title: 'Entry', component: EntryPage },
      { title: 'Intro', component: IntroPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
