import {Injectable} from '@angular/core';
import {Gebruiker} from '../models/gebruiker';
import {HttpClient} from "@angular/common/http";
import {Bezorgwijze} from "../models/bezorgwijze";
import {Adres} from "../models/adres";

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {
  private url = 'http://localhost:9080/MarktPleinApp_war/api/gebruikers';

  constructor(private http: HttpClient) {
  }

  addGebruiker(gebruiker: Gebruiker, bezorgwijze: Bezorgwijze, adres: Adres): void {
    gebruiker.bezorgwijze = bezorgwijze;
    gebruiker.adres = adres;
    console.log(gebruiker);
    this.http.post<Gebruiker>(this.url, gebruiker).subscribe();
  }

}
