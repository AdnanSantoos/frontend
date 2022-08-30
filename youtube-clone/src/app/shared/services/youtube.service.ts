// search.service.ts

import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';
import { Result } from '../models/youtube.interface';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_TOKEN = 'AIzaSyChH1k0PH6oWx7t4IrgviCmKAzuwYb4a_E';

  constructor(private http: HttpClient) { }

  search(query: string): Observable<Result[]> {
    const params: string = [
      `q=${query}`,
      `key=${this.API_TOKEN}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`,
    ].join('&');
    const queryUrl = `${this.API_URL}?${params}`;
    console.log(queryUrl);
    return this.http.get(queryUrl).pipe(map((response: any) => {
      return <any>response['items'].map((item: any) => {
        return new Result({
          id: item.id.videoId,
          title: item.snippet.title,
          desc: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.high.url,
        });
      });
    }))
  }

  getInicial(): Observable<Result[]> {
    const params: string = [
      `chart=mostPopular`,
      `key=${this.API_TOKEN}`,
      `part=snippet`,
      `type=video`,
      `maxResults=12`,
    ].join('&');
    const queryUrl = `${this.API_URL}?${params}`;
    return this.http.get(queryUrl).pipe(map((response: any) => {
      return <any>response['items'].map((item: any) => {
        return new Result({
          id: item.id.videoId,
          title: item.snippet.title,
          desc: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.high.url,
        });
      });
    }))
  }

}