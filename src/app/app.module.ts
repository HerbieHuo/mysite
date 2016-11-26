import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { ConfigService, LeancloundService } from './shared';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { BlogsModule } from './blogs/blogs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    BlogsModule,
  ],
  providers: [
    ConfigService,
    LeancloundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
