import { VideoItem } from './video-item.model';

export interface VideoResponse {
  etag: string;
  kind: string;
  pageInfo: PageInfo;
  items: VideoItem[];
}

interface PageInfo {
  resultsPerPage: number;
  totalResults: number;
}
