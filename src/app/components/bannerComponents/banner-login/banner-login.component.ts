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
  loginForm: FormGroup;


  constructor(private fb: FormBuilder, private gebruikerService: GebruikerService) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('em'),
      wachtwoord: new FormControl('ww')
    })
  }

  verifyGebruiker() {
    this.gebruikerService.verifyGebruiker(this.loginForm.get('email').value, this.loginForm.get('wachtwoord').value)
  }
}
