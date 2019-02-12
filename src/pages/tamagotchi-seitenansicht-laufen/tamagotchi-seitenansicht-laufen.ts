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

    this.bauch.graphics.setStrokeStyle()
      .beginStroke()
      .beginFill()
      .moveTo(0,0)
      .drawRoundRectComplex(330, 1118, 850, 900, 0, 0, 20, 20)
      .endFill()
      .endStroke()


    this.head_circle = new createjs.Shape();

    this.head_circle.graphics.setStrokeStyle(10)
      .beginStroke("black")
      .beginFill("#936037")
      .drawEllipse(0, 0, 400, 400)
      .endFill()
      .endStroke();


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

    this.feet = new createjs.Container();

    this.rightFoot.graphics.setStrokeStyle(10)
      .beginStroke("black")
      .beginFill("#936037")
      .moveTo()
      .bezierCurveTo()
      .endFill()
      .endStroke();

    this.leftFoot.graphics.setStrokeStyle(10)
      .beginStroke("black")
      .beginFill("#936037")
      .moveTo()
      .bezierCurveTo()
      .endFill()
      .endStroke();

    body.addChild(this.koerper, this.feet, this.head, this.ears);
    body.x = 500;
    body.y = 500;
    this.stage.addChild(body);

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", this.stage);

  }

}
