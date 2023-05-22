import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BasicAuthenticationService} from '../service/basic-authentication.service';
import {HardcodeAuthenticationService} from '../service/hardcode-authentication.service';

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
    private hardcodeAuthenticationService: HardcodeAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) {
  }

  ngOnInit() {
  }

  handleBasicLogin(): void {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(
      data => {
        this.invalidLogin = false;
        this.router.navigate(['welcome', this.username]);
      },
      error => {
        this.invalidLogin = true;
      });
  }
}
