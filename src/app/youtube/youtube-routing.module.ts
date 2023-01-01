import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { YoutubeInfoCardPageComponent } from './pages/youtube-info-card-page/youtube-info-card-page.component';
import { YoutubeMainPageComponent } from './pages/youtube-main-page/youtube-main-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'youtube', pathMatch: 'full' },
  {
    path: 'youtube',
    component: YoutubeMainPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'detail/:id',
    component: YoutubeInfoCardPageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
