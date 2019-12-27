import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  article: any = {};

  constructor(private storage: Storage, private iabrowser: InAppBrowser) {
    this.getArticle();
   }

  ngOnInit() {
  }

  async getArticle() {
    const result = await this.storage.get('currentArticle');
    if (result != null) {
      this.article = result;
      console.log(this.article);
    }
  }
  
  openArticle(url: string){
    this.iabrowser.create(url, '_system');
    this.iabrowser.create(url, '_blank');
  }

}
