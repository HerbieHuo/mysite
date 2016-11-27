import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { LeancloundService } from '../../shared';

@Injectable()
export class BlogService {

  constructor(
    private http: Http,
    private leancloundService: LeancloundService,
  ) { }

  public getArticalContent(articalUrl: string): Observable<string> {
    return this.http.get(articalUrl).map(
      response => { return response.text() || "**no content**" }
    ).catch(
      error => { return Observable.throw(error.status) }
    )
  }

  public getArtical(objectId: string): Observable<any> {
    return this.leancloundService.getArtical(objectId);
  }

}
