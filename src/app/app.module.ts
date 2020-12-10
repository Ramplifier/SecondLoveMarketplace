// @ts-ignore
import {BrowserModule} from '@angular/platform-browser';
// @ts-ignore
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {BannerComponent} from './components/bannerComponents/banner/banner.component';
import {MenuComponent} from './components/menuComponents/menu/menu.component';
import {MenuButtonComponent} from './components/menuComponents/menu-button/menu-button.component';
import {ArtikelTegelComponent} from './components/contentComponents/artikel-tegel/artikel-tegel.component';
import {BannerLoginComponent} from './components/bannerComponents/banner-login/banner-login.component';
import {LogincontainerComponent} from './components/contentComponents/login-Container/logincontainer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AanmeldcontainerComponent} from './components/contentComponents/aanmeldcontainer/aanmeldcontainer.component';
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: '', component: LogincontainerComponent},
  {path: 'sign_up', component: AanmeldcontainerComponent}

];


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    MenuComponent,
    MenuButtonComponent,
    ArtikelTegelComponent,
    BannerLoginComponent,
    LogincontainerComponent,
    AanmeldcontainerComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
