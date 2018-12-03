import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as createjs from "createjs-module";

@IonicPage()
@Component({
  selector: 'page-tennisfield',
  templateUrl: 'tennisfield.html',
})
export class TennisfieldPage {

  private stage;
  private parentcontainer;
  private fieldcontainer;
  private field;
  private servicecourt;
  private servicecourt1;
  private servicecourt2;
  private servicecourt3;
  private servicecourt4;
  private doublefield1;
  private doublefield2;
  private doublefield3;
  private doublefield4;
  private centerline;
  private centerlinetop;
  private centerlinebottom;
  private outerfield;
  private netzhalterungen;
  private netzhalterungleft;
  private netzhalterungright;
  private netz;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TennisfieldPage');
  }

  drawTennisfield(x, y) {

    this.stage = new createjs.Stage("demoCanvas2");


    this.parentcontainer = new createjs.Container();
    this.parentcontainer.x = x;
    this.parentcontainer.y = y;



    this.fieldcontainer = new createjs.Container();


    //this.fieldfunction = function (posx, posy, width, height) {
    this.field = new createjs.Shape();
    this.field.graphics.setStrokeStyle(4)
      .beginStroke('#ffffff')
      .beginFill('#cc5f48')
      //.drawRect(posx,posy, width, height)
      .drawRect(100, 100, 1000, 1500)
      .endFill()
      .endStroke();
    //};

    this.outerfield = new createjs.Shape();
    this.outerfield.graphics.setStrokeStyle(4)
      .beginStroke('#ffffff')
      .beginFill('#cc5f48')
      .drawRect(0, 0, 1200, 1700)
      .endFill()
      .endStroke();

    this.doublefield1 = new createjs.Shape();
    this.doublefield1.graphics.setStrokeStyle(4)
      .beginStroke('#ffffff')
      .beginFill('#cc5f48')
      //.drawRect(posx,posy, width, height)
      .drawRect(100, 100, 150, 750)
      .endFill()
      .endStroke();

    this.doublefield2 = new createjs.Shape();
    this.doublefield2.graphics.setStrokeStyle(4)
      .beginStroke('#ffffff')
      .beginFill('#cc5f48')
      //.drawRect(posx,posy, width, height)
      .drawRect(950, 850, 150, 750)
      .endFill()
      .endStroke();

    this.doublefield3 = new createjs.Shape();
    this.doublefield3.graphics.setStrokeStyle(4)
      .beginStroke('#ffffff')
      .beginFill('#cc5f48')
      //.drawRect(posx,posy, width, height)
      .drawRect(100, 850, 150, 750)
      .endFill()
      .endStroke();

    this.doublefield4 = new createjs.Shape();
    this.doublefield4.graphics.setStrokeStyle(4)
      .beginStroke('#ffffff')
      .beginFill('#cc5f48')
      //.drawRect(posx,posy, width, height)
      .drawRect(950, 100, 150, 750)
      .endFill()
      .endStroke();


    this.servicecourt = new createjs.Container();

    this.servicecourt1 = new createjs.Shape();
    this.servicecourt1.graphics.setStrokeStyle(4)
      .beginStroke('#ffffff')
      .beginFill('#cc5f48')
      //.drawRect(posx,posy, width, height)
      .drawRect(250, 100 + (1500 / 2), 700 / 2, -470)
      .endFill()
      .endStroke();

    this.servicecourt2 = new createjs.Shape();
    this.servicecourt2.graphics.setStrokeStyle(4)
      .beginStroke('#ffffff')
      .beginFill('#cc5f48')
      //.drawRect(posx,posy, width, height)
      .drawRect(600, 100 + (1500 / 2), 700 / 2, -470)
      .endFill()
      .endStroke();

    this.servicecourt3 = new createjs.Shape();
    this.servicecourt3.graphics.setStrokeStyle(4)
      .beginStroke('#ffffff')
      .beginFill('#cc5f48')
      //.drawRect(posx,posy, width, height)
      .drawRect(250, 100 + (1500 / 2), 700 / 2, 470)
      .endFill()
      .endStroke();

    this.servicecourt4 = new createjs.Shape();
    this.servicecourt4.graphics.setStrokeStyle(4)
      .beginStroke('#ffffff')
      .beginFill('#cc5f48')
      //.drawRect(posx,posy, width, height)
      .drawRect(600, 100 + (1500 / 2), 700 / 2, 470)
      .endFill()
      .endStroke();


    this.servicecourt4 = new createjs.Shape();
    this.servicecourt4.graphics.setStrokeStyle(4)
      .beginStroke('#ffffff')
      .beginFill('#cc5f48')
      //.drawRect(posx,posy, width, height)
      .drawRect(600, 100 + (1500 / 2), 700 / 2, 470)
      .endFill()
      .endStroke();

    this.centerline = new createjs.Container();

    this.centerlinetop = new createjs.Shape();
    this.centerlinetop.graphics.setStrokeStyle(4)
      .beginStroke('#ffffff')
      .beginFill('#cc5f48')
      //.drawRect(posx,posy, width, height)
      .drawRect(100+(1000/2), 100, 0, 70)
      .endFill()
      .endStroke();

    this.centerlinebottom = new createjs.Shape();
    this.centerlinebottom.graphics.setStrokeStyle(4)
      .beginStroke('#ffffff')
      .beginFill('#cc5f48')
      //.drawRect(posx,posy, width, height)
      .drawRect(100+(1000/2), 1700-100, 0, -70)
      .endFill()
      .endStroke();

    this.netzhalterungen = new createjs.Container();

    this.netzhalterungright = new createjs.Shape();
    this.netzhalterungright.graphics.setStrokeStyle(4)
      .beginStroke('#ffffff')
      .beginFill('#ffffff')
      //.drawRect(posx,posy, width, height)
      .drawCircle(100/2, 100 + (1500 / 2), 30)
      .endFill()
      .endStroke();

    this.netzhalterungleft = new createjs.Shape();
    this.netzhalterungleft.graphics.setStrokeStyle(4)
      .beginStroke('#ffffff')
      .beginFill('#ffffff')
      //.drawRect(posx,posy, width, height)
      .drawCircle(1200-50, 100 + (1500 / 2), 30)
      .endFill()
      .endStroke();


    this.netz = new createjs.Shape();
    this.netz.graphics.setStrokeStyle(4)
      .beginStroke('#ffffff')
      .beginFill('#cc5f48')
      //.drawRect(posx,posy, width, height)
      .drawRect(100/2, 100 + (1500 / 2), 1200-100, 0)
      .endFill()
      .endStroke();

    this.servicecourt.addChild(this.servicecourt1, this.servicecourt2, this.servicecourt3, this.servicecourt4);
    this.centerline.addChild(this.centerlinetop, this.centerlinebottom)
    this.netzhalterungen.addChild(this.netzhalterungleft, this.netzhalterungright)
    this.fieldcontainer.addChild(this.field, this.doublefield1, this.doublefield2, this.doublefield3, this.doublefield4, this.servicecourt, this.centerline, this.netzhalterungen, this.netz);
    this.parentcontainer.addChild(this.outerfield, this.fieldcontainer);



    this.stage.addChild(this.parentcontainer);

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", this.stage);
  }

  ionViewDidEnter() {
      this.drawTennisfield(0,0);
    }



}
