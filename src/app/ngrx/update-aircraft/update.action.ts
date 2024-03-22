import { Action } from "@ngrx/store";

export enum UpdateActionsTypes {    
    UPDATE = "[Update] On Update Aircraft",           
    UPDATE_SUCCESS = "[Update] On Update Aircraft Success",     
    UPDATE_ERROR = "[Update] On Update Aircraft Error",         
}

export class UpdateAircraftAction implements Action {
    type: UpdateActionsTypes = UpdateActionsTypes.UPDATE;          
    constructor(public payload:any){
    }
}
export class UpdateAircraftActionSuccess implements Action {
    type: UpdateActionsTypes = UpdateActionsTypes.UPDATE_SUCCESS
    constructor(public payload:any) {
    }
}
export class UpdateAircraftActionError implements Action {
    type: UpdateActionsTypes = UpdateActionsTypes.UPDATE_ERROR;    
    constructor(public payload:string) {   //message d'erreur
    }   
}

export type UpdatesActions = UpdateAircraftAction | UpdateAircraftActionSuccess | UpdateAircraftActionError;