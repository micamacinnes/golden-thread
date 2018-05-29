import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { BrowsePage } from '../browse/browse';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }
  
  navigateToProfile() {
    this.navCtrl.push(ProfilePage);
  }
  
  navigateToBrowse() {
    this.navCtrl.push(BrowsePage);
  }

}

