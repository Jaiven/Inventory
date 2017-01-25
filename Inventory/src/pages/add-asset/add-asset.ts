import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-add-asset',
  templateUrl: 'add-asset.html'
})
export class AddAssetPage {

  addAssetForm : FormGroup;

  constructor(public navCtrl: NavController) {}

  ionViewWillLoad() {
    this.addAssetForm = new FormGroup({
      model: new FormControl(),
      manufacturer: new FormControl(),
      serialNumber: new FormControl(),
      assetTag: new FormControl(),
      type: new FormControl(),
      status: new FormControl(),
      
    })
  }

    onSubmit(values){
      console.log();
  }
}
