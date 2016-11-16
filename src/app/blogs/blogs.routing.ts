import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogsComponent } from './blogs.component';
import { ListComponent } from './list/list.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {
      path: 'blogs', 
      component: BlogsComponent,
      children: [
          { path: '', component: ListComponent },
          { path: 'blog/:category/:artical_name', component: BlogComponent }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule { }

export const routedComponents = [BlogsComponent];