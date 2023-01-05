import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { VideoItem } from '../../models/video-item.model';
import { ApiService } from '../../services/api.service';
import { ShareColorService } from '../../services/share-color.service';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})

export class InfoCardComponent implements OnInit, OnDestroy {
  item: VideoItem | undefined;

  color = 'transparent';

  subscription1$: Subscription | undefined;

  subscription2$: Subscription | undefined;

  subscription3$: Subscription | undefined;

  subscriptions: Subscription[] = [];

  publishedDate: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location,
    private shareColorService: ShareColorService,
  ) {}

  ngOnInit(): void {
    this.getColor();
    this.getDetailInit();
  }

  goBack(): void {
    this.location.back();
  }

  private getDetailInit(): void {
    this.subscription1$ = this.route.params.subscribe((param) => this.getDetail(param['id']));
    this.subscriptions.push(this.subscription1$);
  }

  private getDetail(id: string): void {
    this.subscription2$ = this.apiService
      .getVideosById(id)
      .subscribe((data) => {
        [this.item] = data.items;
      });
    this.subscriptions.push(this.subscription2$);
  }

  private getColor() {
    this.subscription3$ = this.shareColorService.getColor().subscribe((color) => {
      this.color = color;
    });
    this.subscriptions.push(this.subscription3$);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subsc) => subsc.unsubscribe());
  }
}
