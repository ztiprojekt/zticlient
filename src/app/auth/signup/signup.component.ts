import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

const apiUrl = environment.baseApiUrl;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public username = '';
  public password = '';
  errorMessage = '';


  sub: Subscription = null;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  submit() {
    this.http.post(`${apiUrl}/users/${this.username}/${this.password}`, {}).subscribe(
      (data) => {
        this.errorMessage = 'Udana rejestracja. Zaloguj sie';
        
      },
      (err) => {
        this.errorMessage = 'Rejestracja nie powiodla sie';
        return;
      }
    );
  }

}
