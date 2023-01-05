import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResponse } from '../models/search-response.model';
import { VideoResponse } from '../models/video-response.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private key = 'AIzaSyBzV4im1JjOMsrrjsHqKP5ni8ly6pFXUSo';

  constructor(private httpClient: HttpClient) {}

  getSearchResponse(query: string): Observable<SearchResponse> {
    return this.httpClient.get<SearchResponse>(`/search?key=${this.key}&type=video&part=snippet&maxResults=15&q=${query}`);
  }

  getVideosById(ids: string): Observable<VideoResponse> {
    return this.httpClient.get<VideoResponse>(`/videos?key=${this.key}&id=${ids}&part=snippet,statistics`);
  }
}
