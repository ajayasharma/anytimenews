import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedNewsPageRoutingModule } from './saved-news-routing.module';

import { SavedNewsPage } from './saved-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedNewsPageRoutingModule
  ],
  declarations: [SavedNewsPage]
})
export class SavedNewsPageModule {}
