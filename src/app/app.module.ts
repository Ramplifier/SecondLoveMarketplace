// @ts-ignore
import {BrowserModule} from '@angular/platform-browser';
// @ts-ignore
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { MenuComponent } from './components/menuComponents/menu/menu.component';
import { MenuButtonComponent } from './components/menuComponents/menu-button/menu-button.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    MenuComponent,
    MenuButtonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
