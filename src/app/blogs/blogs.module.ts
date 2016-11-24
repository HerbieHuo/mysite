import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BlogsComponent } from './blogs.component';

import { BlogsRoutingModule } from './blogs.routing';
import { BlogComponent } from './blog/blog.component';
import { ListComponent } from './list/list.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { BlogPipe } from './blog.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    BlogsRoutingModule,
    MaterialModule.forRoot(),
  ],
  declarations: [BlogsComponent, BlogComponent, ListComponent, EditBlogComponent, BlogPipe]
})
export class BlogsModule { }
