import { AddAssetPage } from '../pages/add-asset/add-asset';
import { OverdueAssetsPage } from '../pages/overdue-assets/overdue-assets';

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-asset-list',
  templateUrl: 'asset-list.html'
})

export class AssetListPage {
  
  ap = AddAssetPage;
  aboutPage = OverdueAssetsPage;
  
  constructor() {}


}
