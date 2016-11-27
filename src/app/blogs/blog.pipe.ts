import { Pipe, PipeTransform } from '@angular/core';

let marked = require('marked');
// let highlight = require("highlight.js");
let showdown  = require('showdown')
let converter = new showdown.Converter()

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
    // marked.setOptions({
    //   highlight: function (code) {
    //     return require("highlight.js").highlightAuto(code).value;
    //   }
    // });
    // return marked(value);
    return converter.makeHtml(value);
  }

}
