import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, tap } from 'rxjs';
import { Aircraft, Piece } from 'src/app/model/aircraft.model';
import { Equipment } from 'src/app/model/equipment.model';
import { AddOperationAction, OperationActionsTypes, RemoveAllOperationAction, RemoveOperationAction } from 'src/app/ngrx/aircrafts.actions';
import { AircraftsState, AircraftsStateEnum } from 'src/app/ngrx/aircrafts.state';
import { UpdateActionsTypes, UpdateAircraftAction } from 'src/app/ngrx/update-aircraft/update.action';

@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.css']
})
export class AircraftComponent implements OnInit,OnDestroy {
  aircraft : Aircraft;
  aircraftsState$:Observable<AircraftsState> | null = null; 
  equipments : Piece[] = [];
  readonly aircraftsStateEnum = AircraftsStateEnum;

  constructor(private route : ActivatedRoute, private store : Store<any> , private router : Router) { 
    this.aircraft = {} as Aircraft;  
  }

  ngOnInit(): void {
    this.aircraftsState$ = this.store.pipe(
      map((state) => {
        Object.assign(this.aircraft,state.airbusState.aircraft);    //afin de ne pas altérer la source
        Object.assign(this.equipments,this.aircraft.equipments);
        return state.airbusState;
      })
    );  
  }

  ngOnDestroy(): void {
    this.store.dispatch(new RemoveAllOperationAction({}));  
  }

  onUpdateAircraft(aircraft : Aircraft, state:any) {
    //dispatcher l'action qui permettra de mettre à jour l'api avec les nouvelles données        
    aircraft.equipments = Object.values(state.entities);
    this.store.dispatch(new UpdateAircraftAction(aircraft))
    this.store.dispatch(new RemoveAllOperationAction(null));
    this.router.navigateByUrl('aircrafts');
  }

  onAddEquipement(equipment : Equipment) {
    this.store.dispatch(new AddOperationAction(equipment));
  }

  onRemEquipement(equipment : Equipment) {
    this.store.dispatch(new RemoveOperationAction(equipment.id));
  }
}
