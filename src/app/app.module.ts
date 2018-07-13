import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//import { Storage } from '@ionic-storage'; 

import { MyApp } from './app.component';
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
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCQw5OF2J1yjveLPb6S--ivUbNY2MrpJrc",
  authDomain: "counselling-app-b28a2.firebaseapp.com",
  databaseURL: "https://counselling-app-b28a2.firebaseio.com",
  projectId: "counselling-app-b28a2",
  storageBucket: "counselling-app-b28a2.appspot.com",
  messagingSenderId: "536705275771"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    CounsellorPage,
    ListPage,
    SignUpPage,
    IntroPage,
    LogInPage,  
    SessionsPage,
    AppointmentsPage,
    ConfirmPage,
    SinglePage,
    ApprovedListPage,
    DiaryPage,
    EntryPage,
    IntroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    CounsellorPage,
    ListPage,
    SignUpPage,
    LogInPage,
    IntroPage,
    SessionsPage,
    AppointmentsPage,
    ConfirmPage,
    SinglePage,
    ApprovedListPage,
    DiaryPage,
    EntryPage,
    IntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
