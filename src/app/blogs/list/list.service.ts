import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { LeancloundService } from '../../shared';

export class BlogsMap {
  version: string;
  author: string;
  base_url: string;
  categorys: Categorys[];
  articals: ArticalInfo[];
}

export class Categorys {
  category_name: string;
  directory: string;
  articals: ArticalInfo[];
}

export class ArticalInfo {
  name: string;
  relative_url: string;
  hash: string;
  md5: string;
  create_time: string;
  update_time: string;
}

@Injectable()
export class ListService {

  constructor(
    private http: Http,
    private leancloundService: LeancloundService,
  ) { }

  public getBlogsMap(): Observable<BlogsMap> {
    return this.http.get(
      "app/blogs/articals/map.json"
    ).map(
      response => { return response.json() || {} }
    ).catch(
      error => { return Observable.throw(error.status) }
    )
  }

  public getArticals(): Observable<any> {
    return this.leancloundService.getArticals();
  }

}
