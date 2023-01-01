import { SearchItem } from './search-item.model';

export interface SearchResponse {
  etag: string;
  kind: string;
  pageInfo: PageInfo;
  items: SearchItem[];
}

interface PageInfo {
  resultsPerPage: number;
  totalResults: number;
}
