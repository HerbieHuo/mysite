import { Component, OnInit } from '@angular/core';
import { LeancloundService } from '../shared';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  private user: {} = {};

  constructor(
    private leancloundService: LeancloundService
  ) { }

  ngOnInit() {
    this.getMe();
  }

  private getMe(): void {
    if (!localStorage.getItem("sessionToken")) return;
    this.leancloundService.getMe().subscribe(
      data => { console.log(data); this.user = data },
      error => { console.log(error) }
    )
  }

}
