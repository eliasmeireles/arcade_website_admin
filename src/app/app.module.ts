import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {routing} from './app.routes';
import {RankingComponent} from './ranking/ranking.component';
import {NavlinkComponent} from './navlink/navlink.component';
import {PlayerModule} from './player/player.module';
import {PermitionModule} from './permition/permition.module';
import {BaseurlModule} from './baseurl/baseurl.module';
import {AdminModule} from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { UseronComponent } from './useron/useron.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RankingComponent,
    NavlinkComponent,
    LoginComponent,
    UseronComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PlayerModule,
    BaseurlModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    PermitionModule,
    routing
  ],
  providers: [UseronComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
