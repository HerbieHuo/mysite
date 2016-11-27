import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

let marked = require('marked');

@Pipe({
  name: 'blog'
})
export class BlogPipe implements PipeTransform {

  constructor(
    private domSanitizer: DomSanitizer,
  ) {};

  transform(value: any, args?: any): any {
    switch (args) {
      case "markdown":
        return this.markdownToHtml(value);
      case "html":
        return this.domSanitizer.bypassSecurityTrustHtml(value);
      case "text":
        return value;
      default:
        return value;
    }
  }

  private markdownToHtml(value: any): any {
    if (!value) return value;
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });
    marked.setOptions({
      highlight: function (code) {
        return require("highlight.js").highlightAuto(code).value;
      }
    });
    return this.domSanitizer.bypassSecurityTrustHtml(marked(value));
  }

}
