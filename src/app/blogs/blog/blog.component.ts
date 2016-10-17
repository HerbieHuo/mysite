import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
let marked = require('marked');

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  private content: string;

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    this.content = marked('## Usage');
    this.http.get("app/blogs/blog/rr.md").subscribe(
      response => {this.content = marked(response.text())},
      error => {console.warn(error)}
    );
  }

}
