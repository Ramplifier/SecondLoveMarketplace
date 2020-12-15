import {Injectable} from '@angular/core';
import {Gebruiker} from '../models/gebruiker';
import {HttpClient} from "@angular/common/http";
import {Bezorgopties} from "../models/bezorgopties";
import {Adres} from "../models/adres";

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {
  private url = 'http://localhost:9080/MarktPleinApp_war/api/gebruikers';
  loggedGebruiker = {} as Gebruiker;

  constructor(private http: HttpClient) {
  }

  addGebruiker(gebruiker: Gebruiker, bezorgopties: Bezorgopties, adres: Adres): void {
    gebruiker.bezorgopties = bezorgopties;
    gebruiker.adres = adres;
    console.log(gebruiker);
    this.http.post<Gebruiker>(this.url, gebruiker).subscribe();
  }

  verifyGebruiker(email: string, wachtwoord: string) {
    let gegevens = {
      email: email,
      wachtwoord: wachtwoord
    };
    console.log(gegevens);
    this.http.post<Gebruiker>(`${this.url}/login`, gegevens).subscribe({
      next: data => {

        localStorage.setItem('gebruiker', JSON.stringify(data))
        location.reload();
      }
    });
  }

  loguitGebruiker() {
    localStorage.clear();
  }

  gebruikerLogged() {
    return localStorage.length > 0;
  }

  getLoggedGebruiker() {
    if (localStorage.length > 0) {
      return JSON.parse(localStorage.getItem("gebruiker"));
    }

    return null;

  }

  getGebruikerNaam() {
    const g: Gebruiker = JSON.parse(localStorage.getItem("gebruiker"));
    return g.naam;
  }

  getGebruikerBezorgOpties() {
    const g: Gebruiker = JSON.parse(localStorage.getItem("gebruiker"));
    return g.bezorgopties;
  }


}
