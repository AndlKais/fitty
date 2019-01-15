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
  selector: 'page-tamagotchi-spielfigur',
  templateUrl: 'tamagotchi-spielfigur.html',
})
export class TamagotchiSpielfigurPage {
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
  private body;
  coords;

  private stage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TamagotchiSpielfigurPage');
    this.stage=new createjs.Stage("demoCanvas");

    this.drawTopDown(0,1);
  }

  ionViewDidEnter(){
    this.stage=new createjs.Stage("demoCanvas");
    this.drawTopDown(0,1);
  }
    drawTopDown(rotation, scale)
    {
      console.log("drawTopDown()");

      this.body = new createjs.Container();

      this.corpus = new createjs.Shape();
      this.corpus.x = this.corpus.y = 500;
      this.corpus.graphics.setStrokeStyle(4)
        .beginStroke("#000000")
        .beginFill('#936037')
        .drawCircle(0, 0, 1000)
        .endFill()
        .endStroke();

      this.ears = new createjs.Container();
      this.outerleftEar = new createjs.Shape();

      this.outerleftEar.graphics.setStrokeStyle(25)
        .beginStroke('#000000')
        .beginFill('#936037')
        .arc(0, 0, 250, 0, ((Math.PI * 2) / 360) * 180, true)
        .endFill()
        .endStroke();

      this.innerleftEar = new createjs.Shape();

      this.innerleftEar.graphics
        .beginStroke('white')
        .beginFill('#ffffff')
        .arc(0, 0, 150, 0, ((Math.PI * 2) / 360) * 180, true)
        .endFill()
        .endStroke();

      this.outerrightEar = new createjs.Shape();

      this.outerrightEar.graphics.setStrokeStyle(25)
        .beginStroke('#000000')
        .beginFill('#936037')
        .arc(0, 0, 250, 0, ((Math.PI * 2) / 360) * 180, true)
        .endFill()
        .endStroke();

      this.innerrightEar = new createjs.Shape();

      this.innerrightEar.graphics
        .beginStroke('white')
        .beginFill('#ffffff')
        .arc(0, 0, 150, 0, ((Math.PI * 2) / 360) * 180, true)
        .endFill()
        .endStroke();

      this.outerleftEar.scaleX = 0.5;
      this.outerrightEar.scaleX = 0.5;
      this.innerleftEar.scaleX = 0.5;
      this.innerrightEar.scaleX = 0.5;
      this.outerrightEar.x = 650;
      this.innerrightEar.x = 650;

      this.ears.addChild(this.outerrightEar, this.outerleftEar, this.innerrightEar, this.innerleftEar);

      // console.log("test", this.corpus.localToLocal(0, 0, this.ears), this.ears.x, this.ears.y);
      this.ears.x += this.corpus.localToLocal(0, 0, this.ears).x - (650 / 2);
      this.ears.y += this.corpus.localToLocal(0, 0, this.ears).y - 100;


      this.nose = new createjs.Shape();

      this.nose.graphics.setStrokeStyle(1)
        .beginStroke('#000000')
        .beginFill('#000000')
        .drawEllipse(0, 0, 250, 150)
        .endFill()
        .endStroke();

      this.nose.x = this.corpus.localToLocal(0, 1000, this.nose).x - 250 / 2;
      this.nose.y = this.corpus.localToLocal(0, 1000, this.nose).y - 150 / 2;

      // console.log(this.nose.x);
      // console.log(this.nose.y);

      this.eyes = new createjs.Container();
      this.leftEye = new createjs.Shape();

      this.leftEye.graphics.setStrokeStyle(25)
        .beginStroke('#000000')
        .beginFill('#000000')
        .moveTo(this.nose.x - 650, this.nose.y - 290)
        .quadraticCurveTo(250, 800, 375, 1490)
        .endFill()
        .endStroke();

      this.restleftEyeAusschnitt = new createjs.Shape();

      let coords = this.corpus.localToLocal(0, 0, this.restleftEyeAusschnitt);

      this.restleftEyeAusschnitt.graphics.setStrokeStyle(25)
        .beginStroke("#000000")
        .beginFill('#000000')
        .arc(coords.x, coords.y, 1000, 0, Math.PI, true)
        .endFill()
        .endStroke();

      // console.log((Math.PI / 180) * 141);
      this.restrightEyeAusschnitt = new createjs.Shape();

      let coords2 = this.corpus.localToLocal(0, 0, this.restrightEyeAusschnitt);

      this.restrightEyeAusschnitt.graphics.setStrokeStyle(25)
        .beginStroke("#000000")
        .beginFill("#000000")
        .arc(coords2.x, coords2.y, 1000, (Math.PI / 180) * 85, (Math.PI / 180) * 39, true)
        .endFill()
        .endStroke();

      this.rightEye = new createjs.Shape();
      this.rightEye.graphics.setStrokeStyle(25)
        .beginStroke('#000000')
        .beginFill('#000000')
        .moveTo(this.nose.x + 900, this.nose.y - 290)
        .quadraticCurveTo(750, 800, 625, 1490)
        .endFill()
        .endStroke();

      this.rightEyeBall = new createjs.Shape();
      this.rightEyeBall.graphics.setStrokeStyle(25)
        .beginStroke('#ffffff')
        .beginFill('#ffffff')
        .moveTo(this.nose.x + 900, this.nose.y - 290)
        .drawEllipse(this.nose.x + 370, this.nose.y - 150, 130, 155)
        .endFill()
        .endStroke();

      this.leftEyeBall = new createjs.Shape();
      this.leftEyeBall.graphics.setStrokeStyle(25)
        .beginStroke('#ffffff')
        .beginFill('#ffffff')
        .moveTo(this.nose.x - 350, this.nose.y - 90)
        .drawEllipse(this.nose.x - 260, this.nose.y - 150, 130, 155)
        .endFill()
        .endStroke();

      this.eyes.addChild(this.rightEye, this.leftEye, this.restleftEyeAusschnitt, this.restrightEyeAusschnitt, this.leftEyeBall, this.rightEyeBall);

      this.paws = new createjs.Container();

      this.pawleft = new createjs.Shape();
      this.pawleft.graphics
        .beginStroke("#000000")
        .beginFill('#936037')
        .setStrokeStyle(20).moveTo(450, 1500)
        .bezierCurveTo(250, 1800, 600, 2000, 800, 1500)
        .setStrokeStyle(15)
        .moveTo(450, 1770)
        .lineTo(490, 1700)
        .moveTo(470, 1780)
        .lineTo(510, 1710)
        .moveTo(490, 1790)
        .lineTo(530, 1720)
        .endStroke();

      this.pawleft.rotation = 30;
      this.pawleft.x = 120;
      this.pawleft.y = -360;

      this.pawright = new createjs.Shape();
      this.pawright.graphics
        .beginStroke("#000000")
        .beginFill('#936037')
        .setStrokeStyle(20).moveTo(450, 1500)
        .bezierCurveTo(250, 1800, 600, 2000, 800, 1500)
        .setStrokeStyle(15)
        .moveTo(450, 1770)
        .lineTo(490, 1700)
        .moveTo(470, 1780)
        .lineTo(510, 1710)
        .moveTo(490, 1790)
        .lineTo(530, 1720)
        .endStroke();

      this.pawright.scaleX = -1;
      this.pawright.rotation = -30;
      this.pawright.x = 860;
      this.pawright.y = -360;

      this.paws.addChild(this.pawleft, this.pawright);

      this.tennisschlaeger = new createjs.Container();

      this.schlagflaeche = new createjs.Shape();
      this.schlagflaeche.graphics
        .beginStroke('#000000')
        .setStrokeStyle(25)
        .drawEllipse(-1290, 1160, 400, 500)
        .endStroke()
        .endFill();

      this.schlagflaeche.rotation = -40;

      this.schlaegergriff = new createjs.Shape();
      this.schlaegergriff.graphics
        .beginStroke('#000000')
        .beginFill('#000000')
        .setStrokeStyle(25)
        .drawRoundRectComplex(-1150, 720, 80, 430, 30, 30, 0, 0)
        .endStroke()
        .endFill();

      this.schlaegergriff.rotation = -40;

      this.tennisschlaeger.addChild(this.schlagflaeche, this.schlaegergriff);

      this.armsAndTR = new createjs.Container();
      // console.log(this.armsAndTR.y, this.corpus.y);

      this.armsAndTR.addChild(this.paws, this.tennisschlaeger);

      this.tennisschlaeger.scaleX = -1;
      this.tennisschlaeger.x -= 650;
      this.tennisschlaeger.y += 70;

      this.body.addChild(this.armsAndTR, this.corpus, this.ears, this.nose, this.eyes);
      this.body.x = 800;
      this.body.y = 500;
      this.body.scaleX = this.body.scaleY = 0.5;

      let regArmsAndTR = this.corpus.localToLocal(0, 0, this.armsAndTR);
      this.armsAndTR.regX = regArmsAndTR.x;
      this.armsAndTR.regY = regArmsAndTR.y;
      this.armsAndTR.x = regArmsAndTR.x;
      this.armsAndTR.y = regArmsAndTR.y + this.armsAndTR.y;

      this.body.regX = this.body.regY = 500;
      this.body.x += this.body.regX;
      this.body.y += this.body.regY;

      /------------------/
      this.body.rotation = rotation;
      this.body.scaleX = scale;
      this.body.scaleY = scale;
      this.stage.addChild(this.body);
  }
}
