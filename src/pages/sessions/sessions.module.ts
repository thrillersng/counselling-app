import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SessionsPage } from './sessions';

@NgModule({
  declarations: [
    SessionsPage,
  ],
  imports: [
    IonicPageModule.forChild(SessionsPage),
  ],
})
export class SessionsPageModule {}
