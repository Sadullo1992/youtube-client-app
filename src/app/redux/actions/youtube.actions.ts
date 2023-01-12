import { createAction, props } from '@ngrx/store';
import { VideoItem } from 'src/app/youtube/models/video-item.model';

export const loadSearchVideos = createAction('[SearchVideos] Load', props<{ query: string }>());
export const loadSearchVideosSuccess = createAction('[SearchVideos] Load Success', props<{ searchVideos: VideoItem[] }>());
export const loadSearchVideosFailed = createAction('[SearchVideos] Load Failed', props<{ error: string }>());
