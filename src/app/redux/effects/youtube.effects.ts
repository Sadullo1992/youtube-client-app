import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError, map, of, switchMap,
} from 'rxjs';
import { ApiService } from 'src/app/youtube/services/api.service';
import * as YoutubeActions from '../actions/youtube.actions';

@Injectable()
export class YoutubeEffects {
  constructor(private actions$: Actions, private api: ApiService) {}

  // eslint-disable-next-line @ngrx/prefer-effect-callback-in-block-statement
  fetchSearchResponse$ = createEffect(() => this.actions$.pipe(
    ofType(YoutubeActions.loadSearchVideos),
    switchMap(({ query }) => this.api.getSearchResponse(query).pipe(
      map((data) => data.items.map((item) => item.id.videoId).join()),
      switchMap((ids) => this.api.getVideosById(ids).pipe(
        map((data) => YoutubeActions.loadSearchVideosSuccess({ searchVideos: data.items })),
      )),
      catchError((err) => of(YoutubeActions.loadSearchVideosFailed({ error: err?.statusText }))),
    )),
  ));
}
