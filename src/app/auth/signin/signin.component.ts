import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public username = '';
  public password = '';
  errorMessage = '';

  sub: Subscription = null;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.auth.attempAuth({ username: this.username, password: this.password })
      .subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        this.errorMessage = 'Nie udalo sie zalogowac';
        return;
      }
      );
  }

}
