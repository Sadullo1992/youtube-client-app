import { Component, Input } from '@angular/core';
import { CustomVideo } from '../../models/custom-video.model';

@Component({
  selector: 'app-custom-videos',
  templateUrl: './custom-videos.component.html',
  styleUrls: ['./custom-videos.component.scss'],
})
export class CustomVideosComponent {
  @Input() customVideos: CustomVideo[] = [];
}
