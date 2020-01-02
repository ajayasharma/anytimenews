import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  article: any;
  constructor(private storage: Storage) { }

  ngOnInit() {
  }

  async getArticle(){
    const result = await this.storage.get('currentArticle');
    if(result != null){
      this.article = result;
    }
  }

}
