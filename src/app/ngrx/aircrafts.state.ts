import { EntityState } from "@ngrx/entity";
import { Aircraft } from "../model/aircraft.model";
import { Operation } from "../model/operation.model";
import { Equipment } from "../model/equipment.model";

export enum AircraftsStateEnum{  // les différents états du state
    LOADING = "Loading",    //chargement en cours
    LOADED = "Loaded",      //chargé
    ERROR = "Error",        //erreur
    INITIAL = "Initial"     //état initial
}
export enum LoginStateEnum{  
    REQUEST_LOGIN     = "request login",          //demande d'authentification
    RESPONSE_LOGIN_OK = "response login ok",      //demande d'auth accepté
    RESPONSE_LOGIN_DENIED = "response login nok", //demande d'auth refusé
    ERROR = "Error",        //erreur 
    INITIAL = "Initial"     //état initial
}



export interface AircraftsState extends EntityState<Operation> {    //structure de notre STATE
    aircrafts : Aircraft[],           //liste d'avions qui s'affichent
    errorMessage:string,              //un message d'erreur
    dataState : AircraftsStateEnum,   //état du state s'agissant des avions
    loginState : LoginStateEnum,      //état du state s'agissant de l'authentification
    isConnected : boolean,
    aircraft : Aircraft,
    equipments : Equipment[]
}

//il est nécessaire de définir l'état initial du state avec des valeurs par défaut
export const initState : AircraftsState = {
    aircrafts: [],
    errorMessage: "",
    dataState: AircraftsStateEnum.INITIAL,
    loginState: LoginStateEnum.INITIAL,
    isConnected : false,
    ids: [],
    entities: {},
    aircraft: {} as Aircraft,
    equipments: []
}