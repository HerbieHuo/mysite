import { Component, OnInit } from '@angular/core';
// let marked = require('marked');

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // console.log(marked('I am using __markdown__.'));
  }

}
