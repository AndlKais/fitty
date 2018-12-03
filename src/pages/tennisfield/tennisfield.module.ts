import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TennisfieldPage } from './tennisfield';

@NgModule({
  declarations: [
    TennisfieldPage,
  ],
  imports: [
    IonicPageModule.forChild(TennisfieldPage),
  ],
})
export class TennisfieldPageModule {}
