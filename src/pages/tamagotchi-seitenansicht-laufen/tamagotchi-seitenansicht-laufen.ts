import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as createjs from "createjs-module";

/**
 * Generated class for the TamagotchiSeitenansichtLaufenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tamagotchi-seitenansicht-laufen',
  templateUrl: 'tamagotchi-seitenansicht-laufen.html',
})
export class TamagotchiSeitenansichtLaufenPage {

  private head;
  private mouth;
  private head_circle;
  private outerleftEar;
  private outerrightEar;
  private innerleftEar;
  private innerrightEar;
  private ears;
  private nose;
  private EyeBall;
  private restEyeBallAusschnitt;
  private eye;
  private restEyeAusschnitt;
  private leftFoot;
  private rightFoot;
  private feet;
  private arm;
  private koerper;
  private paw;
  private bauch;

  private stage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TamagotchiSeitenansichtLaufenPage');

    this.stage = new createjs.Stage("demoCanvas");

    let body = new createjs.Container();

    this.koerper = new createjs.Container();

    this.head = new createjs.Container();

    this.bauch = new createjs.Shape();

    this.bauch.graphics.setStrokeStyle(10)
      .beginStroke("black")
      .beginFill("#936037")
      .drawRoundRectComplex(330, 418, 750, 800, 20, 20, 20, 20)
      .endFill()
      .endStroke();


    this.head_circle = new createjs.Shape();

    this.head_circle.graphics.setStrokeStyle(10)
      .beginStroke("black")
      .beginFill("#936037")
      .drawEllipse(260, -190, 900, 800)
      .endFill()
      .endStroke();

    this.mouth = new createjs.Shape();

    this.mouth.graphics.setStrokeStyle(10)
      .beginStroke("black")
      .beginFill("#701228")
      .moveTo(1150,290)
      .bezierCurveTo(1050, 300, 965, 250, 930, 240)
      .bezierCurveTo(1095, 500, 1075, 420, 1080, 450)
      .endStroke()
      .endFill();

    this.eye = new createjs.Shape();

    this.eye.graphics.setStrokeStyle(10)
      .beginStroke("black")
      .beginFill("black")
      .moveTo(1150,120)
      .quadraticCurveTo(900, 130, 930, -130)
      .bezierCurveTo(1110, -30, 1050, -40, 1150,120)
      .endFill()
      .endStroke();


    /*this.EyeBall = new createjs.Shape();

    this.EyeBall.graphics
      .beginFill("white")
      .moveTo(1050, 140)
      .drawEllipse(770, 550, 70, 200)
      .endFill();

    this.EyeBall.rotation=-40;*/

    this.EyeBall = new createjs.Shape();

   this.EyeBall.graphics
     .beginFill("white")
     .moveTo(1145, 127)
     .bezierCurveTo(850, 100, 990, 0, 1076, -30)
     .endFill();

   this.restEyeBallAusschnitt = new createjs.Shape();

   this.restEyeBallAusschnitt.graphics
     .beginFill("white")
     .moveTo()
     .bezierCurveTo()
     .endFill();

    this.ears = new createjs.Container();

    this.innerleftEar = new createjs.Shape();

    this.innerleftEar.x = 100;
    this.innerleftEar.y = -60;

    /*this.innerleftEar.graphics
      .beginFill("white")
      .moveTo(420, -95)
      .bezierCurveTo(300,-300,560,-325,630,-130)
      .endFill();*/

    /*this.restEyeAusschnitt = new createjs.Shape();

    let coords2 = body.localToLocal(660, -190, this.restEyeAusschnitt);

    this.restEyeAusschnitt.graphics.setStrokeStyle(25)
      .beginStroke("#000000")
      .beginFill("#000000")
      .arc(coords2.x, coords2.y, 500, (Math.PI / 90) * 10, (Math.PI / 180) * 39, true)
      .endFill()
      .endStroke();*/

    this.outerleftEar = new createjs.Shape();

    this.outerleftEar.x = 100;
    this.outerleftEar.y = -60;

    this.outerleftEar.graphics.setStrokeStyle(10)
      .beginStroke("black")
      .beginFill("#936037")
      .moveTo(400, -80)
      .bezierCurveTo(250,-360,540,-415,650,-130)
      .endFill()
      .endStroke();

    this.innerrightEar = new createjs.Shape();

    this.innerrightEar.x = 220;
    this.innerrightEar.y = -80;

    this.innerrightEar.graphics
      .beginFill("white")
      .moveTo(430,-90)
      .bezierCurveTo(340,-260,560,-285,620,-90)
      .endFill();

    this.outerrightEar = new createjs.Shape();

    this.outerrightEar.x = 220;
    this.outerrightEar.y = -80;

    this.outerrightEar.graphics.setStrokeStyle(10)
      .beginStroke("black")
      .beginFill("#936037")
      .moveTo(400, -80)
      .bezierCurveTo(250,-360,540,-415,650,-80)
      .endFill()
      .endStroke();

    this.nose = new createjs.Shape();

    this.nose.graphics.setStrokeStyle(10)
      .beginStroke("black")
      .beginFill("black")
      .drawEllipse(1125,120, 80, 170)
      .endFill()
      .endStroke();

    this.arm = new createjs.Container();

    this.paw = new createjs.Shape();

    this.paw.x = 280;
    this.paw.y = 375;
    // this.paw.scaleX = 2;
    // this.paw.scaleY = 2;

    this.paw.graphics.setStrokeStyle(10)
      .beginStroke("black")
      .beginFill("#936037")
      .moveTo(600, 400)
      .bezierCurveTo(1050, 360, 1025, 650, 600, 675)
      .setStrokeStyle(15)
      .moveTo(885, 440)
      .lineTo(800, 440)
      .moveTo(920,480)
      .lineTo(810, 480)
      .moveTo(920,530)
      .lineTo(820, 530)
      .endStroke()
      .endFill();

    this.paw.rotation = -15;

    this.feet = new createjs.Container();

    this.rightFoot = new createjs.Shape();

    this.rightFoot.x =880;
    this.rightFoot.y =1090;
    this.rightFoot.graphics.setStrokeStyle(10)
      .beginStroke("black")
      .beginFill("#936037")
      .moveTo(0, 0)
      .bezierCurveTo(-50, 350, 450, 350, 190, 50)
      .setStrokeStyle(15)
      .moveTo(200, 250)
      .lineTo(160, 200)
      .moveTo(230, 250)
      .lineTo(180, 185)
      .moveTo(250, 220)
      .lineTo(205, 170)
      .endStroke()
      .endFill()
      .endStroke();

    this.leftFoot = new createjs.Shape();

    this.leftFoot.x =360;
    this.leftFoot.y =1118;
    this.leftFoot.graphics.setStrokeStyle(10)
      .beginStroke("black")
      .beginFill("#936037")
      .moveTo(0, 0)
      .bezierCurveTo(-250, 200, 50, 400, 150, 100)
      .setStrokeStyle(15)
      .moveTo(-90, 200)
      .lineTo(-45, 145)
      .moveTo(-70, 220)
      .lineTo(-20, 165)
      .moveTo(-45, 240)
      .lineTo(5, 180)
      .endStroke();

    this.koerper.addChild(this.bauch);
    this.feet.addChild(this.rightFoot, this.leftFoot);
    this.arm.addChild(this.paw);
    this.head.addChild(this.head_circle, this.nose, this.eye, this.EyeBall, this.restEyeAusschnitt, this.mouth);
    this.ears.addChild(this.outerleftEar, this.innerleftEar, this.outerrightEar, this.innerrightEar);

    body.addChild(this.feet,this.koerper,this.arm, this.head, this.ears);
    body.x = 500;
    body.y = 500;
    this.stage.addChild(body);

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", this.stage);

  }

}
