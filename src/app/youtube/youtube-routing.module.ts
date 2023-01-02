import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeInfoCardPageComponent } from './pages/youtube-info-card-page/youtube-info-card-page.component';
import { YoutubeMainPageComponent } from './pages/youtube-main-page/youtube-main-page.component';

const routes: Routes = [
  {
    path: '',
    component: YoutubeMainPageComponent,
  },
  {
    path: ':id',
    component: YoutubeInfoCardPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
