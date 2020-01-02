import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  // add the base url and key variable from the environment
  private baseUrl: string = environment.baseUrl
  private apiKey: string = environment.apiKey

  constructor(private http: HttpClient) { }

  getTopHeadlines(countryCode: string, categoryCode: string) {
    let headlineUrl = `${this.baseUrl}/top-headlines?country=${countryCode}&category=${categoryCode}&apiKey=${this.apiKey}`;
    if (categoryCode == 'all') {
      headlineUrl = `${this.baseUrl}/top-headlines?country=${countryCode}&apiKey=${this.apiKey}`;
    }
    return this.http.get(headlineUrl);
  }

  getPublisherTopHeadlines(publisherCode: string) {
    const headlineUrl = `${this.baseUrl}/top-headlines?sources=${publisherCode}&apiKey=${this.apiKey}`;
    return this.http.get(headlineUrl);
  }
}
