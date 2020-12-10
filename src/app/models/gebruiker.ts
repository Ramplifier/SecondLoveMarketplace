import {Adres} from './adres';
import {Bezorgwijze} from './bezorgwijze';

export interface Gebruiker {
  naam: string;
  email: string;
  wachtwoord: string;
  adres: Adres;
  bezorgwijze: Bezorgwijze;
}
