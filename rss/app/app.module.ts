import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }          from './app.component';
import { DashboardComponent }    from './dashboard.component';
import { FeedService }           from './feed.service';
import { FeedComponent }         from './feed.component';

@NgModule({
  imports:      [
   BrowserModule,
   HttpModule
   ],
  declarations: [ 
   AppComponent,
   DashboardComponent,
   FeedComponent
   ],
  providers: [
   FeedService
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
