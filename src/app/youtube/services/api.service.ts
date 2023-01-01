import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchItem } from '../models/search-item.model';
import { SearchResponse } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = '/assets/mock-data/response.json';

  searchItem: SearchItem | undefined;

  constructor(private httpClient: HttpClient) {}

  getSearchResponse(): Observable<SearchResponse> {
    return this.httpClient.get<SearchResponse>(this.url);
  }
}
