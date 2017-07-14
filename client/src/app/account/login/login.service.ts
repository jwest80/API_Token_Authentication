import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// Enviornment Variables
import {environment} from '@environments/environment';

@Injectable()
export class LoginService {
  private url = environment.BASE_API_URL + '/token';
  constructor(private http: Http) { }

  login(credentials) {
    // The default implementation of OAuthAuthorizationServerHandler only accepts form 
    // encoding (i.e. application/x-www-form-urlencoded) and not JSON encoding (application/JSON).
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let payload =  'grant_type=password&username='
                      + credentials.username +'&password=' 
                      + credentials.password;

    return this.http.post(this.url, payload, options).share();
                  //.toPromise();
  }

}
