import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http } from '@angular/http';

import { BlogService } from './blog.service';

let marked = require('marked');

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ BlogService ]
})
export class BlogComponent implements OnInit {

  private content: string;
  private prefixUri: string;
  private relativeUri: string;
  private name: string;
  private category: string;
  private createTime: string;
  private updateTime: string;
  private md5: string;

  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
        p => {
            console.info('ExperimentSampleComponent', p);
            this.prefixUri = p["prefix_uri"] || "articals/";
            this.category = p['category'];
            this.relativeUri = p["relative_uri"] || this.category+"/";
            this.name = p["artical_name"];
            this.md5 = p["md5"];
            this.getContent();
        }
    );
    // this.content = marked('## Usage');
    // this.http.get("app/blogs/blog/rr.md").subscribe(
    //   response => {this.content = marked(response.text())},
    //   error => {console.warn(error)}
    // );
  }

  private getContent(): void {
    this.content = marked(`### 获取中${this.name}，请稍等 ......`);
    this.blogService.getArticalContent(this.prefixUri+this.relativeUri+this.name).subscribe(
      data => { this.content = marked(data) },
      error => { console.log(error) },
    )
  }

}
