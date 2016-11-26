import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ConfigService } from './config.service';

@Injectable()
export class LeancloundService {

  private leancloundConfig = {
    AppID: "",
    AppKey: ""
  }

  constructor(
    private http: Http,
    private configService: ConfigService,
  ) { }

  private _url(url: string): string {
    return "https://api.leancloud.cn/1.1/" + url;
  }

  private _headers(): Headers {
    
    let options = new Headers({
      'Content-Type': 'application/json',
      "X-LC-Id": this.leancloundConfig.AppID,
      "X-LC-Key": this.leancloundConfig.AppKey,
    });
    return options;
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    let errStatus: number = -1;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      errStatus = error.status || -1;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(`${errStatus} : ${errMsg}`);
    return Observable.throw({status: errStatus, message: errMsg});
  }

  public createObject(data: Object): Observable<any> {
    let body = JSON.stringify(data);
    let headers = this._headers();
    let options = new RequestOptions({headers: headers});
    return this.http.post(this._url("classes/articals"), body, options).map(
      response => { return response.json() || {} }
    ).catch( this.handleError );
  }

}
