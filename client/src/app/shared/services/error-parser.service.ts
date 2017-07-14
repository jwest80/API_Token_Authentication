import { Injectable } from '@angular/core';

@Injectable()
export class ErrorParserService {

  constructor() { }
  
  parseErrors(response) {
    var errors = [];
    for (var key in response.ModelState) {
        for (var i = 0; i < response.ModelState[key].length; i++) {
            errors.push(response.ModelState[key][i]);
        }
    }
    console.log(errors);
    return errors;
  }
}
