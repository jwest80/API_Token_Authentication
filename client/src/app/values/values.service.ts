// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ValuesService {
    // Resolve HTTP using the constructor
    constructor(private http: Http) { }
    // private instance variable to hold base url
    private valuesUrl = 'http://cli-example.lo/api/values'

    // Fetch all existing comments
    getValues(): Observable<string[]> {

        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            var token = 'Bearer ' + currentUser.access_token || '';
        }
        let headers = new Headers({ 'Authorization': token });
        let options = new RequestOptions({ headers: headers });

        // ...using get request
        return this.http.get(this.valuesUrl, options)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
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
