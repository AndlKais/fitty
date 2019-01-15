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
  private koerper_oval;
  private white_rect1;
  private white_rect2;
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
      .drawEllipse(270,-195, 70, 40)
      .endFill()
      .endStroke();

    this.nose.rotation = 60;

    this.ears = new createjs.Container();

    this.innerleftEar = new createjs.Shape();

    this.innerleftEar.x=20;
    this.innerleftEar.y =500;
    this.innerleftEar.graphics
      .beginFill("white")
      .moveTo(-300, -220)
      .bezierCurveTo(-450, -200, -450, -250, -300, -290)
      .endStroke();
    ;

    this.innerleftEar.rotation = 50;

    this.outerleftEar = new createjs.Shape();

    this.outerleftEar.x=20;
    this.outerleftEar.y =500;
    this.outerleftEar.graphics.beginStroke("black").beginFill('#936037')
      .setStrokeStyle(10)
      .moveTo(-300, -190)
      .bezierCurveTo(-500, -200, -500, -250, -300, -320)
      .endStroke();

    this.outerleftEar.rotation = 50;

    this.innerrightEar = new createjs.Shape();

    this.innerrightEar.x=-20;
    this.innerrightEar.y =540;
    this.innerrightEar.graphics
      .beginFill("white")
      .moveTo(-300, -220)
      .bezierCurveTo(-450, -200, -450, -250, -300, -290)
      .endFill()
      .endStroke();
    ;

    this.innerrightEar.rotation = 50;

    this.outerrightEar = new createjs.Shape();

    this.outerrightEar.x=-20;
    this.outerrightEar.y =540;
    this.outerrightEar.graphics.beginStroke("black").beginFill('#936037')
      .setStrokeStyle(10)
      .moveTo(-300, -190)
      .bezierCurveTo(-500, -200, -500, -250, -300, -320)
      .endStroke();

    this.outerrightEar.rotation = 50;


    this.ears.addChild(this.outerleftEar, this.innerleftEar, this.outerrightEar, this.innerrightEar);

    this.righteye = new createjs.Container();

    this.eye = new createjs.Shape();
    this.eye.graphics.setStrokeStyle(10)
      .beginStroke('black')
      .beginFill('white')
      .moveTo(270,-175)
      .quadraticCurveTo(260, -30,170,-140)
      .endFill()
      .endStroke();

    this.eye.rotation = 60;

    this.rightEyeBall = new createjs.Shape();
    this.rightEyeBall.graphics.setStrokeStyle(10)
      .beginStroke('white')
      .beginFill('black')
      .moveTo(270,-175)
      .bezierCurveTo(260, -30)
      .endFill()
      .endStroke();

    this.righteye.addChild(this.eye,this.rightEyeBall)

    this.head.addChild(this.head_circle, this.eye, this.nose, this.mouth);

    this.koerper = new createjs.Container();

    this.koerper_oval = new createjs.Shape();

    this.koerper_oval.graphics.setStrokeStyle(10)
      .beginStroke('black')
      .beginFill('#936037')
      .drawEllipse(110,330,820 ,420)
      .endFill()
      .endStroke();

    this.arm = new createjs.Shape();
    this.arm.graphics.setStrokeStyle(10)
      .beginStroke('black')
      .beginFill('#936037')
      .moveTo(410,370)
      //.bezierCurveTo(360,150,480,150,500,470)
      .drawEllipse(410,370,90,-300)
      .endFill()
      .endStroke();

    this.arm.rotation = 15;

    this.feet = new createjs.Container();

    this.leftfoot = new createjs.Shape();
    this.leftfoot.graphics.setStrokeStyle(10)
      .beginStroke('black')
      .beginFill('#936037')
      .bezierCurveTo()
      .endFill()
      .endStroke();

    this.leftfoot.rotation = 90;

    this.rightfoot = new createjs.Shape();
    this.rightfoot.graphics.setStrokeStyle(10)
      .beginStroke('black')
      .beginFill('#936037')
      .bezierCurveTo()
      .endFill()
      .endStroke();

    this.leftfoot.rotation = 90;

    this.white_rect1 = new createjs.Shape();

    this.white_rect1.graphics.setStrokeStyle(10)
      .beginStroke('black')
      .beginFill('white')
      .drawRect(218,680,599,600)
      .endStroke()
      .endFill();

    this.white_rect2 = new createjs.Shape();

    this.white_rect2.graphics.beginFill('white')
      .drawRect(180,685,900,600)
      .endFill();



    this.feet.addChild(this.leftfoot, this.rightfoot);

    this.koerper.addChild(this.koerper_oval, this.feet);

    body.addChild(this.koerper,this.righteye,this.head, this.ears, this.arm, this.white_rect1, this.white_rect2);
    body.x = 500;
    body.y = 500;
    this.stage.addChild(body);

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", this.stage);
  }

}
