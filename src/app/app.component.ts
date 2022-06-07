import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { User } from './model/user.model';
import { selectIsConnected } from './ngrx/aircrafts.selectors';
import { AircraftsState, LoginStateEnum } from './ngrx/aircrafts.state';
import { LogoutAction } from './ngrx/login/logout.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'airbus-app-ngrx';

  isConnected$: Observable<Boolean> | null = null;
    
  constructor(private store:Store<any>, private router: Router) {
    this.isConnected$ = store.select(selectIsConnected);
  }

  ngOnInit(): void { 
  }
  
  onLogout(){
    this.store.dispatch(new LogoutAction());
    this.router.navigate(['login']);
  }
}
