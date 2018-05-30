import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Project1Page } from '../project1/project1';

@Component({
  selector: 'page-browse',
  templateUrl: 'browse.html'
})
export class BrowsePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToProject1() {
    this.navCtrl.push(Project1Page);
  }


}