/**
 * Created by cant on 12/7/16.
 */
import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';

@Injectable()
export class UserDetailService {

  private backendUrl = 'http://127.0.0.1:5000/api/user/';

  constructor (private http: Http) {}

  public getDetails(id) : Observable<Response> {
    console.log('get user detail serv');
    return this.http.get(this.backendUrl + id)
      .map(this.onUserDetailRecieved)
      .catch(this.handleUserDetailError);
  }

  private onUserDetailRecieved(res: Response) {
    let body = res.json();
    return body;
  }

  private handleUserDetailError(error: Response) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = JSON.stringify(error);
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}