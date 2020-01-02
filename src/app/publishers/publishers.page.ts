import { Component, OnInit } from '@angular/core';
import { PUBLISHERS } from '../providers/publishers';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.page.html',
  styleUrls: ['./publishers.page.scss'],
})
export class PublishersPage implements OnInit {
  publishers: Array<any> = PUBLISHERS;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPublisherNews(publisher){
    const navigationExtras: NavigationExtras = {
      queryParams: {
        code: publisher.id,
        name: publisher.name
      }
    }
    this.router.navigate(['/publisher-news'], navigationExtras);
  }

}
