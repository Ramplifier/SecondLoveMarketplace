import {Component, OnInit} from '@angular/core';
import {GebruikerService} from "../../../services/gebruiker.service";

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public gebruikerService: GebruikerService) {
  }

  ngOnInit(): void {
  }

}
