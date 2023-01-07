import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { YoutubeInfoCardPageComponent } from './pages/youtube-info-card-page/youtube-info-card-page.component';
import { YoutubeMainPageComponent } from './pages/youtube-main-page/youtube-main-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'youtube', pathMatch: 'full' },
  {
    path: 'youtube',
    component: YoutubeMainPageComponent,
  },
  {
    path: 'youtube/:id',
    component: YoutubeInfoCardPageComponent,
  },
  {
    path: 'admin',
    component: AdminPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
