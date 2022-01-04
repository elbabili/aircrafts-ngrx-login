import { Aircraft } from "../model/aircraft.model";

export enum AircraftsStateEnum{  // les différents états du state
    LOADING = "Loading",    //chargement en cours
    LOADED = "Loaded",      //chargé
    ERROR = "Error",        //erreur
    INITIAL = "Initial"     //état initial
}
export interface AircraftsState {    //structure de notre STATE
    aircrafts : Aircraft[],          //liste d'avions qui s'affichent
    errorMessage:string,             //un message d'erreur
    dataState : AircraftsStateEnum   //état du state
}
//il est nécessaire de définir l'état initial du state avec des valeurs par défaut
export const initState : AircraftsState = {
    aircrafts : [],
    errorMessage:"",
    dataState : AircraftsStateEnum.INITIAL
}