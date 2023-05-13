import { Action } from "@ngrx/store";
import { Aircraft } from "../model/aircraft.model";
import { Equipment } from "../model/equipment.model";
import { Operation } from "../model/operation.model";
import { User } from "../model/user.model";

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

    //Action : get aircraft by id
    GET_AIRCRAFT_BY_ID = "[Aircraft] Get Aircraft By Id",
    GET_AIRCRAFT_BY_ID_SUCCESS = "[Aircraft] Get Aircraft By Id Success",
    GET_AIRCRAFT_BY_ID_ERROR = "[Aircraft] Get Aircraft By Id Error",   

    //Action : get equipments
    GET_ALL_EQUIPMENTS = "[Equipments] Get All Equipments",
    GET_ALL_EQUIPMENTS_SUCCESS = "[Equipments] Get All Equipments Success",
    GET_ALL_EQUIPMENTS_ERROR = "[Equipments] Get All Equipments Error",    
}

//Get One aircraft By Id
export class GetAircraftByIdAction implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_AIRCRAFT_BY_ID;
    constructor(public payload:number) {   
    }
}
export class GetAircraftByIdActionSuccess implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_AIRCRAFT_BY_ID_SUCCESS;
    constructor(public payload:Aircraft) {   
    }
}
export class GetAircraftByIdActionError implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_AIRCRAFT_BY_ID_ERROR;
    constructor(public payload:string) {   
    }
}

//Get all Equipments
export class GetAllEquipmentsAction implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_EQUIPMENTS;
    constructor(public payload:any) {   
    }
}
export class GetAllEquipmentsActionSuccess implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_EQUIPMENTS_SUCCESS;
    constructor(public payload:Equipment[]) {
    }
}
export class GetAllEquipmentsActionError implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_EQUIPMENTS_ERROR;
    constructor(public payload:string) {   //message d'erreur
    }   
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

//Get Search aircrafts
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
SearchAircraftsAction  | SearchAircraftsActionSuccess  | SearchAircraftsActionError |
GetAircraftByIdAction  | GetAircraftByIdActionSuccess  | GetAircraftByIdActionError |
GetAllEquipmentsAction | GetAllEquipmentsActionSuccess | GetAllEquipmentsActionError

/*--------------------------------------------*/

export enum OperationActionsTypes {
    //Action : Operations
    ADD_OPERATION = "[Operation] Add One",        //ajout d'une opération
    REMOVE_OPERATION = "[Operation] Remove One",  //supprimer une opération
    REMOVE_ALL_OPERATION = "[Operation] Remove All Operation",  
}
export class AddOperationAction implements Action {
    type: OperationActionsTypes = OperationActionsTypes.ADD_OPERATION;
    constructor(public payload:Equipment) {   
    }   
}
export class RemoveOperationAction implements Action {
    type: OperationActionsTypes = OperationActionsTypes.REMOVE_OPERATION;
    constructor(public payload:number) {   
    }   
}

export class RemoveAllOperationAction implements Action {
    type: OperationActionsTypes = OperationActionsTypes.REMOVE_ALL_OPERATION;
    constructor(public payload:any) {   
    }   
}

export type OperationsActions = AddOperationAction | RemoveOperationAction | RemoveAllOperationAction;