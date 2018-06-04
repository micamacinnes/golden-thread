import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { ProfilePage } from '../profile/profile';
import { BrowsePage } from '../browse/browse';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public username: string;
  public password: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  login() {
    // Our username and password (on this) should have data from the user
    this.navCtrl.push(LoginPage, {
      username: this.username,
      password: this.password
    });
  }


  navigateToRegister() {
    this.navCtrl.push(RegisterPage);
  }

}

  // ionViewDidLoad() {
  //   console.log("ionViewDidLoad LoginPage");
  // }
  
  // login() {
  //   Our username and password (on this) should have data from the user
  //   this.navCtrl.push(ProfilePage, {
  //     username: this.username,
  //     password: this.password
  //   });
  // }


  // navigateToLogin() {
  //   this.navCtrl.push(LoginPage, {
  //     username: this.username,
  //     password: this.password
  //   });
  //   console.log(this.username);

  // }

  // navigateToRegister() {
  //   this.navCtrl.push(RegisterPage);
  // }

  // navigateToProfile() {
  //   this.navCtrl.push(ProfilePage, {
  //     password: this.password,
  //      username: this.username
  //     });
  //   alert(this.username);
  // }

  // navigateToBrowse() {
  //   this.navCtrl.push(BrowsePage);
  // }




