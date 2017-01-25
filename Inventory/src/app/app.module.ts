import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AssetListPage } from '../pages/asset-list/asset-list';
import { OverdueAssetsPage } from '../pages/overdue-assets/overdue-assets';
import { AddAssetPage } from '../pages/add-asset/add-asset';

@NgModule({
  declarations: [
    MyApp,
    AssetListPage,
    OverdueAssetsPage,
    AddAssetPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AssetListPage,
    OverdueAssetsPage,
    AddAssetPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
