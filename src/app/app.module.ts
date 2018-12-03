import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Prototyp1Page } from '../pages/prototyp1/prototyp1';
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
    Prototyp1Page,
    TennisfieldPage,
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
    Prototyp1Page,
    TennisfieldPage,
    AnimationMitAufrufebuttonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
