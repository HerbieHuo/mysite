import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';

import { BlogsRoutingModule } from './blogs.routing';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  imports: [
    CommonModule,
    BlogsRoutingModule
  ],
  declarations: [BlogsComponent, BlogComponent]
})
export class BlogsModule { }
