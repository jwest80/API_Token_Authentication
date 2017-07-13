import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ErrorParserService } from '../../errors/error-parser.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  model = {grant_type: 'password'};
  errorMessages = [];

  constructor(private loginService: LoginService,
              private errorParserService: ErrorParserService) { }

  ngOnInit() {
  }

  onSubmit() { 
    this.loginService.login(this.model)
      .subscribe(
        resp => { 
          console.log(resp.json());
          localStorage.setItem('currentUser', JSON.stringify(resp.json())); 
        },
        err => {
          this.errorMessages = this.errorParserService.parseErrors(err.json());
        },
        () => {
          // Finally
        }
      );
  }

}
