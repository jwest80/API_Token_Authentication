// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AuthenticationService } from '@app-shared/services'

// Enviornment Variables
import {environment} from '@environments/environment';

@Injectable()
export class ValuesService {
    private url = environment.BASE_API_URL + '/api/values';
    constructor(private http: Http,
                private authenticationService: AuthenticationService) { }

    // Fetch all existing comments
    getValues(): Observable<string[]> {

        let auth = this.authenticationService.read();
        if (auth) {
            var token = 'Bearer ' + auth.access_token || '';
        }
        let headers = new Headers({ 'Authorization': token });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.url, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}


// import { Injectable } from '@angular/core';
// import { Headers, Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';

// @Injectable()
// export class ValuesService {

//   private valuesUrl = 'http://cli-example.lo/api/values'

//   constructor(private http: Http) { }

//   getValues(): Promise<string[]> {
//     return this.http.get(this.valuesUrl)
//              .toPromise()
//              .then(response => {
//                 return response.json() as string[]
//               })
//              .catch(this.handleError);
//   }

//   private handleError(error: any): Promise<any> {
//     console.error('An error occurred', error); // for demo purposes only
//     return Promise.reject(error.message || error);
//   }
// }
