import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aircraft } from '../model/aircraft.model';

@Injectable({providedIn: 'root'})  //Service + accessible dans toute l'appli

export class AircraftService {

  constructor(private http:HttpClient) { }

  //liste de tous les avions en base => une fois sur 2 on souhaite provoquer une erreur
  //méthode renvoi un objet de type Observable contenant une liste d'avions sous la forme d'un tableau
  public getAircrafts():Observable<Aircraft[]> {
    let host = Math.random() > 0.1 ? environment.host : environment.unreachableHost;
    return this.http.get<Aircraft[]>(host+"/aircrafts");
  //précisons dans la méthode get que nous attendons une liste d'avions      
  }

  //liste des avions en phase design ou à l'étude
  public getDesignedAircrafts():Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts?design=true");
  }

  //liste des avions en phase de développement ou construction
  public getDevelopementAircrafts():Observable<Aircraft[]>{
    return this.http.get<Aircraft[]>(environment.host+"/aircrafts?development=true");
  }

  //renvoi un avion à partir de l'id
  public getAircraftById(id:number) : Observable<Aircraft> {
    return this.http.get<Aircraft>(environment.host + "/aircrafts/" + id)
  }

  //renvoi la liste d'avions contenant le mot clé
  public searchAircrafts(keyword:string) : Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(environment.host + "/aircrafts?prog_like=" + keyword)
  }
}
