export interface SearchItem {
  etag: string;
  id: string;
  kind: string;
  snippet: Snippet;
  statistics: Statistics;
}

interface Snippet {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  defaultAudioLanguage: string;
  description: string;
  liveBroadcastContent: string;
  localized: Localized;
  publishedAt: string;
  tags: string[];
  thumbnails: Thumbnails<TumbInfo>;
  title: string;
}

interface Localized {
  description: string;
  title: string;
}

interface Thumbnails<T> {
  default: T;
  high: T;
  maxres: T;
  medium: T;
  standard: T;
}

interface TumbInfo {
  height: number;
  width: number;
  url: string;
}

interface Statistics {
  commentCount: string;
  dislikeCount: string;
  favoriteCount: string;
  likeCount: string;
  viewCount: string;
}
