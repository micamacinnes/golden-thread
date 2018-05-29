import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { ProfilePage } from '../profile/profile';
import { BrowsePage } from '../browse/browse';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToLogin() {
    this.navCtrl.push(LoginPage);
  }

  navigateToRegister() {
    this.navCtrl.push(RegisterPage);
  }

  navigateToProfile() {
    this.navCtrl.push(ProfilePage);
  }

  navigateToBrowse() {
    this.navCtrl.push(BrowsePage);
  }



}
