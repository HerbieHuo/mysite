import { Component, OnInit } from '@angular/core';
import { ListService, BlogsMap, ArticalInfo } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ ListService ]
})
export class ListComponent implements OnInit {

  private blogsMap: BlogsMap = new BlogsMap;
  private articals: ArticalInfo[] = [];

  constructor(
    private listService: ListService,
  ) { }

  ngOnInit() {
    this.getCatalogue();
  }

  private getCatalogue(): void {
    this.listService.getBlogsMap().subscribe(
      data => {
        console.log(data);
        this.blogsMap = data;
        this.assembleAllArticals();
      },
      error => { console.log("error", error) }
    )
  }

  private assembleAllArticals(): void {
    if (!this.blogsMap.categorys) return;
    this.articals = [];
    for (let category of this.blogsMap.categorys) {
      this.articals = this.articals.concat(category.articals);
    }
  }

}
