import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { SQLite} from 'ionic-native';
import { AssetListPage } from '../pages/asset-list/asset-list';
import { OverdueAssetsPage } from '../pages/overdue-assets/overdue-assets';
import { AddAssetPage } from '../pages/add-asset/add-asset';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = AssetListPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation//
    this.pages = [

      { title: 'Asset List', component: AssetListPage },
      { title: 'Overdue Assets', component: OverdueAssetsPage },
      { title: 'Add Asset', component: AddAssetPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {

//db here   
            console.log("going create database");
            let db = new SQLite();
            db.openDatabase({
                name: "data.db",
                location: "default"
            }).then(() => {
                db.executeSql("CREATE TABLE Assets (id integer primary key, Model varchar(30), Manufacturer varchar(30), serialNumber varchar(30), assetTag NUMERIC, Type varchar(30), Status varchar(30), Category varchar(30))", {}).then((data) => {
                  
                    console.log("TABLE CREATED: ", data);
                }, (error) => {
                    console.error("Unable to execute sql", error);
                })
            }, (error) => {
                console.error("Unable to open database", error);
            });
//


      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
