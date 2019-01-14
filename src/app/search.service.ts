import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }
  //http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=dc6zaTOxFJmzC

  public getSearchResult(hilarious: string): Observable<any> {
    return this.http.get(`http://api.giphy.com/v1/gifs/search?q=${hilarious}&api_key=dc6zaTOxFJmzC`, {
      headers: new HttpHeaders({
        'content-type': 'json'
      })
    });
  }
}
