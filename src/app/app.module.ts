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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
