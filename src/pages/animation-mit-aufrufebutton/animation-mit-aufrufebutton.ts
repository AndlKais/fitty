import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as createjs from "createjs-module";
import TweenJS = createjs.TweenJS;

/**
 * Generated class for the AnimationMitAufrufebuttonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animation-mit-aufrufebutton',
  templateUrl: 'animation-mit-aufrufebutton.html',
})
export class AnimationMitAufrufebuttonPage {

  private stage;
  private ballramp;
  private ramp;
  private ball;
  private water;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimationMitAufrufebuttonPage');
  }

  starten(){
    createjs.Tween.get(this.ball, {loop: false})
      .to({x: 20-67}, 700, createjs.Ease.quadOut)
      .to( { x: 0}, 700)
      .to( { x: 60-79}, 700, createjs.Ease.quadOut)
      .to( { x: 0}, 700);

    /*TweenLight.set(ball, {y:350});
    var tl = new TimelineLite({delay:0.5});
    tl.to(ball, 0.5, {y:0})
      .to(ball, 1.25, {y:350, ease:Bounce.easeOut})
      .to(ball, 2.5, {x:"+=450"}, "-=1.75")
      .to(ball, 1, {x:0, backgroundColor:colors[ Math.floor(Math.random() * colors.length) ]}, "+=1")
      .call(play);*/
  }

  ionViewDidEnter(){
    this.stage = new createjs.Stage("demoCanvas");
    this.ballramp = new createjs.Container();

    this.ramp = new createjs.Shape();
    this.ramp.graphics
      .setStrokeStyle("3")
      .beginStroke("#000000")
      .beginFill("white")
      .drawRect(0,0, 600, 350)
      .endFill()
      .endStroke();

    this.ball = new createjs.Shape();
    this.ball.graphics
      .setStrokeStyle("3")
      .beginStroke("#000000")
      .beginFill("white")
      .drawCircle(150,110, 40)
      .endFill()
      .endStroke();

    this.ballramp.addChild(this.ramp);
    this.ballramp.addChild(this.ball);

    this.water = new createjs.Shape();
    this.water.graphics
      .setStrokeStyle("3")
      .beginStroke("#000000")
      .beginFill("white")
      .drawRect(0, 315, 600, 55)
      .endFill()
      .endStroke();

    this.ballramp.addChild(this.water);
    this.stage.addChild(this.ballramp);


    createjs.Ticker.addEventListener("tick", this.stage);
  }



}
