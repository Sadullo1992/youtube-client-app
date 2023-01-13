import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as YoutubeSelects from '../../../redux/selectors/youtube.selectors';

@Component({
  selector: 'app-custom-video-page',
  templateUrl: './custom-video-page.component.html',
  styleUrls: ['./custom-video-page.component.scss'],
})
export class CustomVideoPageComponent {
  customVideos$ = this.store.select(YoutubeSelects.selectCustomVideos);

  constructor(private store: Store, private router: Router) {}

  goToAdmin():void {
    this.router.navigateByUrl('/admin');
  }
}
