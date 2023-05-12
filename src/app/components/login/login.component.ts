import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { User } from "src/app/model/user.model";
import { AircraftsState, LoginStateEnum } from 'src/app/ngrx/aircrafts.state';
import { LoginAction } from 'src/app/ngrx/login/login.action';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm : FormGroup;
  user : User | undefined;
  error : string | undefined;
  connected : boolean = false;

  aircraftsState$:Observable<AircraftsState> | null = null; 
  readonly loginStateEnum = LoginStateEnum;
  
  constructor(private store:Store<any> , private formBuilder : FormBuilder, private route:Router) {
    this.myForm = this.formBuilder.group({
      email : ['', [Validators.required,Validators.pattern('[a-z0-9.@]*')]],
      pwd : ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.aircraftsState$ = this.store.pipe(
      map((state) => { 
        if(state.airbusState.isConnected) {
          this.route.navigateByUrl('aircrafts');
        }
        return state.airbusState;
      })  
);  
  }

  onLogin(form : FormGroup): void {
    if(form.valid){
      //console.log(form.value)
      this.store.dispatch(new LoginAction(form.value));   //une fois validé le formulaire, l'action est lancée avec les credentials
    }
  }
}


/*
- Réalisation d'un composant de connexion
- Réalisation de l'action dispatché par celui-ci
- modification du state selon les besoins
- Mise en oeuvre du composant qui suit l'action 
- Interception par le reducer
- Interception par l'effect
- ajouter dans le module le nouvel effect si fichier différent


* ajout de la Gestion du Locale storage
* solution à base de Guard + CanActivate
*/