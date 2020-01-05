import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private storage: Storage) { }

  async saveArticle(article) {
    // check existing data
    try {
      const result = await this.storage.get('savedArticles');
      if (result != null) {
        // before pushing will check if result has the article or not
        const existingArticleList = result.filter(item => item.url == article.url);
        if (existingArticleList.length) {
          throw new Error('Oops! article already saved');
        }
        result.push(article);
        await this.storage.set('savedArticles', result);
      } else {
        await this.storage.set('savedArticles', [article]);
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
