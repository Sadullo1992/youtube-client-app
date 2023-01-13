import { createAction, props } from '@ngrx/store';
import { CustomVideo } from 'src/app/youtube/models/custom-video.model';
import { VideoItem } from 'src/app/youtube/models/video-item.model';

export const loadSearchVideos = createAction('[SearchVideos] Load', props<{ query: string }>());
export const loadSearchVideosSuccess = createAction('[SearchVideos] Load Success', props<{ searchVideos: VideoItem[] }>());
export const loadSearchVideosFailed = createAction('[SearchVideos] Load Failed', props<{ error: string }>());

export const addCustomVideo = createAction('[CustomVideo] Add', props<{ customVideo: CustomVideo }>());
