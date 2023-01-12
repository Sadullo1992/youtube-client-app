import { createReducer, on } from '@ngrx/store';
import * as YoutubeActions from '../actions/youtube.actions';
import { YoutubeState } from '../state.models';

export const initialState: YoutubeState = {
  searchVideos: [],
  query: '',
  error: null,
  status: 'pending',
};

export const youtubeReducer = createReducer(
  initialState,
  on(YoutubeActions.loadSearchVideos, (state, { query }): YoutubeState => ({
    ...state,
    query,
    error: null,
    status: 'loading',
  })),
  on(YoutubeActions.loadSearchVideosSuccess, (state, { searchVideos }): YoutubeState => ({
    ...state,
    searchVideos,
    error: null,
    status: 'success',
  })),
  on(YoutubeActions.loadSearchVideosFailed, (state, { error }): YoutubeState => ({
    ...state,
    error,
    status: 'error',
  })),
);
