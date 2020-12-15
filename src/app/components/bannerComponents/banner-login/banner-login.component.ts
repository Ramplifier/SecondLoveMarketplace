import {Component, OnInit} from '@angular/core';
import {GebruikerService} from "../../../services/gebruiker.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'banner-login',
  templateUrl: './banner-login.component.html',
  styleUrls: ['./banner-login.component.css']
})
export class BannerLoginComponent implements OnInit {
  active = false;
  logged = false;
  loginForm: FormGroup;


  constructor(private fb: FormBuilder, public gebruikerService: GebruikerService) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl(),
      wachtwoord: new FormControl()
    })

  }

  verifyGebruiker() {
    this.gebruikerService.verifyGebruiker(this.loginForm.get('email').value, this.loginForm.get('wachtwoord').value)
  }


  loguitGebruiker() {
    this.gebruikerService.loguitGebruiker();
    location.reload();

  }

}
