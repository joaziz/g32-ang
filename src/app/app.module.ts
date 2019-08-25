import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {SidBarComponent} from './components/sid-bar/sid-bar.component';
import {ArticlesComponent} from './components/articles/articles.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ArticlesMakerComponent} from './components/articles-maker/articles-maker.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SidBarComponent,
    DashboardComponent,
    ArticlesMakerComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
