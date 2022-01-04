import { Action } from "@ngrx/store";
import { Aircraft } from "../model/aircraft.model";

export enum AircraftsActionsTypes{
    //Action : Get all aircrafts 
    //s'agissant de l'action consistant à afficher tous les avions, nous avons 3 états possible
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts",                //demande tous les avions
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get All Aircrafts Success",//demande ok
    GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get All Aircrafts Error",    //demande nok

    //Action : Get Designed aircrafts
    GET_DESIGNED_AIRCRAFTS = "[Aircrafts] Get Designed Aircrafts",
    GET_DESIGNED_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Designed Aircrafts Success",
    GET_DESIGNED_AIRCRAFTS_ERROR = "[Aircrafts] Get Designed Aircrafts Error",    

    //Action : Get Development aircrafts
    GET_DEVELOPMENT_AIRCRAFTS = "[Aircrafts] Get Development Aircrafts",
    GET_DEVELOPMENT_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Development Aircrafts Success",
    GET_DEVELOPMENT_AIRCRAFTS_ERROR = "[Aircrafts] Get Development Aircrafts Error",  
    
    //Action : Search aircrafts
    SEARCH_AIRCRAFTS = "[Aircrafts] Search Aircrafts",
    SEARCH_AIRCRAFTS_SUCCESS = "[Aircrafts] Search Aircrafts Success",
    SEARCH_AIRCRAFTS_ERROR = "[Aircrafts] Search Aircrafts Error",  
}

//Get all aircrafts
export class GetAllAircraftsAction implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS;
    constructor(public payload:any) {   
    }
}
export class GetAllAircraftsActionSuccess implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS;
    constructor(public payload:Aircraft[]) {
    }
}
export class GetAllAircraftsActionError implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR;
    constructor(public payload:string) {   //message d'erreur
    }   
}

//Get Designed aircrafts
export class GetDesignedAircraftsAction implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS;
    constructor(public payload:any) {   
    }
}
export class GetDesignedAircraftsActionSuccess implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS;
    constructor(public payload:Aircraft[]) {
    }
}
export class GetDesignedAircraftsActionError implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_ERROR;
    constructor(public payload:string) {   //message d'erreur
    }   
}

//Get Development aircrafts
export class GetDevelopmentAircraftsAction implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS;
    constructor(public payload:any) {   
    }
}
export class GetDevelopmentAircraftsActionSuccess implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_SUCCESS;
    constructor(public payload:Aircraft[]) {
    }
}
export class GetDevelopmentAircraftsActionError implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_ERROR;
    constructor(public payload:string) {   //message d'erreur
    }   
}

//Get Development aircrafts
export class SearchAircraftsAction implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.SEARCH_AIRCRAFTS;
    constructor(public payload:string) {   
    }
}
export class SearchAircraftsActionSuccess implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.SEARCH_AIRCRAFTS_SUCCESS;
    constructor(public payload:Aircraft[]) {
    }
}
export class SearchAircraftsActionError implements Action {
    type: AircraftsActionsTypes = AircraftsActionsTypes.SEARCH_AIRCRAFTS_ERROR;
    constructor(public payload:string) {   //message d'erreur
    }   
}

export type AircraftsActions = GetAllAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError | 
GetDesignedAircraftsAction | GetDesignedAircraftsActionSuccess | GetDesignedAircraftsActionError |
GetDevelopmentAircraftsAction | GetDevelopmentAircraftsActionSuccess | GetDevelopmentAircraftsActionError |
SearchAircraftsAction | SearchAircraftsActionSuccess | SearchAircraftsActionError;