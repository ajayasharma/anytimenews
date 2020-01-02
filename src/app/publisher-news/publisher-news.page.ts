import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsApiService } from '../providers/news-api.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-publisher-news',
  templateUrl: './publisher-news.page.html',
  styleUrls: ['./publisher-news.page.scss'],
})
export class PublisherNewsPage implements OnInit {
  articleList: Array<any> = [];
  showPageLoader = false;
  publisherName = '';

  constructor(private activatedRoute: ActivatedRoute, private newsApiService: NewsApiService,
              private storage: Storage, private router: Router) {
    this.activatedRoute.queryParams.subscribe(result => {
      console.log('query params => ', result);
      if(result.code && result.name){
        this.getPublisherTopHeadlines(result.code);
        this.publisherName = result.name;
      }
    });
  }

  ngOnInit() {
  }

  getPublisherTopHeadlines(publishercode){
    this.showPageLoader = true;
    this.newsApiService.getPublisherTopHeadlines(publishercode).subscribe((result: any) => {
      this.articleList = result.articles.filter(article => article.urlToImage);
      this.showPageLoader = false;
    }, (error) => {
      console.log('error', error);
      this.showPageLoader = false;
    });
  }

  async openDetail(article) {
    await this.storage.set('currentArticle', article);
    this.router.navigate(['/detail']);
  }

}
