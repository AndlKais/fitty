import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TamagotchiSeitansichtPage } from './tamagotchi-seitansicht';

@NgModule({
  declarations: [
    TamagotchiSeitansichtPage,
  ],
  imports: [
    IonicPageModule.forChild(TamagotchiSeitansichtPage),
  ],
})
export class TamagotchiSeitansichtPageModule {}
