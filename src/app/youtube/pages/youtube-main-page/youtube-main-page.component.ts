import {
  Component, OnDestroy, OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { TransferDataService } from 'src/app/core/services/transfer-data.service';
import { TransferSearchDataService } from 'src/app/core/services/transfer-search-data.service';
import { ToastrService } from 'ngx-toastr';

import { SortByTypeData } from '../../models/sort-by-type-data.model';
import * as YoutubeSelects from '../../../redux/selectors/youtube.selectors';
import * as YoutubeActions from '../../../redux/actions/youtube.actions';

@Component({
  selector: 'app-youtube-main-page',
  templateUrl: './youtube-main-page.component.html',
  styleUrls: ['./youtube-main-page.component.scss'],
})
export class YoutubeMainPageComponent implements OnInit, OnDestroy {
  isShowSortBlock = false;

  sortTypeData: SortByTypeData = {
    type: 'word',
    value: '',
  };

  subscription1$!: Subscription;

  subscription2$!: Subscription;

  subscription3$!: Subscription;

  subscription4$!: Subscription;

  subcriptions: Subscription[] = [];

  searchVideos$ = this.store.select(YoutubeSelects.selectSearchVideos);

  status$ = this.store.select(YoutubeSelects.selectYoutubeStatus);

  error$ = this.store.select(YoutubeSelects.selectYoutubeError);

  constructor(
    private transferDataService: TransferDataService,
    private transferSearchDataService: TransferSearchDataService,
    private store: Store,
    private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
    this.getSearchValue();
    this.toggleSortBlock();
    this.shouldShowError();
  }

  onSort(item: SortByTypeData): void {
    this.sortTypeData = { ...item };
  }

  private toggleSortBlock(): void {
    this.subscription1$ = this.transferDataService.getData().subscribe((isShow) => {
      this.isShowSortBlock = isShow;
    });
    this.subcriptions = [...this.subcriptions, this.subscription1$];
  }

  private getSearchValue(): void {
    this.subscription2$ = this.transferSearchDataService
      .getData()
      .subscribe((query) => this.loadYoutubeVideos(query));
    this.subcriptions = [...this.subcriptions, this.subscription2$];
  }

  private loadYoutubeVideos(query: string) {
    this.store.dispatch(YoutubeActions.loadSearchVideos({ query }));
  }

  private shouldShowError() {
    this.subscription3$ = this.status$.subscribe((status) => {
      if (status === 'error') {
        this.showError();
      }
    });
    this.subcriptions = [...this.subcriptions, this.subscription3$];
  }

  private showError(): void {
    this.subscription4$ = this.error$.subscribe((error) => {
      if (error) {
        this.toastrService.error(`${error}`, 'Error, Something went wrong.. ((');
      }
    });
    this.subcriptions = [...this.subcriptions, this.subscription4$];
  }

  ngOnDestroy(): void {
    this.subcriptions.forEach((subcription) => subcription.unsubscribe());
  }
}
