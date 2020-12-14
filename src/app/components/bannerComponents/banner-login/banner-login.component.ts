import {Component, OnInit} from '@angular/core';
import {GebruikerService} from "../../../services/gebruiker.service";

@Component({
  selector: 'banner-login',
  templateUrl: './banner-login.component.html',
  styleUrls: ['./banner-login.component.css']
})
export class BannerLoginComponent implements OnInit {
  active = false;


  constructor(private gebruikerService: GebruikerService) {
  }

  ngOnInit(): void {
  }

  verifyGebruiker() {
    this.gebruikerService.verifyGebruiker('a@g.nl', 'halloHallo')
  }
}
