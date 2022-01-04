import { AircraftsState, AircraftsStateEnum, initState } from "./aircrafts.state";
import { Action } from "@ngrx/store"
import { AircraftsActions, AircraftsActionsTypes } from "./aircrafts.actions";

export function AircraftsReducer(state : AircraftsState = initState, action:Action) : AircraftsState {   
    switch(action.type){    //pour chaque action, on retourne un clone du state (immutable)
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS:     
            return {...state, dataState:AircraftsStateEnum.LOADING }   //renvoi clone du state + le nouveau dataState
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS: 
        // Action a été reçu par l'effect qui a fait une demande en base, reçoit les datas et génère l'action pour indiquer que tout est ok
            return {...state, dataState:AircraftsStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload}
            // renvoi clone + nouveau dataState + liste des avions en base contenu dans le payload
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR : 
            return {...state, dataState:AircraftsStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}
        
        // Get Designed Aircrafts
        case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS :
            return {...state, dataState:AircraftsStateEnum.LOADING }
        case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS :
            return {...state, dataState:AircraftsStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload}
        case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_ERROR :
            return {...state, dataState:AircraftsStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}

        // Get Development Aircrafts
        case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS :
            return {...state, dataState:AircraftsStateEnum.LOADING }
        case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_SUCCESS :
            return {...state, dataState:AircraftsStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload}
        case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_ERROR :
            return {...state, dataState:AircraftsStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}

        // Get Search Aircrafts
        case AircraftsActionsTypes.SEARCH_AIRCRAFTS :
            return {...state, dataState:AircraftsStateEnum.LOADING}
        case AircraftsActionsTypes.SEARCH_AIRCRAFTS_SUCCESS :
            return {...state, dataState:AircraftsStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload}
        case AircraftsActionsTypes.SEARCH_AIRCRAFTS_ERROR :
            return {...state, dataState:AircraftsStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}

        default : 
            return {...state} 
    }
}   //en bref : le reducer reçoit state actuel + action dispatchée dans le store et retourne le new state
