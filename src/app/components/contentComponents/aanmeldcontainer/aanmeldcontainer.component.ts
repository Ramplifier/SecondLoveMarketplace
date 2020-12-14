import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {GebruikerService} from "../../../services/gebruiker.service";
import {Location} from '@angular/common';

@Component({
  selector: 'aanmeldcontainer',
  templateUrl: './aanmeldcontainer.component.html',
  styleUrls: ['./aanmeldcontainer.component.css']
})
export class AanmeldcontainerComponent implements OnInit {
  addGebruikerForm: FormGroup;
  addBezorgoptiesForm: FormGroup;
  addAdresForm: FormGroup;


  constructor(private fb: FormBuilder, private gebruikerService: GebruikerService, private _location: Location) {
  }

  ngOnInit(): void {
    this.addGebruikerForm = this.fb.group({
      naam: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^.+@.+\.nl$')]),
      wachtwoord: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]),
      akkoord: new FormControl(false, [Validators.requiredTrue])
    })
    this.addBezorgoptiesForm = this.fb.group({
      ophalen: new FormControl(false),
      afhalen: new FormControl(false),
      versturen: new FormControl(false),
      rembours: new FormControl(false)
    })

    this.addAdresForm = this.fb.group({
      woonplaats: new FormControl('', [Validators.required]),
      straatnaam: new FormControl('', [Validators.required]),
      huisnummer: new FormControl('', [Validators.required]),
      toevoeging: new FormControl(null),
      postcode: new FormControl('', [Validators.required])
    })
  }

  addGebruiker(): void {
    console.log(this.addGebruikerForm)
    this.gebruikerService.addGebruiker(this.addGebruikerForm.value, this.addBezorgoptiesForm.value, this.addAdresForm.value);
    alert("je hebt nu een account! Yeaj")
    this._location.back();
  }


}
