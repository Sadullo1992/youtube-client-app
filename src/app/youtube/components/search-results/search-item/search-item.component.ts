import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colors } from 'src/app/youtube/models/colors-enum.model';
import { VideoItem } from 'src/app/youtube/models/video-item.model';
import { ShareColorService } from 'src/app/youtube/services/share-color.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() item: VideoItem | null = null;

  color = 'tranparent';

  publishedDate: string | undefined;

  constructor(private router: Router, private shareColorService: ShareColorService) {}

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
        this.color = Colors.red;
      } else if (publishedTime < before1MonthTime) {
        this.color = Colors.yellow;
      } else if (publishedTime < before7DaysTime) {
        this.color = Colors.green;
      } else {
        this.color = Colors.blue;
      }
    } else {
      this.color = 'transparent';
    }
  }

  goToDetailInfoPage(): void {
    this.shareColorService.setColor(this.color);
    this.router.navigate(['youtube', this.item?.id]);
  }
}
