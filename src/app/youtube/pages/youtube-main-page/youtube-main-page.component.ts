import {
  Component, OnDestroy, OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { TransferDataService } from 'src/app/core/services/transfer-data.service';
import { SortByTypeData } from '../../models/sort-by-type-data.model';

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

  subcription: Subscription | undefined;

  constructor(private transferDataService: TransferDataService) {}

  ngOnInit(): void {
    this.subcription = this.transferDataService.getData().subscribe((isShow) => {
      this.isShowSortBlock = isShow;
    });
  }

  onSort(item: SortByTypeData): void {
    this.sortTypeData = { ...item };
  }

  ngOnDestroy(): void {
    this.subcription?.unsubscribe();
  }
}
