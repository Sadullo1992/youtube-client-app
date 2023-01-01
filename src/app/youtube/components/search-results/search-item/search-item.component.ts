import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchItem } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() item: SearchItem | null = null;

  color = 'tranparent';

  publishedDate: string | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.publishedDate = this.item?.snippet?.publishedAt;
    this.selectColorByDate();
  }

  selectColorByDate() {
    if (typeof this.publishedDate === 'string') {
      const publishedTime = new Date(this.publishedDate).getTime();
      const before6MonthsTime = new Date().setMonth(new Date().getMonth() - 6);
      const before1MonthTime = new Date().setMonth(new Date().getMonth() - 1);
      const before7DaysTime = new Date().setDate(new Date().getDate() - 7);
      if (publishedTime < before6MonthsTime) {
        this.color = 'rgb(235, 87, 87)';
      } else if (publishedTime < before1MonthTime) {
        this.color = 'rgb(242, 201, 76)';
      } else if (publishedTime < before7DaysTime) {
        this.color = 'rgb(39, 174, 96)';
      } else {
        this.color = 'rgba(33, 150, 243)';
      }
    } else {
      this.color = 'transparent';
    }
  }

  goToDetailInfoPage(): void {
    this.router.navigate(['detail', this.item?.id, { color: this.color }]);
  }
}
