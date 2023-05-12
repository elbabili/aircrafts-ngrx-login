import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, tap } from 'rxjs';
import { Aircraft } from 'src/app/model/aircraft.model';
import { AircraftsState, AircraftsStateEnum } from 'src/app/ngrx/aircrafts.state';

@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.css']
})
export class AircraftComponent implements OnInit {
  aircraft : Aircraft;
  aircraftsState$:Observable<AircraftsState> | null = null; 
  readonly aircraftsStateEnum = AircraftsStateEnum;

  constructor(private route : ActivatedRoute, private store : Store<any>) { 
    this.aircraft = {} as Aircraft;  
  }

  ngOnInit(): void {
    this.aircraftsState$ = this.store.pipe(
      map((state) => {
        Object.assign(this.aircraft,state.airbusState.aircraft);    //afin de ne pas altérer la source
        return state.airbusState
      })
    );  
  }

  onUpdateAircraft(value : Aircraft){
    console.log(value)
  }
}
