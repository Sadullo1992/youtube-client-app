import {
  Component, Input, OnDestroy, OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { TransferSearchDataService } from 'src/app/core/services/transfer-search-data.service';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { SortByTypeData } from 'src/app/youtube/models/sort-by-type-data.model';
import { ApiService } from 'src/app/youtube/services/api.service';

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

  subscriptions: Subscription[] = [];

  searchItems: SearchItem[] = [];

  constructor(
    private apiService: ApiService,
    private transferSearchDataService: TransferSearchDataService,
  ) {}

  ngOnInit(): void {
    this.showResults();
    this.subscription1$ = this.transferSearchDataService
      .getData()
      .subscribe((value) => {
        this.searchValue = value;
        // this.showResults();
      });
    this.subscriptions.push(this.subscription1$);
  }

  private showResults() {
    this.subscription2$ = this.apiService
      .getSearchResponse()
      .subscribe((data) => {
        this.searchItems = data.items;
      });
    this.subscriptions.push(this.subscription2$);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
  }
}
