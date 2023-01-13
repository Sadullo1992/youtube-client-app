import { Component, Input } from '@angular/core';
import { CustomVideo } from 'src/app/youtube/models/custom-video.model';

@Component({
  selector: 'app-custom-video-item',
  templateUrl: './custom-video-item.component.html',
  styleUrls: ['./custom-video-item.component.scss'],
})
export class CustomVideoItemComponent {
  @Input() item!: CustomVideo;
}
