import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-overdue-assets',
  templateUrl: 'overdue-assets.html'
})
export class OverdueAssetsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverdueAssetsPage');
  }

}
