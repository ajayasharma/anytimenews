import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // CREATE A DUMMY ARTICLE OBJECT - COPY THE DATA FROM NEWSAPI EXAMPLE 
  articleObject = {
    "source": {
      "id": null,
      "name": "Yahoo.com"
    },
    "author": "Natalie Neysa Alund",
    "title": "Two dead, 768 ill amid Salmonella outbreak affecting 48 states, CDC says - Yahoo News",
    "description": "The CDC reports two separate outbreaks – one linked to contact with poultry in backyard flocks and one linked to contact with pig ear dog treats.",
    "url": "https://news.yahoo.com/two-dead-768-ill-amid-011759301.html",
    "urlToImage": "https://s.yimg.com/os/mit/media/m/social/images/social_default_logo-1481777.png",
    "publishedAt": "2019-07-25T01:32:57Z",
    "content": "NASHVILLE, Tenn. Two people are dead and 768 are ill due to a nationwide Salmonella outbreak, the Centers for Disease Control and Prevention reported.\r\nThe CDC recently posted updates regarding  two separate outbreaks one linked to contact with poultry in bac… [+1258 chars]"
  }

  articles:Array<any> = [
    this.articleObject,
    this.articleObject,
    this.articleObject,
    this.articleObject  
  ]
  constructor() {}

}
