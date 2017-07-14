import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
//import { ErrorParserService } from '../../shared/services';  //  <---\
//import { ErrorParserService } from '@app/shared/services';   //  <---|--- These all work because of path in /tsconfig.json
import { ErrorParserService } from '@app-shared/services';     //  <---/

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService],
})
export class RegisterComponent implements OnInit {

  model = {};
  submitted = false;
  registered = false;
  errorMessages = [];

  constructor(private registerService: RegisterService,
              private errorParserService: ErrorParserService) { }

  ngOnInit() {
  }

  onSubmit() { 
    this.submitted = true;
    this.registerService.register(this.model)
      .subscribe(
        resp => { 
          this.registered = true; 
        },
        err => {
          this.registered = false;
          this.errorMessages = this.errorParserService.parseErrors(err.json());
        },
        () => {
          // Finally
        }
      );
  }
}
