import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { AuthenticateService } from "src/app/services/authenticate.service";
import { LoginActionDenied, LoginActionError, LoginActionsTypes, LoginActionSuccess, LoginsActions } from "./login.action";

@Injectable() 
export class LoginEffects {
    constructor(private effectActions: Actions , private authService : AuthenticateService) {
    }

    loginEffect: Observable<LoginsActions> = createEffect(  
        () => this.effectActions.pipe(
            ofType(LoginActionsTypes.LOGIN),                
            mergeMap((action: LoginsActions) => {           
                return this.authService.login(action.payload).pipe(
                    map((user) => {    
                        return (Object.keys(user).length == 0) ? new LoginActionDenied(null) : new LoginActionSuccess(user);
                    }), 
                    catchError((err) => of(new LoginActionError(err.message)))
                )
            })
        )
    );
}