import { Component, OnInit } from '@angular/core';
// import { BlogPipe } from '../blog.pipe';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  private blogContent: string;

  constructor() { }

  ngOnInit() {
  }

}
