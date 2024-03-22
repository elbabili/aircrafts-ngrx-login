import { Action } from "@ngrx/store";

export enum LoginActionsTypes {    
    //Action : Login
    LOGIN = "[Login] On Login",                     //action de demande d'authentification
    LOGIN_SUCCESS = "[Login] On Login Success",     //authentification ok
    LOGIN_DENIED = "[Login] On Login Denied",       //authentification refusé
    LOGIN_ERROR = "[Login] On Login Error",         //erreur lors de l'authentification
}

//Login Action
export class LoginAction implements Action {
    type: LoginActionsTypes = LoginActionsTypes.LOGIN;          
    constructor(public payload:string){
    }
}
export class LoginActionSuccess implements Action {
    type: LoginActionsTypes = LoginActionsTypes.LOGIN_SUCCESS;  
    constructor(public payload:any) {
    }
}
export class LoginActionDenied implements Action {
    type: LoginActionsTypes = LoginActionsTypes.LOGIN_DENIED;   
    constructor(public payload:any) {
    }
}
export class LoginActionError implements Action {
    type: LoginActionsTypes = LoginActionsTypes.LOGIN_ERROR;    
    constructor(public payload:string) {   //message d'erreur
    }   
}

export type LoginsActions = LoginAction | LoginActionSuccess | LoginActionDenied | LoginActionError;