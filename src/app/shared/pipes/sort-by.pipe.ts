import { Pipe, PipeTransform } from '@angular/core';
import { VideoItem } from 'src/app/youtube/models/video-item.model';
import { SortByTypeData } from '../../youtube/models/sort-by-type-data.model';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(
    searchItems: VideoItem[],
    sortStatusData: SortByTypeData,
  ): VideoItem[] {
    if (sortStatusData.type === 'date') {
      if (sortStatusData.value === 'increasing') {
        // eslint-disable-next-line max-len
        return searchItems.sort((a: VideoItem, b: VideoItem) => this.sortDate(a.snippet.publishedAt, b.snippet.publishedAt));
      }
      // eslint-disable-next-line max-len
      return searchItems.sort((a: VideoItem, b: VideoItem) => this.sortDate(b.snippet.publishedAt, a.snippet.publishedAt));
    }
    if (sortStatusData.type === 'view') {
      if (sortStatusData.value === 'increasing') {
        // eslint-disable-next-line max-len
        return searchItems.sort((a: VideoItem, b: VideoItem) => this.sortView(a.statistics.viewCount, b.statistics.viewCount));
      }
      // eslint-disable-next-line max-len
      return searchItems.sort((a: VideoItem, b: VideoItem) => this.sortView(b.statistics.viewCount, a.statistics.viewCount));
    }
    return searchItems.filter((item) => this.filterByTitle(item, sortStatusData.value));
  }

  private filterByTitle(item: VideoItem, word: string): boolean {
    return item.snippet.title.toLowerCase().includes(word.toLowerCase());
  }

  private sortDate(x: string, y: string) {
    return new Date(y).getTime() - new Date(x).getTime();
  }

  private sortView(x: string, y: string) {
    return Number(x) - Number(y);
  }
}
