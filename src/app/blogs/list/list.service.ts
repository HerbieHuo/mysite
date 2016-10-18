import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ListService {

  constructor(
    private http: Http
  ) { }

  public getBlogsMap(): Observable<any> {
    return this.http.get(
      "app/blogs/articals/map.json"
    )
  }

}
