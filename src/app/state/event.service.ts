import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ActionEvent } from "./aircraft.state";

@Injectable({providedIn:"root"})    //spécifier que c'est un service accessible dans root (pas necessaire de le déclarer dans le module)
export class EventService {
    //Objet permettant la communication entre les composants
    eventSubject : Subject<ActionEvent> = new Subject<ActionEvent>();
    //type d'évènements publiés par notre objet
    eventSubjectObservable = this.eventSubject.asObservable();
    //Observable qui permet à tous les composants qui le souhaitent de recevoir les actions des autres

    publishEvent(event : ActionEvent){  //méthode de publication d'un évènement ou message
        this.eventSubject.next(event);  //tous les composants qui ont soucrit à notre service, recevront l'évt publié
    }                                   //ils devront faire auparavant un subscribe à eventSubjectObservable
}
