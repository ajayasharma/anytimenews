import { Component } from '@angular/core';
import { NewsApiService } from './../providers/news-api.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private newsApiService: NewsApiService) {
    this.getTopHeadlines();
  }

  getTopHeadlines(){
    this.newsApiService.getTopHeadlines('us').subscribe(result=> {
      console.log('result', result);
    }, (error) => {
      console.log('error', error);
    });
  }
}
