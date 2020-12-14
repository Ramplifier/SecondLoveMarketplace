// @ts-ignore
import {BrowserModule} from '@angular/platform-browser';
// @ts-ignore
import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {BannerComponent} from './components/bannerComponents/banner/banner.component';
import {MenuComponent} from './components/menuComponents/menu/menu.component';
import {MenuButtonComponent} from './components/menuComponents/menu-button/menu-button.component';
import {BannerLoginComponent} from './components/bannerComponents/banner-login/banner-login.component';
import {LogincontainerComponent} from './components/contentComponents/login-Container/logincontainer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AanmeldcontainerComponent} from './components/contentComponents/aanmeldcontainer/aanmeldcontainer.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductcontainerComponent} from './components/contentComponents/productcontainer/productcontainer.component';
import {ArtikelpageComponent} from './components/pages/artikelpage/artikelpage.component';
import {ArtikeltoevoegenComponent} from './components/contentComponents/artikeltoevoegen/artikeltoevoegen.component';

const routes: Routes = [
  {path: '', component: ArtikelpageComponent},
  {path: 'gebruiker_aanmaken', component: AanmeldcontainerComponent},
  {path: 'product_aanmaken', component: ArtikeltoevoegenComponent}


];


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    MenuComponent,
    MenuButtonComponent,
    BannerLoginComponent,
    LogincontainerComponent,
    AanmeldcontainerComponent,
    ProductcontainerComponent,
    ArtikelpageComponent,
    ArtikeltoevoegenComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
