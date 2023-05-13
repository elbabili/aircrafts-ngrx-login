import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, tap } from 'rxjs';
import { Aircraft } from 'src/app/model/aircraft.model';
import { Equipment } from 'src/app/model/equipment.model';
import { AddOperationAction, OperationActionsTypes, RemoveAllOperationAction, RemoveOperationAction } from 'src/app/ngrx/aircrafts.actions';
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

  constructor(private route : ActivatedRoute, private store : Store<any> , private router : Router) { 
    this.aircraft = {} as Aircraft;  
  }

  ngOnInit(): void {
    this.aircraftsState$ = this.store.pipe(
      map((state) => {
        Object.assign(this.aircraft,state.airbusState.aircraft);    //afin de ne pas altérer la source
        return state.airbusState;
      })
    );  
  }

  onUpdateAircraft(aircraft : Aircraft, state:any){
    console.log(aircraft);
    console.log(state.entities);
    //dispatcher l'action qui permettra de mettre à jour l'api avec les nouvelles données
    this.store.dispatch(new RemoveAllOperationAction({}));
    this.router.navigateByUrl('aircrafts');
  }

  onAddEquipement(equipment : Equipment) {
    this.store.dispatch(new AddOperationAction(equipment));
  }

  onRemEquipement(equipment : Equipment) {
    this.store.dispatch(new RemoveOperationAction(equipment.id));
  }
}
