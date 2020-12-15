import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../models/product";

@Component({
  selector: 'productcontainer',
  templateUrl: './productcontainer.component.html',
  styleUrls: ['./productcontainer.component.css']
})
export class ProductcontainerComponent implements OnInit {
  productsArray: Product[];

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.getAllProducten().subscribe(result => {
      this.productsArray = result;
      console.log(this.productsArray);
    })


  }

  getNaamEigenaar(product: Product) {
    return product.gebruiker.naam;
  }
}
