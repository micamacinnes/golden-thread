import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { User } from '../../models/user';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  public user: User = new User();

  constructor(public navCtrl: NavController) {
  }

  navigateToLogin() {
    this.navCtrl.push(LoginPage, {
      user: this.user,
    });
  }
}