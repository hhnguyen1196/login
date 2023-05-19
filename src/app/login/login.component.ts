import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage = 'Information Login invalid';
  invalidLogin = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  handleLogin(): void {
    if (this.username === 'hhnguyen1196' && this.password === 'karina') {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }
}
