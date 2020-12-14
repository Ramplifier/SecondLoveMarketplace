import {Bezorgwijze} from "./bezorgwijze";
import {Gebruiker} from "./gebruiker";

export interface Product {
  naam: string;
  beschrijving: string;
  categorie: string;
  prijs: number;
  gebruiker: Gebruiker;
  datumPlaatsing: any;
  bezorgwijze: Bezorgwijze;
}
