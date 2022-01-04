import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Laboratory } from 'src/app/labo/laboratory';
import { Aircraft } from 'src/app/model/aircraft.model';
import { selectAlertAircrafts } from 'src/app/ngrx/aircrafts.selectors';

@Component({
  selector: 'app-aircrafts-alert',
  templateUrl: './aircrafts-alert.component.html',
  styleUrls: ['./aircrafts-alert.component.css']
})
export class AircraftsAlertComponent implements OnInit {

  alertAircfrats$: Observable<Aircraft[]> | null = null;
  labo : Laboratory = new Laboratory();

  constructor(private store: Store<any>) {
    this.alertAircfrats$ = store.select(selectAlertAircrafts);
  }

  ngOnInit(): void {
    this.labo.tests();
  }
}
