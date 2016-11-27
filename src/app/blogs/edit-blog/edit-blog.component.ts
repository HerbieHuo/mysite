import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LeancloundService } from '../../shared';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  private blogContent: string;
  private articalTitle: string;
  private category: string;
  private contentType: string = "markdown";

  constructor(
    private leancloundService: LeancloundService,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  private onSaveArtical(): void {
    if (!this.category || !this.contentType || !this.articalTitle || !this.blogContent) {
      return;
    }
    let artical = {
      name: this.articalTitle,
      content: this.blogContent,
      category: this.category,
      contentType: this.contentType,
    }
    this.leancloundService.createObject(artical).subscribe(
      data => { console.log(data) },
      error => { console.log(error) }
    );
  }

}
