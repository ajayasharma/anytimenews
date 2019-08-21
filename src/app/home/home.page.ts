import { Component } from '@angular/core';
import { NewsApiService } from './../providers/news-api.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  articleList: Array<any> = [];
  showPageLoader: boolean = false;

  constructor(private newsApiService: NewsApiService) {
    this.getTopHeadlines();
  }

  getTopHeadlines(){
    this.showPageLoader = true;
    this.newsApiService.getTopHeadlines('us').subscribe((result: any) => {
      this.articleList = result.articles.filter(article => article.urlToImage);
      this.showPageLoader = false;
    }, (error) => {
      console.log('error', error);
      this.showPageLoader = false;
    });
  }
}
