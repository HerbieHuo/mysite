import { Component, OnInit } from '@angular/core';
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
  private contentType: string;

  constructor(
    private leancloundService: LeancloundService
  ) { }

  ngOnInit() {
  }

  private onSaveArtical(): void {
    let artical = {
      name: this.articalTitle,
      content: this.blogContent,
      category: this.category || "test",
    }
    this.leancloundService.createObject(artical).subscribe(
      data => { console.log(data) },
      error => { console.log(error) }
    );
  }

}
