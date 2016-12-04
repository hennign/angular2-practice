import { Component, Input, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'feed',
  template: `
    <div class="feed">
        <h3>{{data?.title}}</h3>
        <h3>{{data?.url}}</h3>
        <ul>
          <li *ngFor="let entry of data?.entries">
            <a href="{{entry.link}}">
              {{entry.title}}
            </a>
          </li>
        </ul>
      </div>
  `
})
export class FeedComponent implements OnInit {
  @Input() url;

  constructor(private http: Http) {  
    }

    ngOnInit() {
      this.http.get('http://demos.angular-craft.com/rss_service.php?url='+this.url)
      .map(res => res.json())
        .subscribe(res => {
          this.data = res.responseData.feed;
          // console.log(res);
        });
    }
}