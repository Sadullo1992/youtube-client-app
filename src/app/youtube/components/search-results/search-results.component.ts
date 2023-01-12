import {
  Component, Input,
} from '@angular/core';
import { SortByTypeData } from 'src/app/youtube/models/sort-by-type-data.model';
import { VideoItem } from '../../models/video-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  @Input() searchVideos: VideoItem[] = [];

  @Input() sortTypeData: SortByTypeData = {
    type: 'word',
    value: '',
  };
}
