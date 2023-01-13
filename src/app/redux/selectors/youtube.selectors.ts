import { createFeatureSelector, createSelector } from '@ngrx/store';
import { YoutubeState } from '../state.models';

export const selectYoutubeState = createFeatureSelector<YoutubeState>('youtube');
export const selectSearchVideos = createSelector(
  selectYoutubeState,
  (state: YoutubeState) => state.searchVideos,
);
export const selectSearchVideo = (id: string) => createSelector(
  selectYoutubeState,
  (state: YoutubeState) => state.searchVideos.find((item) => item.id === id),
);

export const selectYoutubeStatus = createSelector(
  selectYoutubeState,
  (state: YoutubeState) => state.status,
);

export const selectYoutubeError = createSelector(
  selectYoutubeState,
  (state: YoutubeState) => state.error,
);

export const selectCustomVideos = createSelector(
  selectYoutubeState,
  (state: YoutubeState) => state.customVideos,
);
