import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  // add the base url and key variable from the environment
  private baseUrl: String = environment.baseUrl
  private apiKey: String = environment.apiKey

  constructor(private http: HttpClient) { }

  getTopHeadlines(countryCode: String, categoryCode: String) {
    let headlineUrl = `${this.baseUrl}/top-headlines?country=${countryCode}&category=${categoryCode}&apiKey=${this.apiKey}`;
    if(categoryCode=='all'){
      headlineUrl = `${this.baseUrl}/top-headlines?country=${countryCode}&apiKey=${this.apiKey}`;
    }
    return this.http.get(headlineUrl)
  }
}
