import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogInPage } from './login';

@NgModule({
  declarations: [
    LogInPage,
  ],
  imports: [
    IonicPageModule.forChild(LogInPage),
  ],
})
export class LogInPageModule {}
