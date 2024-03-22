import { AircraftsState, AircraftsStateEnum, initState, LoginStateEnum } from "./aircrafts.state";
import { Action, State } from "@ngrx/store"
import { AircraftsActions, AircraftsActionsTypes, OperationActionsTypes } from "./aircrafts.actions";
import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { Operation } from "../model/operation.model";
import { LoginActionsTypes } from "./login/login.action";
import { LogoutActionsTypes } from "./login/logout.action";
import { Aircraft } from "../model/aircraft.model";
import { UpdateActionsTypes } from "./update-aircraft/update.action";

export const adapter: EntityAdapter<Operation> = createEntityAdapter<Operation>({
    //on a besoin d'un adapter afin de manipuler nos entités avec un certain nombre de méthodes
    //sortComparer: sortByPriority  ->  il est possible d'ajouter des méthodes ici par ex pour trier
    //sinon le trie se fait par défaut sur l'id
});

export const initialState: AircraftsState = adapter.getInitialState({
    aircrafts: [],
    errorMessage: "",
    dataState: AircraftsStateEnum.INITIAL,
    loginState: LoginStateEnum.INITIAL,
    isConnected : false,
    ids: [],
    entities: {},
    aircraft: {} as Aircraft,
    equipments: []
});

export function AircraftsReducer(state : AircraftsState = initialState, action:Action) : AircraftsState {   
    switch(action.type){    //pour chaque action, on retourne un clone du state (immutable)
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS:     
            return {...state, dataState:AircraftsStateEnum.LOADING }   //renvoi clone du state + le nouveau dataState
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS: 
        // Action a été reçu par l'effect qui a fait une demande en base, reçoit les datas et génère l'action pour indiquer que tout est ok
            return {...state, dataState:AircraftsStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload}
            // renvoi clone + nouveau dataState + liste des avions en base contenu dans le payload
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR : 
            return {...state, dataState:AircraftsStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}

        //Get All Equiments
        case AircraftsActionsTypes.GET_ALL_EQUIPMENTS:     
            return {...state, dataState:AircraftsStateEnum.LOADING }  
        case AircraftsActionsTypes.GET_ALL_EQUIPMENTS_SUCCESS: 
            return {...state, dataState:AircraftsStateEnum.LOADED, equipments:(<AircraftsActions> action).payload}
        case AircraftsActionsTypes.GET_ALL_EQUIPMENTS_ERROR : 
            return {...state, dataState:AircraftsStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}

        //Get Aircraft By Id
        case AircraftsActionsTypes.GET_AIRCRAFT_BY_ID:     
            return {...state, dataState:AircraftsStateEnum.LOADING }   
        case AircraftsActionsTypes.GET_AIRCRAFT_BY_ID_SUCCESS: 
            return {...state, dataState:AircraftsStateEnum.LOADED, aircraft:(<AircraftsActions> action).payload}
        // renvoi clone + nouveau dataState + avion en base à partir de l'id
        case AircraftsActionsTypes.GET_AIRCRAFT_BY_ID_ERROR : 
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

        // Gestion Opérations
        case OperationActionsTypes.ADD_OPERATION :
            return adapter.addOne((<AircraftsActions> action).payload, state);
        case OperationActionsTypes.REMOVE_OPERATION :
            return adapter.removeOne((<AircraftsActions> action).payload, state);
        case OperationActionsTypes.REMOVE_ALL_OPERATION :
            return adapter.removeAll(state);

         // Login ou demande d'authenfication
        case LoginActionsTypes.LOGIN :
            return {...state, loginState:LoginStateEnum.INITIAL}
        case LoginActionsTypes.LOGIN_SUCCESS :
            //let isConnect = ((<AircraftsActions> action).payload==[])?false:true;
            return {...state, loginState:LoginStateEnum.RESPONSE_LOGIN_OK, isConnected:true}
        case LoginActionsTypes.LOGIN_DENIED :
            return {...state, loginState:LoginStateEnum.RESPONSE_LOGIN_DENIED, isConnected:false}
        case LoginActionsTypes.LOGIN_ERROR :
            return {...state, loginState:LoginStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}

        // Logout
        case LogoutActionsTypes.LOGOUT :
            return {...state, loginState:LoginStateEnum.INITIAL, isConnected:false}
        case LogoutActionsTypes.LOGOUT_SUCCESS :
            //on peut imaginer ici la communication avec l'api indiquant que l'utilisateur a bien été connecté avec une session ouverte sur le serveur
        case LogoutActionsTypes.LOGOUT_ERROR :
            return {...state, loginState:LoginStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}

        // Update Aircraft
        case UpdateActionsTypes.UPDATE :
            return {...state}
        case UpdateActionsTypes.UPDATE_SUCCESS : 
            return {...state, aircraft:(<AircraftsActions> action).payload }
        case UpdateActionsTypes.UPDATE_ERROR :
            return {...state, errorMessage:(<AircraftsActions> action).payload }
    
        default : 
            return {...state} 
    }
}   //en bref : le reducer reçoit state actuel + action dispatchée dans le store et retourne le new state

