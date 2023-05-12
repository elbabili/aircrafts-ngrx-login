import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftsAlertComponent } from './components/aircrafts-alert/aircrafts-alert.component';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AlertGuard } from './guards/alert.guard';
import { AircraftComponent } from './components/aircraft/aircraft.component';

const routes: Routes = [
  { path : "login" , component : LoginComponent},
  { path : "aircrafts", component : AircraftsComponent },
  { 
    path : "aircrafts-alert", component : AircraftsAlertComponent,
    canActivate : [AlertGuard]
  },  
  { 
    path : "aircraft/:id", component : AircraftComponent,
    canActivate : [AlertGuard]
  },
  { path : '' , redirectTo : 'login', pathMatch : 'full' },
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
