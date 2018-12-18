import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as createjs from "createjs-module";

/**
 * Generated class for the TamagotchiSeitansichtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tamagotchi-seitansicht',
  templateUrl: 'tamagotchi-seitansicht.html',
})
export class TamagotchiSeitansichtPage {

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
  private righteye;
  private eye;
  private leftfoot;
  private rightfoot;
  private feet;
  private arm;
  private koerper;
  coords;

  private stage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TamagotchiSeitansichtPage');

    this.stage = new createjs.Stage("demoCanvas");

    var body = new createjs.Container();

    this.head = new createjs.Container();

    this.head_circle = new createjs.Shape();
    this.head_circle.graphics.setStrokeStyle(10)
      .beginStroke("#000000")
      .beginFill('#936037')
      .drawEllipse(0, 0, 400, 400)
      .endFill()
      .endStroke();

    this.head_circle.rotation = 20;

    this.nose = new createjs.Shape();
    this.nose.graphics.setStrokeStyle(10)
      .beginStroke("#000000")
      .beginFill("#000000")
      .drawEllipse(0,0, 70, 40)
      .endFill()
      .endStroke();

    this.ears = new createjs.Container();

    this.innerleftEar = new createjs.Shape();
    this.innerleftEar.graphics.setStrokeStyle(10)
      .beginStroke('white')
      .beginFill('#ffffff')
      .arc(0, 0, 150, 0, ((Math.PI * 2) / 360) * 180, true)
      .endFill()
      .endStroke();

    this.innerrightEar = new createjs.Shape();
    this.innerrightEar.graphics.setStrokeStyle(10)
      .beginStroke('white')
      .beginFill('#ffffff')
      .arc(0, 0, 150, 0, ((Math.PI * 2) / 360) * 180, true)
      .endFill()
      .endStroke();

    this.outerleftEar = new createjs.Shape();
    this.outerleftEar.graphics.setStrokeStyle(10)
      .beginStroke('white')
      .beginFill('#ffffff')
      .arc(0, 0, 150, 0, ((Math.PI * 2) / 360) * 180, true)
      .endFill()
      .endStroke();

    this.outerrightEar = new createjs.Shape();
    this.outerrightEar.graphics.setStrokeStyle(10)
      .beginStroke('white')
      .beginFill('#ffffff')
      .arc(0, 0, 150, 0, ((Math.PI * 2) / 360) * 180, true)
      .endFill()
      .endStroke();

    this.righteye = new createjs.Container();

    this.eye = new createjs.Shape();
    this.eye.graphics.setStrokeStyle(10)
      .beginStroke('white')
      .beginFill('#ffffff')
      .quadraticCurveTo()
      .endFill()
      .endStroke();

    this.rightEyeBall = new createjs.Shape();
    this.rightEyeBall.graphics.setStrokeStyle(10)
      .beginStroke('white')
      .beginFill('#ffffff')
      .drawEllipse()
      .endFill()
      .endStroke();

    this.righteye.addChild(this.eye,this.rightEyeBall)

    this.leftEar = new createjs.Shape();
    this.leftEar.graphics.setStrokeStyle(10)
      .beginStroke('black')
      .beginFill('#936037')
      .drawEllipse()
      .endFill()
      .endStroke();

    this.rightEar = new createjs.Shape();
    this.rightEar.graphics.setStrokeStyle(10)
      .beginStroke('black')
      .beginFill('#936037')
      .drawEllipse()
      .endFill()
      .endStroke();

    this.ears.addChild(this.leftEar, this.rightEar, this.innerrightEar, this.innerleftEar);

    this.head.addChild(this.head_circle, this.eye, this.nose, this.mouth);

    this.koerper = new createjs.Container();

    this.koerper_oval
    this.koerper.graphics.setStrokeStyle(10)
      .beginStroke('black')
      .beginFill('#936037')
      .drawEllipse()
      .endFill()
      .endStroke();

    this.arm = new createjs.Shape();
    this.arm.graphics.setStrokeStyle(10)
      .beginStroke('black')
      .beginFill('#936037')
      .bezierCurveTo()
      .endFill()
      .endStroke();

    this.feet = new createjs.Container();

    this.leftfoot = new createjs.Shape();
    this.leftfoot.graphics.setStrokeStyle(10)
      .beginStroke('black')
      .beginFill('#936037')
      .bezierCurveTo()
      .endFill()
      .endStroke();

    this.rightfoot = new createjs.Shape();
    this.rightfoot.graphics.setStrokeStyle(10)
      .beginStroke('black')
      .beginFill('#936037')
      .bezierCurveTo()
      .endFill()
      .endStroke();

    this.feet.addChild(this.leftfoot, this.rightfoot)

    body.addChild(this.head, this.ears, this.feet, this.arm);
    body.x = 500;
    body.y = 500;
    this.stage.addChild(body);

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", this.stage);
  }

}
