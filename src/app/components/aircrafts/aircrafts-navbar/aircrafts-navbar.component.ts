import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllAircraftsAction, GetDesignedAircraftsAction, GetDevelopmentAircraftsAction, SearchAircraftsAction } from 'src/app/ngrx/aircrafts.actions';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit {
  constructor(private store:Store<any>) { //injection du store en spécifiant ou pas le type du state
  }
  ngOnInit(): void {
  }
  getAllAircrafts(){
    //User a cliqué sur le bouton afficher tous les produits aussi il faut dispatcher l'action à l'aide du store
    this.store.dispatch(new GetAllAircraftsAction({}));
    //Le reducer et l'effect ont reçu la notification du Store et ils ont pris le relais chacun de son côté    
  }
  
  getDesignAircrafts(){
    this.store.dispatch(new GetDesignedAircraftsAction({}));
  }

  getDeveloppementAircrafts(){
    this.store.dispatch(new GetDevelopmentAircraftsAction({}));
  }

  onSearch(value : any){
    this.store.dispatch(new SearchAircraftsAction(value.keyword));
    //on transmet le mot clé du formulaire
  }
}
