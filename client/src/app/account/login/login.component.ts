import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from './login.service';
import { AuthenticationService } from '@app-shared/services'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  model = {grant_type: 'password'};
  submitted = false;
  errorMessage: String;

  constructor(private loginService: LoginService,
              private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  isAuthenticated() {
    return this.authenticationService.exists();
  }

  welcome() {
    return "Welcome " + this.authenticationService.read().userName + "!";
  }

  logout() {
    this.authenticationService.delete();
  }

  onSubmit() { 
    this.errorMessage = null;
    this.loginService.login(this.model)
      .subscribe(
        resp => { 
          this.authenticationService.create(resp);
          this.router.navigate(['values']);
        },
        err => {
          this.errorMessage=err.json().error_description;
          console.log(this.errorMessage);
        },
        () => {
          // Finally
          console.log('Login is complete');
        }
      );
  }

}
