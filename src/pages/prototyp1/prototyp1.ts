import { Component } from '@angular/core';
import * as createjs from 'createjs-module';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import EaselJS = createjs.EaselJS;

/**
 * Generated class for the Prototyp1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prototyp1',
  templateUrl: 'prototyp1.html',
})
export class Prototyp1Page {
  /*private rightEyePupil;
  private leftEyePupil;
  private leftEye;
  private rightEye;
  private stage;
  private face;
  private leftEyeBall;
  private rightEyeBall;
  private rightEyeBrow;
  private eyes;
  private leftEyeBrow;
  private eyeBrows;
*/

  private corpus;
  private pawright;
  private pawleft;
  private paws;
  private tennisRacket;
  private armsAndTR;
  private outerleftEar;
  private outerrightEar;
  private innerleftEar;
  private innerrightEar;
  private ears;
  private nose;
  private leftEye;
  private rightEye;
  private leftEyeBall;
  private rightEyeBall;
  private eyes;
  private restleftEyeAusschnitt;
  private restrightEyeAusschnitt;
  private tennisschlaeger;
  private schlagflaeche;
  private schlaegergriff;
  coords;

  private stage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  /*openInfo(){
    this.navCtrl.push(InfoboxPage);
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad Prototyp1Page');
    //createjs.MotionGuidePlugin.install();

    //var w = window.innerWidth-48;
    //var h = window.innerHeight-48;

    this.stage = new createjs.Stage("demoCanvas");

    //var scaleX = w / 2250;
    //var scaleY = h / 4000;

    var body = new createjs.Container();

    this.corpus = new createjs.Shape();
    this.corpus.x = this.corpus.y = 500;
    this.corpus.graphics.setStrokeStyle(4)
      .beginStroke("#000000")
      .beginFill('#936037')
      .drawCircle(0,0,1000)
      .endFill()
      .endStroke();

    this.ears = new createjs.Container();
    this.outerleftEar = new createjs.Shape();

    this.outerleftEar.graphics.setStrokeStyle(25)
      .beginStroke('#000000')
      .beginFill('#936037')
      .arc(0,0, 250, 0, ((Math.PI*2)/360)*180, true)
      .endFill()
      .endStroke();

    this.innerleftEar = new createjs.Shape();

    this.innerleftEar.graphics
      .beginStroke('white')
      .beginFill('#ffffff')
      .arc(0,0, 150, 0, ((Math.PI*2)/360)*180, true)
      .endFill()
      .endStroke();

    this.outerrightEar = new createjs.Shape();

    this.outerrightEar.graphics.setStrokeStyle(25)
      .beginStroke('#000000')
      .beginFill('#936037')
      .arc(0,0, 250, 0, ((Math.PI*2)/360)*180, true)
      .endFill()
      .endStroke();

    this.innerrightEar = new createjs.Shape();

    this.innerrightEar.graphics
      .beginStroke('white')
      .beginFill('#ffffff')
      .arc(0,0, 150, 0, ((Math.PI*2)/360)*180, true)
      .endFill()
      .endStroke();

    this.outerleftEar.scaleX = 0.5;
    this.outerrightEar.scaleX = 0.5;
    this.innerleftEar.scaleX = 0.5;
    this.innerrightEar.scaleX = 0.5;
    this.outerrightEar.x = 650;
    this.innerrightEar.x = 650;

    this.ears.addChild(this.outerrightEar, this.outerleftEar, this.innerrightEar, this.innerleftEar);

    console.log("test", this.corpus.localToLocal(0,0,this.ears ), this.ears.x, this.ears.y);
    this.ears.x += this.corpus.localToLocal(0,0,this.ears ).x-(650/2);
    this.ears.y += this.corpus.localToLocal(0,0,this.ears ).y-100;


    this.nose = new createjs.Shape();

    this.nose.graphics.setStrokeStyle()
      .beginStroke('#000000')
      .beginFill('#000000')
      .drawEllipse(0,0,250,150)
      .endFill()
      .endStroke();

    this.nose.x = this.corpus.localToLocal(0,1000,this.nose).x - 250/2;
    this.nose.y = this.corpus.localToLocal(0,1000,this.nose).y - 150/2 ;

    console.log(this.nose.x);
    console.log(this.nose.y);

    this.eyes = new createjs.Container();
    this.leftEye = new createjs.Shape();

    this.leftEye.graphics.setStrokeStyle(25)
      .beginStroke('#000000')
      .beginFill('#000000')
      .moveTo(this.nose.x-650, this.nose.y-290)
      .quadraticCurveTo(250,800,375,1490)
      .endFill()
      .endStroke();

    this.restleftEyeAusschnitt = new createjs.Shape();

    var coords = this.corpus.localToLocal(0,0,this.restleftEyeAusschnitt);

    this.restleftEyeAusschnitt.graphics.setStrokeStyle(25)
      .beginStroke()
      .beginFill('#000000')
      .arc(coords.x, coords.y, 1000, (Math.PI/180)*141, (Math.PI/180)*95, true)
      .endFill()
      .endStroke();

    console.log((Math.PI/180)*141);

    this.restrightEyeAusschnitt = new createjs.Shape();

    var coords2 = this.corpus.localToLocal(0,0,this.restrightEyeAusschnitt);

    this.restrightEyeAusschnitt.graphics.setStrokeStyle(25)
      .beginStroke()
      .beginFill("#000000")
      .arc(coords2.x, coords2.y, 1000, (Math.PI/180)*85, (Math.PI/180)*39, true)
      .endFill()
      .endStroke();

    this.rightEye = new createjs.Shape();

    this.rightEye.graphics.setStrokeStyle(25)
      .beginStroke('#000000')
      .beginFill('#000000')
      .moveTo(this.nose.x+900, this.nose.y-290)
      .quadraticCurveTo(750,800,625,1490)
      .endFill()
      .endStroke();

    this.rightEyeBall = new createjs.Shape();
    this.rightEyeBall.graphics.setStrokeStyle(25)
      .beginStroke('#ffffff')
      .beginFill('#ffffff')
      .moveTo(this.nose.x+900, this.nose.y-290)
      .drawEllipse(this.nose.x+370, this.nose.y - 150, 130, 155)
      .endFill()
      .endStroke();
    this.leftEyeBall = new createjs.Shape();
    this.leftEyeBall.graphics.setStrokeStyle(25)
      .beginStroke('#ffffff')
      .beginFill('#ffffff')
      .moveTo(this.nose.x-350, this.nose.y-90)
      .drawEllipse(this.nose.x-260, this.nose.y - 150, 130, 155)
      .endFill()
      .endStroke();

    this.eyes.addChild(this.rightEye, this.leftEye, this.restleftEyeAusschnitt, this.restrightEyeAusschnitt,  this.leftEyeBall, this.rightEyeBall);

    this.paws = new createjs.Container();
    this.pawleft = new createjs.Shape();

    this.pawleft.graphics.beginStroke("black")
      .beginFill('#936037')
      .setStrokeStyle(20).moveTo(450,1500)
      .bezierCurveTo(250,1800,600,2000,800,1500)
      .setStrokeStyle(15)
      .moveTo(450, 1770)
      .lineTo(490,1700)
      .moveTo(470, 1780)
      .lineTo(510,1710)
      .moveTo(490, 1790)
      .lineTo(530,1720)
      .endStroke();

    this.pawleft.rotation = 30;

    this.pawleft.x=120;
    this.pawleft.y=-360;

    this.pawright = new createjs.Shape();
    this.pawright.graphics.beginStroke("black")/*
      .beginFill('#936037')
      .setStrokeStyle(20).moveTo(800,1500)
      .bezierCurveTo(850,1800,600,2000,450,1500)
      .setStrokeStyle(15)
      .moveTo(650, 1770)
      .lineTo(690,1700)
      .moveTo(670, 1780)
      .lineTo(610,1710)
      .moveTo(690, 1790)
      .lineTo(630,1720)
      .endStroke();*/
      .beginFill('#936037')
      .setStrokeStyle(20).moveTo(450,1500)
      .bezierCurveTo(250,1800,600,2000,800,1500)
      .setStrokeStyle(15)
      .moveTo(450, 1770)
      .lineTo(490,1700)
      .moveTo(470, 1780)
      .lineTo(510,1710)
      .moveTo(490, 1790)
      .lineTo(530,1720)
      .endStroke();

      this.pawright.scaleX = -1;

    this.pawright.rotation = -30;

    this.pawright.x=860;
    this.pawright.y=-360;
      /*.beginFill('#936037')
      .setStrokeStyle(20).moveTo(1400,1450)
      .bezierCurveTo(1150,2000,1750,2200,1550,1500)
      .setStrokeStyle(15)
      .moveTo(1450, 1945)
      .lineTo(1440,1860)
      .moveTo(1480, 1955)
      .lineTo(1470,1850)
      .moveTo(1510, 1955)
      .lineTo(1500,1845)
      .endStroke();*/

    /*this.pawright.x=600;
    this.pawright.y=20;*/

    this.paws.addChild(this.pawleft, this.pawright);


    this.tennisschlaeger = new createjs.Container();

    this.schlagflaeche = new createjs.Shape();
    this.schlagflaeche.graphics.beginStroke()
      .beginFill()
      .setStrokeStyle('#ff0000')
      .drawEllipse()
      .endStroke()
      .endFill();

    this.schlaegergriff = new createjs.Shape();
    this.schlaegergriff.graphics.beginStroke()
      .beginFill()
      .setStrokeStyle()
      .drawRoundRectComplex(360, -60, 150,600, 20, 20,0,0)
      .endStroke()
      .endFill();


    this.tennisschlaeger.addChild(this.schlagflaeche, this.schlaegergriff);

    /*this.leftArm = new createjs.Shape();

    this.leftArm.graphics.setStrokeStyle(4)
      .beginStroke("#000000")
      .beginFill("wheat")
      .drawCircle(0,0,150)
      .endFill()
      .endStroke();

    this.rightArm = new createjs.Shape();

    this.rightArm.graphics.setStrokeStyle(4)
      .beginStroke("#000000")
      .beginFill("wheat")
      .drawCircle(0,0,150)
      .endFill()
      .endStroke();

    this.rightArm.x = 50;
    this.rightArm.y = 150;

    //this.leftArm.y += this.corpus.y + 50;
    //this.rightArm.y += this.corpus.y + 50;

    /**this.tennisRacket = new createjs.Shape();
    this.tennisRacket.graphics.setStrokeStyle(4)
      .beginStroke("black")
      .beginFill("white")
      .drawEllipse(0,0,700, 70);
    this.tennisRacket.regY = 70/2;
    this.tennisRacket.rotation = 180;
    this.tennisRacket.regY = 0;
    this.tennisRacket.y = this.tennisRacket.regY + this.rightArm.y;

    this.armsAndTR = new createjs.Container();
    this.armsAndTR.y = this.corpus.y;
    this.armsAndTR.addChild(this.rightArm, this.tennisRacket, this.leftArm);
  */

    body.addChild(this.paws, this.corpus,this.ears, this.nose, this.eyes, this.tennisschlaeger);
    body.x = 500;
    body.y = 500;
    //body.scaleX = body.scaleY = 1;
    this.stage.addChild(body);

    //this.stage.canvas.width = w;
    //this.stage.canvas.height = h;

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", this.stage);

    //this.stage.scaleX = scaleX;
    //this.stage.scaleY = scaleY;
  }

  schlagAnimation(){

    var regArmsAndTR = this.corpus.localToLocal(0,0, this.paws);
    this.paws.regX = regArmsAndTR.x;
    this.paws.regY = regArmsAndTR.y;
    this.paws.x = regArmsAndTR.x;
    this.paws.y = regArmsAndTR.y + this.paws.y;


    createjs.Tween.get(this.paws)
      .to({rotation: 50}, 500)
      /*
      .to({rotation: -20}, 100, createjs.Ease.quartOut)
      .to({rotation: 0}, 200);*/
  }

  /*ionViewDidEnter(){

  }

  test(){
    createjs.Tween.get(this.rightEyePupil, {loop: true})
      .to({ x: 13-50}, 700, createjs.Ease.quadOut)
      .to( { x: 0}, 700)
      .to( { x: 50-13}, 700, createjs.Ease.quadOut)
      .to( { x: 0}, 700);
    createjs.Tween.get(this.leftEyePupil, {loop: true})
      .to({ x: 13-50}, 700, createjs.Ease.quadOut)
      .to( { x: 0}, 700)
      .to( { x: 50-13}, 700, createjs.Ease.quadOut)
      .to( { x: 0}, 700);
  }

  private handleClick(){
    alert("hihi");
  }

  ionViewDidEnter() {
    this.stage = new createjs.Stage("demoCanvas");

    this.face = new createjs.Container();

    this.rightEye = new createjs.Container();
    this.rightEyeBall = new createjs.Shape();
    this.rightEyeBall.graphics
      .setStrokeStyle(2)
      .beginStroke("#000000")
      .beginFill("white")
      .drawCircle(0,0,50)
      .endFill()
      .endStroke();

    this.rightEyePupil = new createjs.Shape();
    this.rightEyePupil.graphics
      .beginFill("#000000")
      .setStrokeStyle(1)
      .beginStroke("#000000")
      .drawCircle(0,0,10)
      .endFill()
      .endStroke();

    this.rightEye.addChild(this.rightEyeBall);
    this.rightEye.addChild(this.rightEyePupil);

    this.leftEye = new createjs.Container();
    this.leftEyeBall = new createjs.Shape();
    this.leftEyeBall.graphics
      .setStrokeStyle(2)
      .beginStroke("#000000")
      .beginFill("white")
      .drawCircle(0,0,50)
      .endFill()
      .endStroke();

    this.leftEyePupil = new createjs.Shape();
    this.leftEyePupil.graphics
      .beginFill("#000000")
      .setStrokeStyle(1)
      .beginStroke("#000000")
      .drawCircle(0,0,10)
      .endFill()
      .endStroke();

    this.leftEye.addChild(this.leftEyeBall);
    this.leftEye.addChild(this.leftEyePupil);

    //Abstand zum linken Auge
    this.rightEye.x = 110;
    this.rightEye.y = this.leftEye.y;

    this.leftEyeBrow = new createjs.Shape();
    this.leftEyeBrow.graphics
      .beginStroke("brown")
      .setStrokeStyle(1)
      .beginFill("brown")
      .drawRect(-50, -60, 80,5)
      .endStroke()
      .endFill();
    this.leftEyeBrow.rotation = 20;

    this.rightEyeBrow = new createjs.Shape();
    this.rightEyeBrow.graphics
      .beginStroke("brown")
      .setStrokeStyle(1)
      .beginFill("brown")
      .drawRect(70, -60, 80,5)
      .endStroke()
      .endFill();

    this.eyeBrows = new createjs.Container();
    this.eyeBrows.addChild(this.leftEyeBrow, this.rightEyeBrow);

    this.face.x = 51;
    this.face.y = 80;
    this.eyes = new createjs.Container();
    this.eyes.addChild(this.leftEye, this.rightEye);
    this.face.addChild(this.eyes, this.eyeBrows);

    this.leftEye.addEventListener("click", this.handleClick);

    this.stage.addChild(this.face);

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", this.stage);
  }*/
}
