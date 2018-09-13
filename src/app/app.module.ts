import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogInComponent } from './core/log-in/log-in.component';
import { MainPageComponent } from './core/main-page/main-page.component';
import { ResultComponent } from './core/result/result.component';
import { ScanComponent } from './core/scan/scan.component';
import { SignUpComponent } from './core/sign-up/sign-up.component';
import { ItemBarComponent } from './shared/components/item-bar/item-bar.component';
import { PopUpComponent } from './shared/components/pop-up/pop-up.component';
import { SearchComponent } from './shared/components/search/search.component';
import { ItemListComponent } from './core/item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    MainPageComponent,
    ResultComponent,
    ScanComponent,
    SignUpComponent,
    ItemBarComponent,
    PopUpComponent,
    SearchComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
