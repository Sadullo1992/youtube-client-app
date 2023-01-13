import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { SearchResultsComponent } from './components/search-results/search-results.component';
import { YoutubeMainPageComponent } from './pages/youtube-main-page/youtube-main-page.component';
import { SearchItemComponent } from './components/search-results/search-item/search-item.component';
import { SharedModule } from '../shared/shared.module';
import { YoutubeInfoCardPageComponent } from './pages/youtube-info-card-page/youtube-info-card-page.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { SortBlockComponent } from './components/sort-block/sort-block.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminComponent } from './components/admin/admin.component';

import { youtubeReducer } from '../redux/reducers/youtube.reducers';
import { YoutubeEffects } from '../redux/effects/youtube.effects';
import { CustomVideosComponent } from './components/custom-videos/custom-videos.component';
import { CustomVideoItemComponent } from './components/custom-videos/custom-video-item/custom-video-item.component';
import { CustomVideoPageComponent } from './pages/custom-video-page/custom-video-page.component';

@NgModule({
  declarations: [
    YoutubeMainPageComponent,
    SearchResultsComponent,
    SearchItemComponent,
    YoutubeInfoCardPageComponent,
    InfoCardComponent,
    SortBlockComponent,
    AdminPageComponent,
    AdminComponent,
    CustomVideosComponent,
    CustomVideoItemComponent,
    CustomVideoPageComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    StoreModule.forFeature('youtube', youtubeReducer),
    EffectsModule.forFeature([YoutubeEffects]),
  ],
  exports: [],
})
export class YoutubeModule {}
