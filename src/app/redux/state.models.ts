import { VideoItem } from '../youtube/models/video-item.model';

export interface YoutubeState {
  searchVideos: VideoItem[];
  query: string;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}
