export enum AircraftsActionsTypes {
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts",
    GET_DESIGNED_AIRCRAFTS = "[Aircrafts] Get Designed Aircrafts",
    GET_DEVELOPMENT_AIRCRAFTS = "[Aircrafts] Get Developed Aircrafts", 
    GET_SEARCH_AIRCRAFTS = "[Aircrafts] Get Search Aircrafts"
}

//nous définissons ici un objet évènement caractérisé par le type d'évt et son contenu indéfini
export interface ActionEvent {
    type : AircraftsActionsTypes,
    payload? : any
}

export enum DataStateEnum {
    LOADING,
    LOADED,
    ERROR
}

export interface AppDataState<T> {
    dataState? : DataStateEnum,
    data? : T,
    errorMessage?:string
}