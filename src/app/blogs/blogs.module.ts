import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BlogsComponent } from './blogs.component';

import { BlogsRoutingModule } from './blogs.routing';
import { BlogComponent } from './blog/blog.component';
import { ListComponent } from './list/list.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BlogsRoutingModule,
    MaterialModule.forRoot(),
  ],
  declarations: [BlogsComponent, BlogComponent, ListComponent, EditBlogComponent]
})
export class BlogsModule { }
