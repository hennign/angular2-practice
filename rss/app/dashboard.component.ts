import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

import { FeedService }    from './feed.service';
import { FeedComponent }  from './feed.component';

@Component({
  selector: 'dashboard',
  template: `
  <h3>The dashboard</h3>
    <hr>
    <div *ngFor="let feed of feeds">
      <feed [url]="feed"></feed>
    </div>
  `,
})
export class DashboardComponent {
  feeds: string[];

  constructor(private feedService: FeedService) {
    this.feeds = feedService.getFeeds();
  }
}
