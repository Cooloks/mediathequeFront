import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BibliothequeComponent} from './bibliotheque/bibliotheque.component';

@NgModule({
  declarations: [
    AppComponent,
    BibliothequeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
