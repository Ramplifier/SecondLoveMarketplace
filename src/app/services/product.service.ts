import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product";
import {Observable} from "rxjs";
import {Bezorgopties} from "../models/bezorgopties";
import {GebruikerService} from "./gebruiker.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:9080/MarktPleinApp_war/api/producten';

  constructor(private http: HttpClient, private gebruikerService: GebruikerService) {
  }

  addProduct(product: Product, bezorgopties: Bezorgopties) {
    product.bezorgopties = bezorgopties;
    product.gebruiker = this.gebruikerService.getLoggedGebruiker();
    console.log(product)
    this.http.post<Product>(this.url, product).subscribe();
  }

  getAllProducten(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

}
