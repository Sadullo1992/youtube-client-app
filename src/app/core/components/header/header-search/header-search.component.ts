import { Component } from '@angular/core';
import { TransferSearchDataService } from 'src/app/core/services/transfer-search-data.service';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss'],
})
export class HeaderSearchComponent {
  searchValue = '';

  constructor(private transferSearchDataService: TransferSearchDataService) {}

  onSearch(value: string): void {
    if (value.trim().length > 2) {
      this.transferSearchDataService.shareData(value);
    }
  }
}
