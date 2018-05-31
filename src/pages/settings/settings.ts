import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';
import { BrowsePage } from '../browse/browse';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {

  }

  navigateToLogin() {
    this.navCtrl.push(LoginPage);
  }
  navigateToBrowse() {
    this.navCtrl.push(BrowsePage);
  }
  navigateToProfile() {
    this.navCtrl.push(ProfilePage);
  }



}
