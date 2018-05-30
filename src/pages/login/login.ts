import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { BrowsePage } from '../browse/browse';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public username: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  
  navigateToProfile() {
    this.navCtrl.push(ProfilePage);
  }
  
  navigateToBrowse() {
    this.navCtrl.push(BrowsePage);
  }

  ionViewDidLoad() {
    this.username = this.navParams.get("username");
    this.password = this.navParams.get("password");
  }


}

