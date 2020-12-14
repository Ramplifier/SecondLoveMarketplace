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
  private loggedGebruiker = {} as Gebruiker;

  constructor(private http: HttpClient) {
  }

  addGebruiker(gebruiker: Gebruiker, bezorgwijze: Bezorgopties, adres: Adres): void {
    gebruiker.bezorgwijze = bezorgwijze;
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

    this.http.post(`${this.url}/login`, gegevens).subscribe({
      next: data => {
        console.log(data);
      }

    });

  }

}
