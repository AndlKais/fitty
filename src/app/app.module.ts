import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TamagotchiSpielfigurPage } from '../pages/tamagotchi-spielfigur/tamagotchi-spielfigur';
import {TamagotchiSeitansichtPage} from "../pages/tamagotchi-seitansicht/tamagotchi-seitansicht";
import {TamagotchiSeitenansichtLaufenPage} from "../pages/tamagotchi-seitenansicht-laufen/tamagotchi-seitenansicht-laufen";
import { AnimationMitAufrufebuttonPage } from '../pages/animation-mit-aufrufebutton/animation-mit-aufrufebutton';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TennisfieldPage} from "../pages/tennisfield/tennisfield";


//import {TennisballPage} from "../pages/tennisball/tennisball";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TamagotchiSpielfigurPage,
    TennisfieldPage,
    TamagotchiSeitansichtPage,
    TamagotchiSeitenansichtLaufenPage,
    AnimationMitAufrufebuttonPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TamagotchiSpielfigurPage,
    TennisfieldPage,
    TamagotchiSeitansichtPage,
    TamagotchiSeitenansichtLaufenPage,
    AnimationMitAufrufebuttonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
