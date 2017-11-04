import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { APP_ROUTING } from './app.routes';

import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

import { SpotifyService } from './services/spotify.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtistaComponent } from './components/artista/artista.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    ArtistaComponent,
    SinfotoPipe,
    DomseguroPipe
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
