import {
  Component, Input, OnDestroy, OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { TransferSearchDataService } from 'src/app/core/services/transfer-search-data.service';
import { SortByTypeData } from 'src/app/youtube/models/sort-by-type-data.model';
import { ApiService } from 'src/app/youtube/services/api.service';
import { VideoItem } from '../../models/video-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  searchValue = '';

  @Input() sortTypeData: SortByTypeData = {
    type: 'word',
    value: '',
  };

  subscription1$: Subscription | undefined;

  subscription2$: Subscription | undefined;

  subscription3$: Subscription | undefined;

  subscriptions: Subscription[] = [];

  searchItems: VideoItem[] = [];

  videoIds = '';

  constructor(
    private apiService: ApiService,
    private transferSearchDataService: TransferSearchDataService,
  ) {}

  ngOnInit(): void {
    this.getSearchValue();
  }

  private getSearchValue(): void {
    this.subscription1$ = this.transferSearchDataService
      .getData()
      .subscribe((value) => this.onGetSearchResponse(value));
    this.subscriptions.push(this.subscription1$);
  }

  private onGetSearchResponse(query: string) {
    this.subscription2$ = this.apiService
      .getSearchResponse(query)
      .subscribe((data) => {
        this.videoIds = data.items.map((item) => item.id.videoId).join();
        this.getSearchVideos(this.videoIds);
      });
    this.subscriptions.push(this.subscription2$);
  }

  private getSearchVideos(ids: string) {
    this.subscription3$ = this.apiService.getVideosById(ids).subscribe((data) => {
      this.searchItems = data.items;
    });
    this.subscriptions.push(this.subscription3$);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
  }
}
