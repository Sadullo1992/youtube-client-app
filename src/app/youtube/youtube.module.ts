import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { SearchResultsComponent } from './components/search-results/search-results.component';
import { YoutubeMainPageComponent } from './pages/youtube-main-page/youtube-main-page.component';
import { SearchItemComponent } from './components/search-results/search-item/search-item.component';
import { SharedModule } from '../shared/shared.module';
import { YoutubeInfoCardPageComponent } from './pages/youtube-info-card-page/youtube-info-card-page.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { SortBlockComponent } from './components/sort-block/sort-block.component';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [
    YoutubeMainPageComponent,
    SearchResultsComponent,
    SearchItemComponent,
    YoutubeInfoCardPageComponent,
    InfoCardComponent,
    SortBlockComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    SharedModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [],
})
export class YoutubeModule {}
