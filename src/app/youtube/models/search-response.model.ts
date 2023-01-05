import { SearchItem } from './search-item.model';

export interface SearchResponse {
  etag: string;
  kind: string;
  nextPageToken: string;
  pageInfo: PageInfo;
  items: SearchItem[];
  regionCode: string;
}

interface PageInfo {
  resultsPerPage: number;
  totalResults: number;
}
