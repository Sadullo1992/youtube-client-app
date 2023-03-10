export interface SearchItem {
  etag: string;
  id: Id;
  kind: string;
  snippet: Snippet;
}

interface Id {
  kind: string;
  videoId: string;
}

interface Snippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishedAt: string;
  publishedTime: string;
  thumbnails: Thumbnails<TumbInfo>;
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
