import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as createjs from "createjs-module";

@Component({
  selector: 'page-fitty',
  templateUrl: '../../../../../../Google Drive (kaiserandreas1999@gmail.com)/Fitty/Durchführung/fitty_hauptfigur/fitty.html'
})
export class FittyPage {

  private colorbrown = "#936037";

  private stage;
  private parentcontainer;
  private mouthcontainer;
  private pawleftcon;
  private pawrightcon;
  private footleftcon;
  private footrightcon;

  private parentcontainer_x;
  private parentcontainer_y;
  private parentcontainer_height;
  private parentcontainer_width;

  private head;
  private leftear;
  private leftearouter;
  private rightear;
  private rightearouter;
  private body;
  private schedel;
  private lefteye;
  private righteye;
  private leftpupil;
  private rightpupil;
  private nose;
  private bauch;
  private mouth;
  private lip;
  private pawleft;
  private pawright;
  private footleft;
  private footright;

  private test1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    ionViewDidLoad() {
      console.log('ionViewDidLoad Prototyp1Page');
    }

  drawTamagotchi(uberx, ubery, width, height) {
    this.parentcontainer = new createjs.Container();

  this.parentcontainer_x = uberx;
  this.parentcontainer_y = ubery;
  this.parentcontainer_height = height;
  this.parentcontainer_width = width;

    this.body = new createjs.Container();
    this.head = new createjs.Container();
    this.pawleftcon = new createjs.Container();
    this.pawrightcon = new createjs.Container();
    this.footleftcon = new createjs.Container();
    this.footrightcon = new createjs.Container();
    this.mouthcontainer = new createjs.Container();

    this.schedel = new createjs.Shape();
    this.leftear = new createjs.Shape();
    this.leftearouter = new createjs.Shape();
    this.rightear = new createjs.Shape();
    this.rightearouter = new createjs.Shape();
    this.lefteye = new createjs.Shape();
    this.righteye = new createjs.Shape();
    this.leftpupil = new createjs.Shape();
    this.pawleft = new createjs.Shape();
    this.pawright = new createjs.Shape();
    this.footleft = new createjs.Shape();
    this.footright = new createjs.Shape();
    this.bauch = new createjs.Shape();
    this.mouth = new createjs.Shape();
    this.lip = new createjs.Shape();
    this.rightpupil = new createjs.Shape();
    this.nose = new createjs.Shape();

    // 400
      this.schedel.x = 10;
      this.schedel.y = 218;
      this.schedel.graphics
        .beginFill(this.colorbrown).beginStroke("black")
        .setStrokeStyle(20)
        .drawEllipse(0, 0, 1500, 1250)
        .endStroke();

    // x 390;
    // y 282

    // 720
    this.leftear.x=330;
    this.leftear.y=358;
      this.leftear.graphics.beginStroke("black").beginFill("white")
        .setStrokeStyle(20)/*720,640*/
        .moveTo(0,0)
        //1400, 640
        .bezierCurveTo(-350, -350, 350, -400, 250, 110)
        .endStroke()
      ;

        // 660
        this.leftearouter.x=230;
        this.leftearouter.y =398;
      this.leftearouter.graphics.beginStroke("black").beginFill(this.colorbrown)
        .setStrokeStyle(20).moveTo(0,0)/*660,680*/
        .bezierCurveTo(-400, -550, 600, -500, 350, 110)
        .endStroke();


    //     1480
    // 1480,1950,1650
    this.rightear.graphics.beginStroke("black").beginFill("white")
      .setStrokeStyle(20).moveTo(1090, 358)
      .bezierCurveTo(1090, -82, 1560, 118, 1260, 468)
      .endStroke()
    ;

    // 1400
    // 1420, 2050, 1750
    this.rightearouter.graphics.beginStroke("black").beginFill(this.colorbrown)
      .setStrokeStyle(20).moveTo(1010, 358)
      .bezierCurveTo(1030, -102, 1660, -62, 1360, 468)
      .endStroke()
    ;

    // 625
    this.lefteye.graphics.beginStroke("black").beginFill("white").setStrokeStyle(20)
      .drawEllipse(0, 0, 350, 300);
    this.lefteye.x = 235;
    this.lefteye.y = 518;
    this.righteye.graphics.beginStroke("black").beginFill("white").setStrokeStyle(20)
      .drawEllipse(0, 0, 350, 300);
    // 1175
    this.righteye.x = 785;
    this.righteye.y = 518;

    this.leftpupil.graphics.beginFill("black").drawEllipse(0, 0, 110, 180);
    // 710
    this.leftpupil.x = 320;
    this.leftpupil.y = 568;
    this.leftpupil.rotation = 18;

    this.rightpupil.graphics.beginFill("black").drawEllipse(0, 0, 110, 180);
    // 1290
    this.rightpupil.x = 900;
    this.rightpupil.y = 568;
    this.rightpupil.rotation = 18;

    this.nose.graphics.beginFill("black").drawCircle(0, 0, 70);
    // 1050
    this.nose.x = 660;
    this.nose.y = 918;


    this.mouthcontainer.x = 590;
    this.mouthcontainer.y = 1038;
    this.mouth.graphics.beginStroke("black")
      .setStrokeStyle(20)
      .beginFill("#701228")
      .moveTo(0, 0)
      // 980, 1320
      .bezierCurveTo(20, 70, 140, 90, 170, 30)
      .bezierCurveTo(220, 260, -110, 240, 0, 0)
      .closePath()
    ;
    this.lip.graphics.beginStroke("black").beginFill("#DD4368")
      .setStrokeStyle(20).moveTo(-20, 110)
      .bezierCurveTo(30, 100, 70, 105, 155, 140)
      .bezierCurveTo(130, 180, 10, 210, -20 , 110)
      .endStroke()
    ;
    this.mouthcontainer.addChild(this.mouth, this.lip);


    this.bauch.graphics
      .beginStroke("black").setStrokeStyle(20).beginFill(this.colorbrown)
      .drawRoundRectComplex(330, 1118, 850, 900, 0, 0, 20, 20)
    /*
    .lineTo(780,2300)
    .arcTo(770,2310,790,2300,10)
    */;
    this.bauch.rotation = 2;



    this.pawleftcon.x =160;
    this.pawleftcon.y =1168;
    this.pawleft.graphics.beginStroke("black").beginFill(this.colorbrown)
      .setStrokeStyle(20).moveTo(0, -20)
      .bezierCurveTo(-340, 310, 50, 570, 250, 50)
      .setStrokeStyle(15)
      .moveTo(-100, 320)
      .lineTo(-60, 250)
      .moveTo(-80, 330)
      .lineTo(-40, 260)
      .moveTo(-60, 340)
      .lineTo(-20, 270)
      .endStroke()
    ;

    this.pawleftcon.addChild(this.pawleft);

    this.pawrightcon.x =1040;
    this.pawrightcon.y =1168;
    this.pawright.graphics.beginStroke("black").beginFill(this.colorbrown)
      .setStrokeStyle(20).moveTo(0, 0)
      .bezierCurveTo(-250, 550, 350, 750, 150, 50)
      .setStrokeStyle(15)
      .moveTo(50, 495)
      .lineTo(40, 410)
      .moveTo(80, 505)
      .lineTo(70, 400)
      .moveTo(110, 500)
      .lineTo(100, 395)
      .endStroke()
    ;
    this.pawrightcon.addChild(this.pawright);


    this.footleftcon.x =260;
    this.footleftcon.y =1918;
    this.footleft.graphics.beginStroke("black").beginFill(this.colorbrown)
      .setStrokeStyle(20).moveTo(0, 0)
      .bezierCurveTo(-250, 200, 50, 400, 150, 100)
      .setStrokeStyle(15)
      .moveTo(-90, 200)
      .lineTo(-45, 145)
      .moveTo(-70, 220)
      .lineTo(-20, 165)
      .moveTo(-45, 240)
      .lineTo(5, 180)
      .endStroke()
    ;
    this.footleftcon.addChild(this.footleft);


    this.footrightcon.x =910;
    this.footrightcon.y =1918;
    this.footright.graphics.beginStroke("black").beginFill(this.colorbrown)
      .setStrokeStyle(20).moveTo(0, 0)
      .bezierCurveTo(-50, 400, 450, 400, 190, 50)
      .setStrokeStyle(15)
      .moveTo(200, 300)
      .lineTo(160, 250)
      .moveTo(230, 300)
      .lineTo(180, 235)
      .moveTo(250, 270)
      .lineTo(205, 220)
      .endStroke()
    ;

    this.footrightcon.addChild(this.footright);

    this.body.addChild(this.bauch);
    this.head.addChild(this.leftearouter, this.rightearouter, this.leftear, this.rightear, this.schedel, this.lefteye,
      this.righteye, this.leftpupil, this.rightpupil, this.nose, this.mouthcontainer);

    this.parentcontainer.addChild(this.footleftcon, this.footrightcon, this.body, this.pawleftcon, this.pawrightcon, this.head);
    this.parentcontainer.x = uberx;
    this.parentcontainer.y = ubery;
    this.parentcontainer.scaleX = width/1500;
    this.parentcontainer.scaleY= height/2175;
    this.stage.addChild(this.parentcontainer);
  }

  drawbauch(scale) {
    this.bauch.graphics.clear;
    //this.bauch.scaleX = scale;
    //this.bauch.x -= (scale - 1)*850;
    if(scale>1.2) {
      this.pawrightcon.x =(1040+(440*scale - 440));
      this.pawleftcon.x =(260-(400*scale - 400));
    }
    this.bauch.graphics.beginStroke("black").setStrokeStyle(20).beginFill(this.colorbrown)
      .drawRoundRectComplex(330-(850*scale - 850)/2, 1118, 850*scale, 900, 0, 0, 20, 20)
    this.footrightcon.x =(910+(440*scale - 440));
    this.footleftcon.x =(260-(400*scale - 400));
  }

    ionViewDidEnter() {
      this.stage = new createjs.Stage("demoCanvasfitty");

      this.drawTamagotchi(500,500, 1000, 1500);
      this.drawbauch(1.3);

      createjs.Ticker.setFPS(60);
      createjs.Ticker.addEventListener("tick", this.stage);
    }
  }
