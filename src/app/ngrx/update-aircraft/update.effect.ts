import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { UpdateActionsTypes, UpdateAircraftActionError, UpdateAircraftActionSuccess, UpdatesActions } from "./update.action";
import { AircraftService } from "src/app/services/aircraft.service";

@Injectable() 
export class UpdateAircraftEffects {
    constructor(private effectActions: Actions, private aircraftService : AircraftService ) {
    }

    updateAircraftEffect: Observable<UpdatesActions> = createEffect(  
        () => this.effectActions.pipe(
            ofType(UpdateActionsTypes.UPDATE),                
            mergeMap((action: UpdatesActions) => {           
                return this.aircraftService.putAircraft(action.payload).pipe(
                    map((aircraft) => {    
                        return new UpdateAircraftActionSuccess(aircraft);
                    }), 
                    catchError((err) => of(new UpdateAircraftActionError(err.message)))
                )
            })
        )
    );
}