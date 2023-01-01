import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../../youtube/models/search-item.model';
import { SortByTypeData } from '../../youtube/models/sort-by-type-data.model';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(
    searchItems: SearchItem[],
    sortStatusData: SortByTypeData,
  ): SearchItem[] {
    if (sortStatusData.type === 'date') {
      if (sortStatusData.value === 'increasing') {
        // eslint-disable-next-line max-len
        return searchItems.sort((a: SearchItem, b: SearchItem) => this.increaseDate(a.snippet.publishedAt, b.snippet.publishedAt));
      }
      // eslint-disable-next-line max-len
      return searchItems.sort((a: SearchItem, b: SearchItem) => this.decreaseDate(a.snippet.publishedAt, b.snippet.publishedAt));
    }
    if (sortStatusData.type === 'view') {
      if (sortStatusData.value === 'increasing') {
        // eslint-disable-next-line max-len
        return searchItems.sort((a: SearchItem, b: SearchItem) => this.increaseView(a.statistics.viewCount, b.statistics.viewCount));
      }
      // eslint-disable-next-line max-len
      return searchItems.sort((a: SearchItem, b: SearchItem) => this.decreaseView(a.statistics.viewCount, b.statistics.viewCount));
    }
    return searchItems.filter((item) => this.searchItemCallback(item, sortStatusData.value));
  }

  private searchItemCallback(item: SearchItem, word: string): boolean {
    return item.snippet.tags.some((tag) => this.tagCallback(tag, word));
  }

  private tagCallback(tag: string, word: string): boolean {
    return tag.toLowerCase().includes(word.toLowerCase());
  }

  private increaseDate(x: string, y: string) {
    return new Date(y).getTime() - new Date(x).getTime();
  }

  private decreaseDate(x: string, y: string) {
    return new Date(x).getTime() - new Date(y).getTime();
  }

  private increaseView(x: string, y: string) {
    return Number(x) - Number(y);
  }

  private decreaseView(x: string, y: string) {
    return Number(y) - Number(x);
  }
}
