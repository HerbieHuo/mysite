import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
  private objectId: string;

  constructor(
    private leancloundService: LeancloundService,
    private domSanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
        p => {
            console.info('ExperimentSampleComponent', p);
            this.objectId = p["objectId"];
            this.getArtical();
            // this.getContent();
        }
    );
  }

  private getArtical(): void {
    if (!this.objectId) return ;
    this.leancloundService.getArtical(this.objectId).subscribe(
      data => {
        this.articalTitle = data["name"];
        this.category = data["category"];
        this.contentType = data["contentType"];
        this.blogContent = data["content"];
      },
      error => { console.log(error) }
    );
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
    if (!this.objectId) {
      this.leancloundService.createObject(artical).subscribe(
        data => { console.log(data) },
        error => { console.log(error) }
      );
    } else {
      this.leancloundService.updateArtical(this.objectId, artical).subscribe(
        data => { console.log(data) },
        error => { console.log(error) }
      );
    }
  }

}
