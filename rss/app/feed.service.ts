import { Injectable } from '@angular/core';

import { FEEDS } from './feed-list';

@Injectable()
export class FeedService {
  getFeeds(): string[] {
    return FEEDS;
  }
}
