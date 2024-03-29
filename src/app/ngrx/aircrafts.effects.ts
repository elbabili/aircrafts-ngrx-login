import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { AircraftService } from "../services/aircraft.service";
import { AuthenticateService } from "../services/authenticate.service";
import { AircraftsActions, AircraftsActionsTypes, GetAircraftByIdActionError, GetAircraftByIdActionSuccess, GetAllAircraftsActionError, GetAllAircraftsActionSuccess, GetAllEquipmentsActionError, GetAllEquipmentsActionSuccess, GetDesignedAircraftsActionError, GetDesignedAircraftsActionSuccess, GetDevelopmentAircraftsActionError, GetDevelopmentAircraftsActionSuccess, SearchAircraftsActionError, SearchAircraftsActionSuccess } from "./aircrafts.actions";

@Injectable()  //décorateur spéficie qu'il s'agit d'un service
export class AircraftsEffects {
    constructor(private aircraftService: AircraftService, private effectActions: Actions , private authService : AuthenticateService) {
    }

    getAllAircraftsEffect: Observable<AircraftsActions> = createEffect(     //nous souhaitons créer un effect ici sous condition, donc on écoute les actions        
        () => this.effectActions.pipe(                           //dès qu'une action arrive, on vérifie son type
            ofType(AircraftsActionsTypes.GET_ALL_AIRCRAFTS),  //si l'action est de type GET_ALL_AIRCRAFTS alors étape suivante : mergeMap
            mergeMap((action: AircraftsActions) => {    //mergeMap permet ici de renvoyer un Observable par action
                return this.aircraftService.getAircrafts().pipe(  //attente réception des données en base (liste des avions)
                    map((aircrafts) => new GetAllAircraftsActionSuccess(aircrafts)), //si reçu, alors on retourne un Observable<Action>
                    //dont le payload est la liste des avions
                    //l'action une fois émise va être traité par le Reducer
                    //case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS:
                    catchError((err) => of(new GetAllAircraftsActionError(err.message))) //s'il y a erreur, génération d'une autre action
                )
            })
        )
    );

    getDesignedAircraftsEffect: Observable<AircraftsActions> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS),
            mergeMap((action: AircraftsActions) => {
                return this.aircraftService.getDesignedAircrafts().pipe(
                    map((aircrafts) => new GetDesignedAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new GetDesignedAircraftsActionError(err.message)))
                )
            })
        )
    );

    getDevelopmentAircraftsEffect: Observable<AircraftsActions> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS),
            mergeMap((action: AircraftsActions) => {
                return this.aircraftService.getDevelopementAircrafts().pipe(
                    map((aircrafts) => new GetDevelopmentAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new GetDevelopmentAircraftsActionError(err.message)))
                )
            })
        )
    );

    searchAircraftsEffect: Observable<AircraftsActions> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionsTypes.SEARCH_AIRCRAFTS),
            mergeMap((action: AircraftsActions) => {
                return this.aircraftService.getAircraftsByKeyword(action.payload).pipe(
                    map((aircrafts) => new SearchAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new SearchAircraftsActionError(err.message)))
                )
            })
        )
    );

    getAircraftByIdEffect: Observable<AircraftsActions> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_AIRCRAFT_BY_ID),
            mergeMap((action: AircraftsActions) => {
                return this.aircraftService.getAircraftById(action.payload).pipe(
                    map((aircraft) => new GetAircraftByIdActionSuccess(aircraft)),
                    catchError((err) => of(new GetAircraftByIdActionError(err.message)))
                )
            })
        )
    );

    getAllEquipmentsEffect: Observable<AircraftsActions> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_ALL_EQUIPMENTS),
            mergeMap((action: AircraftsActions) => {
                return this.aircraftService.getEquipments().pipe(
                    map((equipments) => new GetAllEquipmentsActionSuccess(equipments)),
                    catchError((err) => of(new GetAllEquipmentsActionError(err.message)))
                )
            })
        )
    );
}