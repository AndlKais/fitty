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
  private rightEar;
  private leftEar;
  private innerleftEar;
  private innerrightEar;
  private ears;
  private nose;
  private rightEyeBall;
  private rightEye;
  private eye;
  private leftFoot;
  private rightFoot;
  private feet;
  private arm;
  private koerper;
  private paw;
  private armpaw;
  private bauch;

  private stage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TamagotchiSeitenansichtLaufenPage');

    this.stage = new createjs.Stage("demoCanvas");

    var body = new createjs.Container();

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
      .drawEllipse(260, -130, 900, 700)
      .endFill()
      .endStroke();

    this.mouth = new createjs.Shape();

    this.mouth.graphics.setStrokeStyle(10)
      .beginStroke("black")
      .beginFill("")
      .moveTo()
      .quadraticCurveTo()
      .moveTo()
      .quadraticCurveTo()
      .endStroke()
      .endFill();

    this.ears = new createjs.Container();

    this.rightEar = new createjs.Shape();

    this.rightEar.graphics.setStrokeStyle(10)
      .beginStroke("black")
      .beginFill("#936037")
      .endFill()
      .endStroke();

    this.leftEar = new createjs.Shape();

    this.leftEar.graphics.setStrokeStyle(10)
      .beginStroke("black")
      .beginFill("#936037")
      .endStroke()
      .endFill();


    this.innerrightEar.graphics

    this.outerrightEar.graphics

    this.nose = new createjs.Shape();

    this.nose.graphics.setStrokeStyle(10)
      .beginStroke("black")
      .beginFill("black")
      .drawEllipse(1500,-130, 40, 90)
      .endFill()
      .endStroke();

    this.feet = new createjs.Container();

    this.rightFoot = new createjs.Shape();

    this.rightFoot.x =910;
    this.rightFoot.y =1118;
    this.rightFoot.graphics.setStrokeStyle(10)
      .beginStroke("black")
      .beginFill("#936037")
      .moveTo(0, 0)
      .bezierCurveTo(-50, 400, 450, 400, 190, 50)
      .setStrokeStyle(15)
      .moveTo(200, 300)
      .lineTo(160, 250)
      .moveTo(230, 300)
      .lineTo(180, 235)
      .moveTo(250, 270)
      .lineTo(205, 220)
      .endStroke()
      .endFill()
      .endStroke();

    this.leftFoot = new createjs.Shape();

    this.leftFoot.x =260;
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
    this.head.addChild(this.head_circle, this.nose);

    body.addChild(this.feet,this.koerper , this.head, this.ears);
    body.x = 500;
    body.y = 500;
    this.stage.addChild(body);

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", this.stage);

  }

}
