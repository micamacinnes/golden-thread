import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { BrowsePage } from '../browse/browse';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public username: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }



  navigateToBrowse() {
    this.navCtrl.push(BrowsePage);
  }



}
