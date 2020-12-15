import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../../services/product.service";
import {GebruikerService} from "../../../services/gebruiker.service";

@Component({
  selector: 'app-artikeltoevoegen',
  templateUrl: './artikeltoevoegen.component.html',
  styleUrls: ['./artikeltoevoegen.component.css']
})
export class ArtikeltoevoegenComponent implements OnInit {
  addProductForm: FormGroup;
  addBezorgoptiesForm: FormGroup;


  constructor(private fb: FormBuilder, private productService: ProductService, public gebruikerService: GebruikerService) {
    this.addBezorgoptiesForm = this.fb.group({
      ophalen: new FormControl(false),
      afhalen: new FormControl(false),
      versturen: new FormControl(false),
      rembours: new FormControl(false)
    })
    this.addProductForm = this.fb.group({
      naam: new FormControl(),
      beschrijving: new FormControl(),
      categorie: new FormControl(),
      prijs: new FormControl(),
    })

  }

  ngOnInit(): void {
  }

  addProduct() {
    this.productService.addProduct(this.addProductForm.value, this.addBezorgoptiesForm.value)
  }
}
