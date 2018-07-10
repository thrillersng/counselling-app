import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApprovedListPage } from './approvedlist';

@NgModule({
  declarations: [
    ApprovedListPage,
  ],
  imports: [
    IonicPageModule.forChild(ApprovedListPage),
  ],
})
export class ApprovedListPageModule {}
