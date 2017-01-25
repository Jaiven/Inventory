import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-overdue-assets',
  templateUrl: 'overdue-assets.html'
})
export class OverdueAssetsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverdueAssetsPage');
  }

}
