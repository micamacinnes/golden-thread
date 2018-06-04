import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Charity } from '../../models/charity';



@Component({
  selector: 'page-charity-profile',
  templateUrl: 'charity-profile.html'
})
export class CharityProfilePage {
  
  public charity: Charity;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.charity = this.navParams.get("charity");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityProfilePage');
  }

}