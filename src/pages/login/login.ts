import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { BrowsePage } from '../browse/browse';
import { User } from '../../models/user';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { SettingsPage } from '../settings/settings';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = new User;
  }

  ionViewDidLoad() {
    this.user.firstname = "Miki";
    this.user.lastname = "von Ketelhodt";
    this.user.email = this.navParams.get("username");
    this.user.password = this.navParams.get("password");
  }

 

  navigateToProfile() {
    this.navCtrl.push(ProfilePage);
  }
  
  navigateToBrowse() {
    this.navCtrl.push(BrowsePage);
  }

  navigateToHome() {
    this.navCtrl.push(HomePage);
  }

  navigateToSettings() {
    this.navCtrl.push(SettingsPage);
  }

  navigateToRegister() {
    this.navCtrl.push(RegisterPage);
  }


}

