import { AddAssetPage } from '../add-asset/add-asset';
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {SQLite} from "ionic-native";

@Component({
  selector: 'page-asset-list',
  templateUrl: 'asset-list.html'
})

export class AssetListPage {

  items: Array<{Model: string, Manufacturer: string}>;//array of assets
  public database: SQLite;//database var
  public assetLists: Array<Object>;

  constructor(public navCtrl: NavController) {
    this.navCtrl=navCtrl;

    //pull items from table and list them on page
        this.database.executeSql("SELECT * FROM Assets", []).then((data) => {
            this.assetLists = [];
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.assetLists.push({Model: data.rows.item(i).Model, Manufacturer: data.rows.item(i).Manufacturer});
                }
            }
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });    
    //end data load
  }

	goToAddAsset(){
		this.navCtrl.push(AddAssetPage);
	}


}
