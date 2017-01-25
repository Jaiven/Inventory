import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { NavController , Platform} from 'ionic-angular';
import {SQLite} from "ionic-native";


@Component({
  selector: 'page-add-asset',
  templateUrl: 'add-asset.html'
})
export class AddAssetPage {

  public database: SQLite;
  public assetAdd: Array<Object>;
  addAssetForm : FormGroup;

  constructor(public navCtrl: NavController,public platform: Platform) {
    this.navCtrl = navCtrl;

            this.platform.ready().then(() => {
            this.database = new SQLite();
            this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
                this.refresh();
            }, (error) => {
                console.log("ERROR: ", error);
            });
        });
    }

  public goBack(){
		this.navCtrl.pop();
	 }

       public refresh() {
        this.database.executeSql("SELECT * FROM AssetList", []).then((data) => {
            this.assetAdd = [];
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.assetAdd.push({Model: data.rows.item(i).Model, Manufacturer: data.rows.item(i).Manufacturer});
                }
            }
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
    }

  addToDatabase(){
        this.database.executeSql("INSERT INTO AssetList (Model, Manufacturer) VALUES ('Note7', 'SAMSUNG')", []).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });  
    }
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

    onSubmit(){
      this.addToDatabase()
      this.goBack();
  }
}
