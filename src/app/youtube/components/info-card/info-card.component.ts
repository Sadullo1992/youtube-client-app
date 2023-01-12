import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { VideoItem } from '../../models/video-item.model';
import { ShareColorService } from '../../services/share-color.service';
import * as YoutubeSelects from '../../../redux/selectors/youtube.selectors';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})

export class InfoCardComponent implements OnInit, OnDestroy {
  item$!: Observable<VideoItem | undefined>;

  color = 'transparent';

  subscription1$!: Subscription;

  subscription2$!: Subscription;

  subscriptions: Subscription[] = [];

  publishedDate: string | undefined;

  searchVideos$ = this.store.select(YoutubeSelects.selectSearchVideos);

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private shareColorService: ShareColorService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.getColor();
    this.getVideoInit();
  }

  goBack(): void {
    this.location.back();
  }

  private getVideoInit(): void {
    this.subscription1$ = this.route.params.subscribe((param) => this.getVideo(param['id']));
    this.subscriptions.push(this.subscription1$);
  }

  private getVideo(id: string): void {
    this.item$ = this.store.select(YoutubeSelects.selectSearchVideo(id));
  }

  private getColor() {
    this.subscription2$ = this.shareColorService.getColor().subscribe((color) => {
      this.color = color;
    });
    this.subscriptions.push(this.subscription2$);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subsc) => subsc.unsubscribe());
  }
}
