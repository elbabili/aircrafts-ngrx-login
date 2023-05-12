
import { Action } from "@ngrx/store";

export enum LogoutActionsTypes {    

    //Action : LogOut
    LOGOUT = "[Logout] On Logout",
    LOGOUT_SUCCESS = "[Logout] On Logout Success",
    LOGOUT_ERROR = "[Logout] On Logout Error"
}

//Logou action
export class LogoutAction implements Action {
    type: LogoutActionsTypes = LogoutActionsTypes.LOGOUT;          
    constructor() {
    }
}
export class LogoutActionSuccess implements Action {
    type: LogoutActionsTypes = LogoutActionsTypes.LOGOUT_SUCCESS;  
    constructor(public payload:any) {
    }
}
export class LogoutActionError implements Action {
    type: LogoutActionsTypes = LogoutActionsTypes.LOGOUT_ERROR;    
    constructor(public payload:string) {   //message d'erreur
    }   
}

export type LogoutsActions = LogoutAction | LogoutActionSuccess | LogoutActionError;