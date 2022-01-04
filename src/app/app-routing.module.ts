import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftsAlertComponent } from './components/aircrafts-alert/aircrafts-alert.component';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';

const routes: Routes = [
  { path : "aircrafts", component : AircraftsComponent },
  { path : "aircrafts-alert", component : AircraftsAlertComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
