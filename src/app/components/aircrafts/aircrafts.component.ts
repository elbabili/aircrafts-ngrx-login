import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { Aircraft } from 'src/app/model/aircraft.model';
import { GetAircraftByIdAction } from 'src/app/ngrx/aircrafts.actions';
import { selectCountAlertAircrafts, selectIsConnected } from 'src/app/ngrx/aircrafts.selectors';
import { AircraftsState, AircraftsStateEnum } from 'src/app/ngrx/aircrafts.state';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {
  aircraftsState$:Observable<AircraftsState> | null = null; 
  readonly aircraftsStateEnum = AircraftsStateEnum;
  countAlertAircfrats$ : Observable<number> | undefined;
  isConnected$: Observable<Boolean> | null = null;
  
  constructor(private store:Store<any>, private router : Router) {  
    this.countAlertAircfrats$ = store.select(selectCountAlertAircrafts);
    this.isConnected$ = store.select(selectIsConnected);
  }

  ngOnInit(): void {  //notre composant doit observer le state dans le store
    this.aircraftsState$ = this.store.pipe(//on écoute ce qui se passe dans le store, dès qu'on reçoit les données, on peut faire un map
          //dit autrement : nous recevons le state dès qu'il change afin de permettre l'affichage adéquat de ses données
          //tap((state) => console.log(state) ),  // affiche > {airbusState: {…}} et le renvoi
          map((state) => state.airbusState)  //map renvoi airbusState: {…} de type AircraftsState {...}
    );  
  }

  onDetailAircraft(aircraft : Aircraft){
    this.store.dispatch(new GetAircraftByIdAction(aircraft.id));
    this.router.navigateByUrl('aircraft/' + aircraft.id);
  }
}
