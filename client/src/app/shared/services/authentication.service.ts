import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() { }

// Example Authentication Object
//  access_token: "8-eFA4gSukpF70l7HKYGc9X2fwOBZVFH4sHXHNEgUUh2m7SP_2…STapOKRxrJfbtVEoMMlWWXZcmEZuYJcqZRmdC3hTmmcPZMsMh", 
//  token_type: "bearer", 
//  expires_in: 1209599, 
//  userName: "jwest80@mail.com", 
//  .issued: "Fri, 14 Jul 2017 13:36:21 GMT"

  create(auth) {
    sessionStorage.setItem('auth', JSON.stringify(auth.json())); 
  }

  read() {
    return JSON.parse(sessionStorage.getItem('auth'));
  }

  delete() {
    sessionStorage.removeItem('auth');
  }

  exists() {
    return (sessionStorage.getItem('auth') !== null);
  }

}
