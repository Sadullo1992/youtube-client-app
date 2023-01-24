import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import mockData from '../../../assets/mock-data/response.json';

import { ApiService } from './api.service';
import { SearchItem } from '../models/search-item.model';
import { VideoItem } from '../models/video-item.model';

describe('ApiService', () => {
  let service: ApiService;
  let controller: HttpTestingController;
  const key = 'AIzaSyBzV4im1JjOMsrrjsHqKP5ni8ly6pFXUSo';
  const query = 'angular-testing';
  const expectedUrl = `/search?key=${key}&type=video&part=snippet&maxResults=15&q=${query}`;
  const videoIds = 'YN8zNnV0sK8,Fdf5aTYRW0E';
  const requestedVideosUrl = `/videos?key=${key}&id=${videoIds}&part=snippet,statistics`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('searches youtube videos', () => {
    let actualSearchVideos: SearchItem[] | undefined;

    service.getSearchResponse(query).subscribe((data) => {
      actualSearchVideos = data.items;
    });

    controller.expectOne(expectedUrl).flush(mockData);
    expect(actualSearchVideos).toEqual(mockData.items);
  });

  it('get youtube videos by id', () => {
    let actualVideos: VideoItem[] | undefined;

    service.getVideosById(videoIds).subscribe((data) => {
      actualVideos = data.items;
    });

    controller.expectOne(requestedVideosUrl).flush(mockData);
    expect(actualVideos).toEqual(mockData.items);
  });
});
