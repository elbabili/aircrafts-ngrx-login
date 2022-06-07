import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AircraftsNavbarComponent } from './components/aircrafts/aircrafts-navbar/aircrafts-navbar.component';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AircraftsEffects } from './ngrx/aircrafts.effects';
import { AircraftsReducer } from './ngrx/aircrafts.reducer';
import { AircraftsAlertComponent } from './components/aircrafts-alert/aircrafts-alert.component';
import { LoginComponent } from './components/login/login.component';
import { LoginEffects } from './ngrx/login/login.effect';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AircraftsComponent,
    AircraftsNavbarComponent,
    AircraftsAlertComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({airbusState : AircraftsReducer}),   //spécifier le reducer
    EffectsModule.forRoot([AircraftsEffects,LoginEffects]),               //spécifier les effects
    StoreDevtoolsModule.instrument()  //en l'activant ici, à chaque action de NgRx dans l'appli
                                      //le plugin redux (chrome) permet l'analyse du state durant le dev
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
