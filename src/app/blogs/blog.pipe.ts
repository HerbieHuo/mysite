import { Pipe, PipeTransform } from '@angular/core';

let marked = require('marked');

@Pipe({
  name: 'blog'
})
export class BlogPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (args) {
      case "markdown-to-html":
        return this.markdownToHtml(value);
      default:
        return null;
    }
    // return null;
  }

  private markdownToHtml(value: any): string {
    if (!value) return "NA";
    return marked(value);
  }

}
