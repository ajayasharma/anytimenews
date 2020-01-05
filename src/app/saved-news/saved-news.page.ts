import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-saved-news',
  templateUrl: './saved-news.page.html',
  styleUrls: ['./saved-news.page.scss'],
})
export class SavedNewsPage implements OnInit {
  articleList: Array<any> = [];
  constructor(private storage: Storage, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.getArticles();
  }

  async getArticles() {
    const result = await this.storage.get('savedArticles');
    if (result != null) {
      this.articleList = result;
    }
  }

  async openDetail(article) {
    await this.storage.set('currentArticle', article);
    this.router.navigate(['/detail']);
  }

  async presentAlertConfirm(header, message, buttons) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons
    });

    await alert.present();
  }

  removeArticle(articleUrl) {
    this.presentAlertConfirm('Confirm', 'Are you sure you want to delete this article', [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: (blah) => {
          // doing nothing
          console.log('Cancelled');
        }
      }, {
        text: 'Okay',
        handler: async () => {
          // logic to remove the article here
          // using url to uniquely identify the article
          await this.storage.set('savedArticles', this.articleList.filter(article => article.url != articleUrl));
          this.getArticles();
        }
      }
    ]);
  }

}
