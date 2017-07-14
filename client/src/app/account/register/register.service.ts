// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// Enviornment Variables
import {environment} from '@environments/environment';

@Injectable()
export class RegisterService {
  private url = environment.BASE_API_URL + '/account/register';
  constructor(private http: Http) { }

  register(reg): Observable<{}> {
    let payload = JSON.stringify(reg);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.url, payload, options).share();
      // .map((res: Response) => res.json()) 
      // .catch((error: any) => Observable.throw(error.json() || 'Server error')); 
  }
}
