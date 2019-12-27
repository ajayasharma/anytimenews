import { Component } from '@angular/core';
import { NewsApiService } from '../providers/news-api.service';
import { COUNTRIES } from '../providers/countries';
import { CATEGORIES } from '../providers/categories';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  articleList: Array<any> = [];
  showPageLoader = false;
  countryList: Array<any> = COUNTRIES;
  selectedCountry = this.countryList[0];

  categoryList: Array<any> = CATEGORIES;
  selectedCategory = this.categoryList[0];

  constructor(private newsApiService: NewsApiService, private storage: Storage, private router: Router) {
    this.getTopHeadlines();
  }

  getTopHeadlines(){
    this.showPageLoader = true;
    this.newsApiService.getTopHeadlines(this.selectedCountry.code, this.selectedCategory.id).subscribe((result: any) => {
      this.articleList = result.articles.filter(article => article.urlToImage);
      this.showPageLoader = false;
    }, (error) => {
      console.log('error', error);
      this.showPageLoader = false;
    });
  }

  handleChange() {
    this.getTopHeadlines();
  }

  doRefresh(event) {
    this.getTopHeadlines();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  async openDetail(article) {
    await this.storage.set('currentArticle', article);
    this.router.navigate(['/detail']);
  }
}
