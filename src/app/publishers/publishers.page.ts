import { Component, OnInit } from '@angular/core';
import { PUBLISHERS } from '../providers/publishers';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.page.html',
  styleUrls: ['./publishers.page.scss'],
})
export class PublishersPage implements OnInit {
  publishers: Array<any> = PUBLISHERS;
  constructor() { }

  ngOnInit() {
    console.log(this.publishers);
  }

}
