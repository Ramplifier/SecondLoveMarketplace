import {Adres} from './adres';
import {Bezorgopties} from './bezorgopties';

export interface Gebruiker {
  naam: string;
  email: string;
  wachtwoord: string;
  adres: Adres;
  bezorgwijze: Bezorgopties;
}
