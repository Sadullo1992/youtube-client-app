import { CustomVideo } from '../youtube/models/custom-video.model';
import { VideoItem } from '../youtube/models/video-item.model';

export interface YoutubeState {
  searchVideos: VideoItem[];
  customVideos: CustomVideo[];
  query: string;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}
