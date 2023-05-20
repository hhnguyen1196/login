import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';

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

  constructor(
    private router: Router,
    private hardcodeAuthenticationService: HardcodeAuthenticationService) { }

  ngOnInit() {
  }
  handleLogin(): void {
    const authenticationUser = this.hardcodeAuthenticationService.authentication(this.username, this.password);
    if (authenticationUser) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }
}
