import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchItem } from '../../models/search-item.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit, OnDestroy {
  item: SearchItem | undefined;

  color = '';

  subscription1$: Subscription | undefined;

  subscription2$: Subscription | undefined;

  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getDetailInit();
  }

  goBack(): void {
    this.location.back();
  }

  private getDetailInit(): void {
    this.subscription1$ = this.route.params.subscribe((param) => {
      this.getDetail(param['id']);
      this.color = param['color'];
    });
    this.subscriptions.push(this.subscription1$);
  }

  private getDetail(id: string): void {
    this.subscription2$ = this.apiService
      .getSearchResponse()
      .subscribe((data) => {
        this.item = data.items.find((item) => item.id === id);
      });
    this.subscriptions.push(this.subscription2$);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subsc) => subsc.unsubscribe());
  }
}
