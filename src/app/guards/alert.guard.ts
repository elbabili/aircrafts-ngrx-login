import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, map, tap } from 'rxjs';
import { selectIsConnected } from '../ngrx/aircrafts.selectors';
import { AircraftsState } from '../ngrx/aircrafts.state';

@Injectable({
  providedIn: 'root'
})
export class AlertGuard implements CanActivate {  
  constructor(private store:Store<any>,private route : Router) {  
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.store.pipe(   // création d'un pipeline sur notre store 
              select(selectIsConnected),  //afin d'extraire du state, à l'aide d'un selecteur, l'attribut permettant de savoir si nous sommes connectés
              tap(isConnected => {        //y plus qu'à vérifier à l'aide de l'opérateur tap permettant d'avoir accès à la donnée en lecture seule ici
                if(!isConnected) 
                  this.route.navigateByUrl("404");
              })
      );
  }  
}