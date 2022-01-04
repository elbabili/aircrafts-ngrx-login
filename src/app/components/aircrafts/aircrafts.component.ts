import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectCountAlertAircrafts } from 'src/app/ngrx/aircrafts.selectors';
import { AircraftsState, AircraftsStateEnum } from 'src/app/ngrx/aircrafts.state';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {
  aircraftsState$:Observable<AircraftsState> | null = null; 
  readonly aircraftsStateEnum = AircraftsStateEnum;
  countAlertAircfrats$ : Observable<number> | undefined;
  
  constructor(private store:Store<any>) {  
    this.countAlertAircfrats$ = store.select(selectCountAlertAircrafts);
  }

  ngOnInit(): void {  //notre composant doit observer le state dans le store
    this.aircraftsState$ = this.store.pipe(//on écoute ce qui se passe dans le store, dès qu'on reçoit les données, on peut faire un map
          //dit autrement : nous recevons le state dès qu'il change afin de permettre l'affichage adéquat de ses données
          map((state)=> state.airbusState)  
    );  
  }
}
